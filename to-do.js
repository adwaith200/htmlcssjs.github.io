// Add a todo
document.querySelector('.button_add').addEventListener('click',function(){
    //Get the input
    todoinputtext=document.querySelector('.task_input').value;
    html=`
    <div class="task">
        <div>
            <input type="checkbox">${todoinputtext}
        </div>
        <button class='task_delete'>X</button>
    </div>
    `;
    // Insert the data to the todo-list
    document.querySelector('.task_list').insertAdjacentHTML('beforeend',html);
    // Clear input for the next entry
    todoinputtext=document.querySelector('.task_input').value='';
});

// Delete a todo
document.querySelector('.task_list').addEventListener('click',function(e){
    e.target.parentElement.remove();
})



