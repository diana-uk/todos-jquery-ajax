const todos = function () {
    const displayTodos = (data) => {
        data.forEach((todo) => {
            const todoElement = 
            `<div class="c-todo-card">
                <p>${todo.title}</p>
                <p>TODO</p>
            </div>`
            $('#id-todos-container').append(todoElement);
        });
    };

    const showMessage = (message = '', elementId = '', className = '') => {
        $('#id-todos-container').html(`<div id="${elementId}" class="${className}">${message}</div>`);
        console.log('here');
    };

    const clearContainer = (containerElement) => {
        if(!containerElement) 
            return;
        $(containerElement).empty();
    }

    const fetchTodos = () => {
        clearContainer($('#id-todos-container'));
        const todosApiUrl = "https://jsonplaceholder.typicode.com/todos";
        $.ajax({
            url: todosApiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if(data === null) {
                    showMessage(error, ID_NAMES.generalMessageId);
                    return;
                }
                displayTodos(data);
            },
            error: function (error) {
                console.error(`fetchTodos function: error in fetching todos with status ${error.status}`)
                showMessage('Error in fetching todos. try again later.', ID_NAMES.errorContainerId, CLASS_NAMES.errorContainerClass);
            }
        });
    }

    return {
        fetchTodos
    };
}();