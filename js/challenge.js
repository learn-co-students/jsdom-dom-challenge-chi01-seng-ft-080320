let timer = document.querySelector('#counter')
let intervalID = window.setInterval(incrementTimer, 1000)
let addButton = document.querySelector('#plus')
let minusButton = document.querySelector('#minus')
let pauseButton = document.querySelector('#pause')
let status = 0
let likeButton = document.querySelector('#heart')
let likesarray = []
let submitButton = document.querySelector('#submit')

function incrementTimer() {
        time = parseInt(timer.innerHTML, 10)
        time = time += 1 
        timer.innerHTML = time 
        likesarray = []
        likes = 1
}

addButton.addEventListener("click", incrementTimer)

function decreaseTimer() {
    time = parseInt(timer.innerHTML, 10)
    time = time -= 1
    timer.innerHTML = time 
}

minusButton.addEventListener("click", decreaseTimer)



function pauseTimer() {
    switch (status) {
        case 0:
            window.clearInterval(intervalID)
            document.querySelectorAll('button').forEach(function(button) {
                button.disabled = true
            })
            pauseButton.disabled = false
            pauseButton.innerText = "resume"
            status = 1
            break
        case 1:
            intervalID = window.setInterval(incrementTimer, 1000)
            document.querySelectorAll('button').forEach(function(button) {
                button.disabled = false
            })
            pauseButton.innerText = "pause"
            status = 0
            break
    }
}

pauseButton.addEventListener("click", pauseTimer)

let likes = 1
function addLike() {
    let time = timer.innerHTML
    if (likesarray.length > 0) {
        let newElement = document.getElementById(`${time}likes`) 
        likes += 1
        newElement.innerHTML = `${time} has been liked ${likes} times`
    }
    else {
        let like = document.createElement('li')
        like.id = `${time}likes` 
        like.innerHTML = `${time} has been liked 1 time`
        document.querySelector('ul').appendChild(like)
        likesarray.push(1)
        
    }
}

likeButton.addEventListener("click", addLike)

function addComment() {
    let comment = document.querySelector('#comment-input').value
    let newComment = document.createElement('p')
    newComment.innerHTML = comment 
    document.querySelector('.comments').appendChild(newComment)
    document.querySelector('#comment-input').value = ""
}

submitButton.addEventListener("click", addComment)