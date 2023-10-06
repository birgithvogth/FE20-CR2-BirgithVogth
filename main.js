let newTasks = JSON.parse(tasks);
console.log(newTasks)
// converted string to object

newTasks.forEach(task => {
    document.getElementById("result").innerHTML += `
    <div class="card">
  <img src="${task.image}" class="card-img-top" alt="${task.taskName}">
  <div class="card-body">
    <h5 class="card-title">${task.taskName}</h5>
    <p class="card-text">${task.description}</p>
    <span>Priority:</span>
    <button class="btn btn-success myButton" id="changeColor"> <span id="clicked">${task.importance}</span></button>
  </div>
</div>
    `   
});




    function changecolor(i) {
        const buttons = document.querySelectorAll(".myButton");
        if (newTasks[i].importance >=0 && newTasks[i].importance <= 1) {
            buttons[i].classList.remove("btn-primary");
            buttons[i].classList.add("btn-success");
        } else if (newTasks[i].importance >= 2 && newTasks[i].importance <= 3) {
            buttons[i].classList.remove("btn-primary", "btn-success");
            buttons[i].classList.add("btn-warning");
        } else if (newTasks[i].importance >= 4 && newTasks[i].importance <= 5) {
            buttons[i].classList.remove("btn-primary", "btn-success", "btn-warning");
            buttons[i].classList.add("btn-danger");
        }
    }
    


let buttons = document.querySelectorAll(".myButton");

buttons.forEach((button,i) => {
    button.addEventListener("click", function () {
        increaseClick(i);
        
    })
    
});


function increaseClick(i) {
    if (newTasks[i].importance < 5){
    newTasks[i].importance++; }
    document.querySelectorAll(".myButton span")[i].innerHTML = newTasks[i].importance;
    changecolor(i)
    
}