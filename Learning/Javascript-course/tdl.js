let todo =["anubhav", "kll"];
AddTask();
  
function AddTask(){

    let todolistHTMl ='';
   for(let  i =0; i<todo.length;i++){
        let td = todo[i];
        const html = `<p>
        ${td} 
      
    <button  style= "color: white; background-color : red; border:none ; height: 25px; width: 60px;" onclick=" 
        todo.splice(${i},1);
        AddTask();
        " >Delete</button>
        </p>
        `;
        todolistHTMl +=html;

   }
   document.querySelector('.message').innerHTML = todolistHTMl;
   

};
