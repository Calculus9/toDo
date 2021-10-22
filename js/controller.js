/**
 * Controller:链接用户和数据
 */
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // 展示初始化列表
        this.display(this.model.todos);

        // 绑定变化，每次数据一变，则display
        this.model.bindChange(this.display);
        // 绑定事件
        this.viewBind();
    }

    display = (todos) => {
        this.view.displayTodoList(todos);
    }

    viewBind() {
        debugger;
        this.view.bindAdd(this.setContent);
        this.view.bindDelete(this.setId);
        this.view.bindEdit(this.setEditString);
        this.view.bindToggle(this.setStatus);
    }

    /**
     * 增删改切换
     * @param {*} content 
     */
    setContent = (content) => {
        this.model.addContent(content);
    }

    setId = (id) => {
        this.model.deleteTodo(id);
    }

    setEditString = (id, content) => {
        this.model.editTodo(id, content);
    }

    setStatus = (id) => {
        this.model.toggleTodo(id);
    }
}