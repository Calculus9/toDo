/**
 * Controller:链接用户和数据
 */
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        console.log(this.view);
        this.display(this.model.todos);

        this.view.bindAdd(this.setContent);
        this.view.bindDelete(this.setId);
    }

    display = (todos) => {
        this.view.displayTodoList(todos);
    }

    setContent = (content) => {
        this.model.addContent(content);
    }

    setId = (id) => {
        this.model.deleteTodo(id);
    }
}