/**
 * Controller:链接用户和数据
 */
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAdd(this.setContent);
        this.view.bindDelete(this.setId);
        this.view.bindEdit(this.setEditString);
        this.view.bindToggle(this.setStatus);

        this.display(this.model.todos);
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

    setEditString = (id, content) => {
        this.model.editTodo(id, content);
    }

    setStatus = (id) => {
        this.model.toggleTodo(id);
    }
}