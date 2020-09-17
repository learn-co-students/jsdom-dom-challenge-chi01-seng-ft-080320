//Variables
const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const likesContainer = document.getElementsByClassName("likes")[0];
const submitBtn = document.querySelector('#submit');
const form = document.querySelector("form")


//Functions
function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1
}

function decrementCounter() {
    counter.innerText = parseInt(counter.innerText) - 1
}

function startCounter() {
    setInterval(incrementCounter, 1000);
}

function likeNumber() {
    const liCollection = likesContainer.children
    let alreadyLiked = false
    let likedNumLi;
    if (!liCollection.length) {
        createAndAppendLi()
    } else {
        for (const li of liCollection) {
            if (counter.innerText === li.innerHTML.split(" ")[1]){
                alreadyLiked = true
                likedNumLi = li
            }
        }

    if(alreadyLiked) {
        likedNumLi.innerText = `Number ${counter.innerText} has ${parseInt(likedNumLi.innerText.split(" ")[3]) + 1} likes`
    } else {
        createAndAppendLi()
        }
    }
}

function createAndAppendLi() {
    const likeLi = document.createElement("LI");
    likeLi.innerHTML = `Number ${counter.innerText} has 1 like`; 
    likesContainer.append(likeLi);
}

function addComment(event) {
        event.preventDefault()

        const comment = event.target['comment-input'].value
        let liTag = document.createElement('li')
        liTag.innerHTML = comment

        const commentsContainer = document.querySelector('#comments-container')
        commentsContainer.append(liTag)

        form.reset()
    }

function createSubmitBtn(){
    alert("Thank you!")
}

//Event Listeners
plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", likeNumber);
submitBtn.addEventListener("click", createSubmitBtn);
form.addEventListener('submit', addComment);


//Invoked Functions
startCounter()