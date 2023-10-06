let newTasks = JSON.parse(tasks);

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML=""
    


newTasks.forEach(thing => {

    let backgroundColor;
    if (thing.importance >= 0 && thing.importance <= 1) {
        backgroundColor = "success"  
    }
    else if (thing.importance >= 2 && thing.importance <= 3) {
        backgroundColor = "warning"  
    }
    else if (thing.importance >= 4 && thing.importance <= 5) {
        backgroundColor = "danger"  
    }

    resultDiv.innerHTML += `
    <div class="card">
  <img src="${thing.image}" class="card-img-top" alt="${thing.taskName}">
  <div class="card-body">
    <h5 class="card-title">${thing.taskName}</h5>
    <p class="card-text">${thing.description}</p>
    <span>Importance</span>
    <button class="btn btn-primary btn-${backgroundColor} numberButton"> <span class="number">${thing.importance}</span></button>
  </div>
</div>
    `;
});




let buttons = document.querySelectorAll(".numberButton");


buttons.forEach((button,i) => {
    button.addEventListener("click",function() {
        increaseNumber(i)
        
    })
});

function increaseNumber(i) {
if (newTasks[i].importance < 5) {
    

    newTasks[i].importance++;
    document.querySelectorAll(".number")[i].innerText = newTasks[i].importance;
}

    
}
