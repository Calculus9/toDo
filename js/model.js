/**
 * model:数据管理层：管理程序的数据
 * 功能：增删改切换
 */
export default class Model {
    constructor() {
        // 初始化我们的todo清单
        /**
         * ID:序号
         * content：内容
         * complete： 是否完成
         */
        this.todos = [
            {
                id: 1,
                content: "10.8完成1/3",
                complete: false
            }, {
                id: 2,
                content: "10.9完成2/3",
                complete: false
            }
        ];
        
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
        return this.todos;
    }

    /**
     * 传入需要删除的id，找到这个id删除对应的todo。
     */
    deleteTodo(id) {
        this.todos = this.todos.filter(d => d.id !== id);
        return this.todos;
    }
    /**
     * 输入需要修改的id和content，更新对应id的content。
     */
    editTodo(id, content) {
        this.todos = this.todos.map(d => {
            if (d.id === id) {
                return {
                    id: d.id,
                    content: content,
                    complete: d.complete
                }
            } else {
                return d;
            }
        })
        return this.todos;
    }

    /**
     * 切换完成状态
     */
    toggleTodo(id) {
        this.todos = this.todos.map((d) => {
            if (d.id === id) {
                return {
                    id: d.id,
                    content: d.content,
                    complete: !d.complete,
                }
            } else return d;
        })
    }
}