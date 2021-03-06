/**
 * model:数据管理层：管理程序的数据
 * 功能：增删改切换
 */
export default class Model {
    constructor() {
        // 初始化我们的todo清单
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    }

    /**
     * 我们点击提交后，将文本框内的内容上传进行新增操作。
     * 新增一个todo并将其添加到todos列表中。
     */
    addContent(content) {
        let id = this.todos.length ?
            this.todos.length + 1
            : 1;
        let todo = {
            id: id,
            content: content,
            complete: false
        };
        this.todos = [...this.todos, todo];
        this.onTodoList(this.todos);
        this.save(this.todos);
        return this.todos;
    }

    /**
     * 传入需要删除的id，找到这个id删除对应的todo。
     */
    deleteTodo(id) {
        this.todos = this.todos.filter(d => {
            if (d.id !== +id) return d;
        });
        this.onTodoList(this.todos);
        return this.todos;
    }
    /**
     * 输入需要修改的id和content，更新对应id的content。
     */
    editTodo(id, content) {
        this.todos = this.todos.map(d => {
            if (d.id === +id) {
                return {
                    id: d.id,
                    content: content,
                    complete: d.complete
                }
            } else {
                return d;
            }
        })
        this.onTodoList(this.todos);
        this.save(this.todos);
        return this.todos;
    }

    /**
     * 切换完成状态
     */
    toggleTodo(id) {
        this.todos = this.todos.map((d) => {
            if (d.id === +id) {
                return {
                    id: d.id,
                    content: d.content,
                    complete: !d.complete,
                }
            } else {
                return d;
            };
        });
        this.onTodoList(this.todos);
        this.save(this.todos);
        return this.todos;
    }

    bindChange(callback) {
        this.onTodoList = callback;
    }

    save(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}