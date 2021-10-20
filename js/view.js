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
        this.app = document.getElementById("root");// 根节点
        this.initInput();//输入框一栏
        // todoList列表
        this.todoList = document.createElement("ul");
        this.todoList.setAttribute("class", "todo-list");
        this.app.appendChild(this.todoList);
    }

    initInput() {
        // 标题添加
        let title = document.createElement("h1");
        title.innerText = "Todo-list";
        this.title = this.app.appendChild(title);
        // 输入框
        this.form = document.createElement("form");//表单
        this.form.setAttribute("class", "input-form");
        this.input = document.createElement("input");//输入框
        this.input.placeholder = "Add todo";
        this.form.appendChild(this.input);
        // 提交按钮
        this.submitBtn = document.createElement("button");//提交按钮
        this.submitBtn.innerText = "提交";

        this.form.appendChild(this.submitBtn);
        this.app.appendChild(this.form);
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
            // 每一个列表项：有一个li标签，checkbox，editspan，删除按钮
            list.forEach((d) => {
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.setAttribute("id", d.id);

                // 多选框
                let checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.checked = d.complete;
                this.checkbox = li.appendChild(checkbox);
                this.checkbox.addEventListener("click", (x) => {
                    x.checked = !d.complete;
                });

                // 编辑框
                let editSpan = document.createElement("span");
                editSpan.textContent = d.content;
                editSpan.contentEditable = true;
                this.editSpan = li.appendChild(editSpan);
                // 提交按钮
                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "删除";
                this.deleteBtn = li.appendChild(deleteBtn);
                this.li = li;
                this.todoList.append(li);
            })
        }
    }

    /**
     * 绑定监听器
     * 1.新增：点击提交按钮，清空文本框，获取文本框内容并传送到model层
     * 2.删除：获取当前item的id，传到model层进行修改
     */

    bindAdd(getContent) {
        console.log(getContent);
        this.submitBtn.addEventListener("click", () => {
            let content = this.input.value;
            if (content) {
                getContent(content);
            } else {
                alert("请输入待办");
            }
        })
    }

    bindDelete(getId) {
        this.todoList.addEventListener("click", (event) => {
            if (event.target.type === "submit") {
                let id = event.target.parentNode.id;
                getId(id);
            }
        })
    }

    bindEdit(getEditString) {
        let text = null, id = null;
        this.todoList.addEventListener("input", (event) => {
            text = event.target.innerText;
        });
        this.todoList.addEventListener("focusout", (event) => {
            id = event.target.parentNode.id;
            getEditString(id, text);
        })
    }
}