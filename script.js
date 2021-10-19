var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('List_todos')) || [];


function renderTodos (){
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);


        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    if(todoText === ''){
        inputElement.style.border = '1px solid red';
    }
    else{
        inputElement.style.border = 'none';
        todos.push(todoText);

        inputElement.value = '';
    
        renderTodos();
        saveToStorage();
    }

   
}

buttonElement.onclick = addTodo;


function deleteTodo(pos){
    todos.splice(pos,1);

    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('List_todos', JSON.stringify(todos));
}