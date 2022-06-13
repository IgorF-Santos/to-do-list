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
        taskInputElement.style.textColor = '#000';

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
    form.reset();
    
};



function addTask(description) {    
    if(description !== null && description !== undefined){                      
        const taskMainContainerElement = document.createElement('div');
        const taskContainer = document.createElement('div');
        const newTask = document.createElement('input');
        const taskLabel = document.createElement('input');
        const deleteButton = document.createElement('button');
        const deleteIcon = document.createElement('i');
        const editButton = document.createElement('button');
        const editIcon = document.createElement('i');
        const taskDescriptionNode = document.createTextNode(description);
        
        newTask.setAttribute('type', 'checkbox');
        newTask.setAttribute('name', description);
        newTask.setAttribute('id', description);           
        taskLabel.setAttribute('value', description);
        taskLabel.setAttribute('readonly', true);
        taskLabel.setAttribute('rows', 4);
        taskLabel.setAttribute('maxlength', 100)
        deleteButton.setAttribute('type', 'button');        
        deleteIcon.classList.add("fa-solid", "fa-trash-can")
        editIcon.classList.add("fa-solid", "fa-pencil")

        newTask.classList.add('check')     
        taskLabel.classList.add('label', 'text')   
        
        taskContainer.classList.add('task-item');
        deleteButton.classList.add('delete-button');
        editButton.classList.add('edit-button');
        taskMainContainerElement.classList.add('tasks-main-container')          
        taskMainContainerElement.appendChild(taskContainer);
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(taskLabel);        
        taskMainContainerElement.appendChild(editButton);
        taskMainContainerElement.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);
        editButton.appendChild(editIcon);
        taskLabel.appendChild(taskDescriptionNode);        
        taskList.appendChild(taskMainContainerElement);

        increaseTaskToDoNumber();   
                   

        deleteButton.addEventListener('click', () => {
            if(taskList.querySelector('#' + description)){
                taskList.removeChild(taskMainContainerElement);
            }
            else if(done.querySelector('#' + description)){
                done.removeChild(taskMainContainerElement);
            }
         
        })
               
        newTask.addEventListener('click', function() {
            checkCheckBox(newTask, taskMainContainerElement, editButton, taskLabel, editIcon);
            increaseDoneTasksNumber();                        
        })

        editButton.addEventListener('click', function() {
            editTask(editButton, editIcon, taskLabel, taskMainContainerElement);
        })
        
        taskLabel.addEventListener('blur', function(){
            if(editButton.querySelector('.fa-square-check')){
                taskLabel.setAttribute('readonly', true);
                editIcon.classList.replace('fa-square-check', 'fa-pencil')                
                
                taskMainContainerElement.style.opacity = '1';
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
}


function checkCheckBox(newTask, taskMainContainerElement, editButton, taskLabel, editIcon){
    if(newTask.checked){        
        done.appendChild(taskMainContainerElement);
        taskLabel.setAttribute('readonly', true);
        taskMainContainerElement.removeChild(editButton);
    }
    else{        
        done.removeChild(taskMainContainerElement);
        taskList.appendChild(taskMainContainerElement);    
        taskMainContainerElement.insertBefore(editButton, taskMainContainerElement.children[1]);
        if(editButton.querySelector('.fa-square-check')){
            editIcon.classList.remove('fa-square-check');
            editIcon.classList.add('fa-pencil');
        }
    }
}

function editTask(editButton, editIcon, taskLabel,taskMainContainerElement){    
    for(let i=0; i < taskMainContainerElement.length; i++){            
        taskMainContainerElement[i].style.filter = 'blur(1px)';}
    if(editButton.querySelector('.fa-pencil')){
        taskLabel.removeAttribute('readonly');
        editIcon.classList.replace('fa-pencil', 'fa-square-check');        
        taskMainContainerElement.style.opacity = '0.7';        
        taskLabel.focus();                               
    }
    else{
        taskLabel.setAttribute('readonly', true);
        editIcon.classList.replace('fa-square-check', 'fa-pencil');
        taskMainContainerElement.style.opacity = '1';    
    }
}



function increaseTaskToDoNumber(){
    const todo = dashboardContainer.querySelector('.list-number');
    const countCheckBox = taskList.getElementsByClassName('check').length;  
    todo.innerHTML = countCheckBox;
}

function increaseDoneTasksNumber(){
    const todo = document.querySelector('.done-tasks-number');
    const countCheckBox = done.getElementsByClassName('check').length;    
    todo.innerHTML = countCheckBox;
    increaseTaskToDoNumber()    
}










    
    



