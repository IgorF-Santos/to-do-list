let btn = document.querySelector('#button-menu');
let dashboardContainer = document.querySelector('.cards-view');
let icon = document.querySelector('#menu-icon');

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
        const mainContainer = document.createElement('div');
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
        taskLabel.classList.add('label')   
        mainContainer.classList.add('main-container');
        taskContainer.classList.add('task-item');
        deleteButton.classList.add('delete-button')
                        
        mainContainer.appendChild(taskContainer);
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(taskLabel);
        mainContainer.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);
        taskLabel.appendChild(taskDescriptionNode);        
        taskList.appendChild(mainContainer);

        increaseTaskNumber();                

        deleteButton.addEventListener('click', () => {
            if(taskList.querySelector('#' + description)){
                taskList.removeChild(mainContainer);
            }
            else if(done.querySelector('#' + description)){
                done.removeChild(mainContainer);
            }
         
        })

        taskContainer.addEventListener('click', () => {
//            let statusInputCheck = newTask.getAttribute('checked');
            if(!newTask.checked && (newTask.checked !== null || newTask.checked !== true || newTask.checked !== "checked" || newTask.checked !== undefined)){                
                newTask.setAttribute('checked', true);
                //console.log(newTask)
                done.appendChild(mainContainer);
            }
            else if(done.querySelector('#' + description)){
                newTask.removeAttribute('checked');
                done.removeChild(mainContainer);
                taskList.appendChild(mainContainer)
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

function increaseTaskNumber(){
    const todo = document.querySelector('.list-number');
    const countCheckBox = taskList.getElementsByTagName('input').length;    
   
    const todoNode = document.createTextNode(countCheckBox);
    todo.appendChild(todoNode);
    todo.replaceChild(todoNode, todoNode);
    const vsf= document.getElementsByClassName('task-item').length
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









    
    


