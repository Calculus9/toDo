/**
 * Controller:链接用户和数据
 */
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.display(this.model.todos);

        this.view.bindAdd(this.getContent);
    }

    display = (todos) => {
        this.view.displayTodoList(todos);
    }

    getContent = (content) => {
        this.model.addContent(content);
    }

}