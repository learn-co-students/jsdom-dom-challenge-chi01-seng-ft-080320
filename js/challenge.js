//variables
const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const likesContainer = document.getElementsByClassName("likes")[0];
let comment = document.getElementsByClassName("comments").value
let comments = document.getElementsByClassName("comments")
const submit = document.getElementById("submit")

//functions
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
    const existingLi = doesLiExist()
    existingLi ? amendLi(existingLi) : createAndAppendLi()
}

function createAndAppendLi() {
    const likeLi = document.createElement("LI")
    likeLi.innerText = `Number ${counter.innerText} has 1 like`;
    likesContainer.append(likeLi);
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

function amendLi(likedNumLi) {
    const likeNumLikes = parseInt(likedNumLi.innerText.split(" ")[3]) + 1;
    likedNumLi.innerText = `Number ${counter.innerText} has ${likeNumLikes} ${pluralizationHandler(likeNumLikes)}`
}

function pluralizationHandler(num) {
    const positiveLike = num * num
    return positiveLike === 1 ? "like" : "likes"
}

function createComment() {
    let newComment = document.createElement("p")
    newComment.innerHTML = comment
    comments.appendChild(newComment)
}

//event listeners
plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", createAndAppendLi);
submit.addEventListener("click", createComment)


//invoked functions
startCounter()