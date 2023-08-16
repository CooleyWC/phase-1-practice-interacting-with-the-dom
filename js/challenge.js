document.addEventListener('DOMContentLoaded', (timerStart));

//buttons and counter start
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
let heartBtn = document.getElementById('heart')
let pauseResumeBtn = document.getElementById('pause')
let counterArea = document.getElementById('counter');
let submitBtn = document.getElementById('submit');
let count = 0;
let numOfLikes = {};
let intervalID = setInterval(timerStart, 1000);
let likeListItem ;

// eventListeners
plusBtn.addEventListener('click',function(){
    count++;
    counterArea.innerText = count;
})

minusBtn.addEventListener('click',function(){
    count--;
    counterArea.innerText = count;
})

heartBtn.addEventListener('click', handleLike);

//check the countArea value
//check if the countArea value is already in the object
//if countArea value exists, update the like value only
//if countArea value does not exit, create a key/value pair

function handleLike(){
    let likeArea = document.querySelector('.likes');
    
    let counterAreaNum = counterArea.innerText;
    if(numOfLikes.hasOwnProperty(counterAreaNum)){
        let count1 = numOfLikes[counterAreaNum]++;

        likeListItem.textContent = `${counterAreaNum} has been liked ${count1} times`;

        } else {
            let count2 = numOfLikes[counterAreaNum] = 1;
            likeListItem = document.createElement('li');
            likeListItem.textContent = `${counterAreaNum} has been liked ${count2} times`;
            likeArea.appendChild(likeListItem);
        }
    };


document.querySelector('form').addEventListener('submit',(subE)=>{
    subE.preventDefault();
    handleComment(subE.target["comment-input"].value)
})

function handleComment(comment){
    let commentArea = document.querySelector('#list');
    let unList = document.createElement('ul');
    unList.textContent = comment;
    console.log(comment)
    commentArea.appendChild(unList);

};

//timer functions
pauseResumeBtn.addEventListener('click',(pauseFunction));

function timerStart(){
    count++;
    counterArea.innerText=count;
};

function pauseFunction(){
    if(pauseResumeBtn.innerText === 'pause'){
        clearInterval(intervalID);
        pauseResumeBtn.innerText = 'resume';
        minusBtn.setAttribute('disabled', true);
        plusBtn.setAttribute('disabled', true);
        heartBtn.setAttribute('disabled', true);
    } else {
        pauseResumeBtn.innerText = 'pause';
        minusBtn.removeAttribute('disabled');
        plusBtn.removeAttribute('disabled');
        heartBtn.removeAttribute('disabled');
        intervalID = setInterval(timerStart, 1000);
    }
}
