const btn = document.querySelector('#button-menu');
const dashboardContainer = document.querySelector('.cards-view');
const icon = document.querySelector('#menu-icon');
const darkMode = document.getElementById('dark-mode-button');

btn.addEventListener('click', function(){
    if(dashboardContainer.style.display === 'block'){
        dashboardContainer.style.display = 'none';
        icon.className = "fa-solid fa-bars";
    }
    else{
        dashboardContainer.style.display = 'block';        
        icon.className = "fa-solid fa-circle-xmark";
    }
});

darkMode.addEventListener('click', function(){
    const bodyElement = document.getElementById('body-container');
    const cardsElements = document.getElementsByClassName('card');
    const mainContainerElement = document.getElementById('main-container');
    const taskInputElement = document.getElementById('task-input');
    const taskMainContainerElement = document.getElementsByClassName('tasks-main-container');    
    const textElements = document.getElementsByClassName('text');   
    const darkModeIcon = darkMode.querySelector('.fa-solid')

    if(darkModeIcon.className === 'fa-solid fa-sun'){
        darkModeIcon.className = "fa-solid fa-moon";

        darkModeIcon.style.color= '#E0FFFF';
        
        bodyElement.style.backgroundColor = '#16141e'
        bodyElement.style.transition = 'background-color 2s';
        mainContainerElement.style.backgroundColor = '#231f30';
        mainContainerElement.style.transition = 'background-color 2s';

        for(let i=0; i < textElements.length; i++){
            //textElements[i].style.color = 'snow';
            //textElements[i].style.transition = 'color 2s';
        }

        for(let i=0; i < cardsElements.length; i++){
            cardsElements[i].style.backgroundColor = '#1b1728';
            cardsElements[i].style.transition = 'background-color 2s';
        }
        
        for(let i=0; i < taskMainContainerElement.length; i++){
            taskMainContainerElement[i].style.backgroundColor = '#1b1728';
            taskMainContainerElement[i].style.transition = 'background-color 2s';

            taskMainContainerElement[i].addEventListener('mouseover', function() {
                taskMainContainerElement[i].style.backgroundColor = '#242034'
            });
            taskMainContainerElement[i].addEventListener('mouseout', function() {
                taskMainContainerElement[i].style.backgroundColor = '#1b1728'
            });            
        }
        
    }
    else{
        darkModeIcon.className = "fa-solid fa-sun";

        darkModeIcon.style.color= '#FFFF00';
        bodyElement.style.backgroundColor = '#604bc9'
        bodyElement.style.transition = 'background-color 2s';
        mainContainerElement.style.backgroundColor = '#4a35b0';
        mainContainerElement.style.transition = 'background-color 2s';

        for(let i=0; i < textElements.length; i++){
            //textElements[i].style.color = '#1c1c1c';
            //textElements[i].style.transition = 'color 2s';
        }

        for(let i=0; i < cardsElements.length; i++){
            cardsElements[i].style.backgroundColor = '#533cc4';
            cardsElements[i].style.transition = 'background-color 2s';
        }
        
        for(let i=0; i < taskMainContainerElement.length; i++){
            taskMainContainerElement[i].style.backgroundColor = '#533cc4';
            taskMainContainerElement[i].style.transition = 'background-color 2s';

            taskMainContainerElement[i].addEventListener('mouseover', function() {
                taskMainContainerElement[i].style.backgroundColor = '#5b42cb'
            });
            taskMainContainerElement[i].addEventListener('mouseout', function() {
                taskMainContainerElement[i].style.backgroundColor = '#533cc4'
            });            
        }
    }
})


const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
const done = document.getElementById('done');


form.onsubmit = function (e) {    
    e.preventDefault();
    const inputField = document.getElementById('task-input'); 
    addTask(inputField.value);
    //arraytasks(inputField.value)
    form.reset();
    
};



