
//variables
let time = 0
let likedNumbers = {
    "initial" : 0
}

let counter = window.setInterval(onLoadCounter, 1000);
let status = 0;
let buttons = document.querySelectorAll('button');

// Pause button would could not find counter due to scope. 

// window.addEventListener("DOMContentLoaded", function() {
//     let counter = window.setInterval(onLoadCounter, 1000);
// }, false);


//functions
function onLoadCounter(){
    time += 1
    document.querySelector("#counter").textContent = time
 }  
   

function plus(){
    time +=1
    document.querySelector("#counter").textContent = time
}

function minus(){
    time -= 1
    document.querySelector("#counter").textContent = time
}

function heart(){
    if (!(likedNumbers.hasOwnProperty(time))){
        likedNumbers[time] = 1
    }
    else {
        likedNumbers[time] += 1
    }
    likes = document.createElement('div')
    likes.textContent = `Number ${time} has ${likedNumbers[time]} likes!`
    h1Header = document.querySelector("h1")
    h1Header.append(likes)
}

function pause(){
    if (status == 0){
        clearInterval(counter)
        buttons.forEach(btn => {
            if(btn.id != 'pause'){
                btn.disabled = true
            }
            else {
                btn.innerText = 'Resume'
            }
        });
        status = 1
    }
    else if (status == 1){
        counter = window.setInterval(onLoadCounter, 1000);
        buttons.forEach(btn => {
            if(btn.id != 'pause'){
                btn.disabled = false
            }
            else {
                btn.innerText = 'Pause'
            }
        });
        status = 0
    }
}

function addComment(e){
    e.preventDefault();
    let newComment = document.createElement("li")
    newComment.innerText = e.target['comment'].value
    let commentSection = document.getElementById('list')
    commentSection.append(newComment);
    e.target.reset()

}

// event listeners

document.querySelector("#minus").addEventListener('click', minus)
document.querySelector("#plus").addEventListener('click', plus)
document.querySelector("#heart").addEventListener('click', heart)
document.querySelector("#pause").addEventListener('click', pause)
document.querySelector("form").addEventListener('submit', addComment)



