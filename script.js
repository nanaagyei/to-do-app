const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value) {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    } else {
        alert('Please enter a task');
    }
    inputBox.value = '';
    saveDate();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveDate();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.display = 'none';
        saveDate();
    }
}, false);

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function getSavedData(){
    if(localStorage.getItem("data")){
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

getSavedData();