function addTask(description) {    
    if(description !== null && description !== undefined){                      
        const taskMainContainerElement = document.createElement('div');
        const taskContainer = document.createElement('div');
        const newTask = document.createElement('input');
        const taskLabel = document.createElement('text-area');
        const deleteButton = document.createElement('button');
        const deleteIcon = document.createElement('i');
        const taskDescriptionNode = document.createTextNode(description);
        
        newTask.setAttribute('type', 'checkbox');
        newTask.setAttribute('name', description);
        newTask.setAttribute('id', description);                
        //newTask.setAttribute('checked', false);
        taskLabel.setAttribute('value', description);
        taskLabel.setAttribute('readonly', true);
        deleteButton.setAttribute('type', 'button');        
        deleteIcon.classList.add("fa-solid", "fa-trash-can")        

        newTask.classList.add('check')     
        taskLabel.classList.add('label', 'text')   
        
        taskContainer.classList.add('task-item');
        deleteButton.classList.add('delete-button')
        taskMainContainerElement.classList.add('tasks-main-container')          
        taskMainContainerElement.appendChild(taskContainer);
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(taskLabel);
        taskMainContainerElement.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);
        taskLabel.appendChild(taskDescriptionNode);        
        taskList.appendChild(taskMainContainerElement);

        increaseTaskToDoNumber();   
        increaseDoneTasksNumber();             

        deleteButton.addEventListener('click', () => {
            if(taskList.querySelector('#' + description)){
                taskList.removeChild(taskMainContainerElement);
            }
            else if(done.querySelector('#' + description)){
                done.removeChild(taskMainContainerElement);
            }
         
        })

        taskContainer.addEventListener('click', () => {
//            let statusInputCheck = newTask.getAttribute('checked');
            if(!newTask.checked && (newTask.checked !== null || newTask.checked !== true || newTask.checked !== "checked" || newTask.checked !== undefined)){                
                newTask.setAttribute('checked', true);
                //console.log(newTask)
                done.appendChild(taskMainContainerElement);
            }
            else if(done.querySelector('#' + description)){
                newTask.removeAttribute('checked');
                done.removeChild(taskMainContainerElement);
                taskList.appendChild(taskMainContainerElement)
                //console.log(newTask)
            }
            
        })

    
        

        /*const teste = document.getElementsByClassName('check');
        //let teste = newTask.getAttribute("checked")

        const checkboxId = newTask.getAttribute('id');
        const checkboxName = newTask.getAttribute('name');
        const testeDois = document.getElementsByTagName('label')
        arraytasks(teste, testeDois)

        function arraytasks(teste, testeDois){
            
            //const taskLabel = document.getElementsByClassName('aa');
            const TASKS = []
            let obj = {            
                taskId: teste,
                taskName: testeDois,
                //taskDescription: taskLabel.for
            }
        
            TASKS.push(obj)
           //localStorage.setItem("tasks", JSON.stringify(TASKS));
            //let storageTasks = JSON.parse(localStorage.getItem("tasks"));
            //console.log(TASKS)
            //let valueCheck = teste.getAttribute("checked")
            console.log(TASKS)
        }
        */
    }    
    ///const newTask = document.getElementsByClassName('check');
    //closeTask(description)
}

function increaseTaskToDoNumber(){
    const todo = document.querySelector('.list-number');
    const countCheckBox = taskList.getElementsByTagName('input').length;    
   
    const todoNode = document.createTextNode(countCheckBox);
    todo.appendChild(todoNode);
    todo.replaceChild(todoNode, todoNode);
    const vsf= document.getElementsByClassName('task-item').length
    //console.log(vsf);
}

function increaseDoneTasksNumber(){
    const todo = document.querySelector('.done-tasks-number');
    const countCheckBox = done.getElementsByTagName('input').length;    
   
    const todoNode = document.createTextNode(countCheckBox);
    todo.appendChild(todoNode);
    //todo.replaceChild(todoNode, todoNode);
    //const vsf= document.getElementsByClassName('task-item').length
    //console.log(vsf);
}

//const newTask = document.getElementsByClassName('check');








/*
    
    newTask.addEventListener('click', teste())   
    function teste () {
        newTask.setAttribute('onclick', teste());
        if(newTask.checked){
            console.log('checado')
        }
        else{
            console.log('não checado')
        }
    }
    */









    
    


