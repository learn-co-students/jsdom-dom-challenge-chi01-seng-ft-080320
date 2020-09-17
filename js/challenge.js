//Variables
const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const likesContainer = document.getElementsByClassName("likes")[0];



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
    !likesContainer.children.length ? createAndAppendLi() : determineIfCreateOrAmendLi()
}

function determineIfCreateOrAmendLi() {
    const existingLi = doesLiExist()
    existingLi ? amendLi(existingLi) : createAndAppendLi()
}

function doesLiExist() {
    const counterNum = counter.innerText;
    for (const li of likesContainer.children) {
        const liNum = li.innerText.split(" ")[1]
        if (counterNum === liNum) {
            return li
        }
    }
}

function createAndAppendLi() {
    const likeLi = document.createElement("LI");
    likeLi.innerText = `Number ${counter.innerText} has 1 like`;
    likesContainer.append(likeLi);
}

function amendLi(likedNumLi) {
    const likeNumLikes = parseInt(likedNumLi.innerText.split(" ")[3]) + 1;
    likedNumLi.innerText = `Number ${counter.innerText} has ${likeNumLikes} ${pluralizationHandeler(likeNumLikes)}`
}

function pluralizationHandeler(num) {
    const postiveLike = num * num
    return postiveLike === 1 ? "like" : "likes"
}



//Event Listeners
plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", likeNumber);




//Invoked Functions
startCounter()