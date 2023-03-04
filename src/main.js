const input = document.querySelector('.task-list');
const successBtn = document.querySelector('.btn-success');
const ul = document.querySelector("ul");

successBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
    
        li.appendChild(p);        
        li.appendChild(addCheckBtn());
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

    }  
})

function addCheckBtn() {
    const checkList = document.createElement("input");
    
    checkList.setAttribute("type", "checkbox");
    checkList.textContent = "X";
    checkList.className = "btn-delete";
  
    return checkList;
  }

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item);
  
      const items = document.querySelectorAll("li");
    });
  
    return deleteBtn;
  }