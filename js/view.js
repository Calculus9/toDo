/**
 * View:视图层
 */
export default class View {
    constructor() {
        this.app = null;

        // 输入框
        this.title = null;
        this.form = null;
        this.input = null;
        this.submitBtn = null;
        // todo列表
        this.todoList = null;
        this.initView();
    }
    /**
     * 初始化列表
     */
    initView() {
        // 根节点
        this.app = document.getElementById("root");
        // 标题添加
        let title = document.createElement("h1");
        title.innerText = "Todo-list";
        this.title = this.app.appendChild(title);
        // 输入框
        this.form = document.createElement("form");//表单
        this.input = document.createElement("input");//输入框
        this.input.placeholder = "Add todo";

        this.form.appendChild(this.input);
        this.submitBtn = document.createElement("button");//提交按钮
        this.submitBtn.innerText = "提交";
        this.submitBtn.addEventListener("click", () => {
            alert(this.input.value);
        })
        this.form.appendChild(this.submitBtn);
        this.app.appendChild(this.form);

        this.todoList = document.createElement("ul");
        this.app.appendChild(this.todoList);
        this.displayTodoList([
            {
                id: 1,
                content: "111",
                complete: false
            }
        ]);
    }

    /**
     * 跟新todoList列表
     * 展示现有列表li
     */
    displayTodoList(list) {
        this.todoList.innerHTML = "";
        if (list.length === 0) {
            this.todoList.append("Nothing to do! Add a task?");
        } else {
            /**
             * 每一个列表项：有一个li标签，checkbox，editspan，删除按钮
             */
            list.forEach((d) => {
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.setAttribute("id", d.id);
                this.todoList.append(li);

                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.checked = d.complete;
                this.checkbox = li.appendChild(checkbox);
                //TODO: 点击之后切换我们的complete属性
                this.checkbox.addEventListener("click", () => {
                    this.checkbox.checked = !d.complete;
                    d.complete = !d.complete;
                });

                let editSpan = document.createElement("span");
                editSpan.textContent = d.content;
                editSpan.contentEditable = true;
                this.editSpan = li.append(editSpan);

                let submitBtn = document.createElement("button");
                submitBtn.innerText = "删除";
                this.submitBtn = li.append(submitBtn);
                // TODO: 点击删除这个item
                this.submitBtn.addEventListener("click", () => {
                    
                });
            })
        }
    }
}