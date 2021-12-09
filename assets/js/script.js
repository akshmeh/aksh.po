var header = document.querySelector('header');
header.addEventListener('click',()=>{
    if(header.classList.contains('header-hover')){

        header.classList.remove('header-hover');
    }else{

        header.classList.add('header-hover');
    }
})
//bounce animation
var circleMove = document.getElementsByClassName('object');
//set top value for each object
var obj1 = 0;
var objR1 = 10;   

var  obj2 = 90;
var objR2 = 100;

var  obj3 = 50;
var objR3 = 40;
// timer for bounce effect
var loopTimer = 100;
//boubce backward function
function objReverseLoop(){
    setTimeout(function() { 
        // console.log('work');  
        //set top value     
    var top2 = objR1 + '%'
    var top4 = objR2 + '%'
    var top6 = objR3 + '%'
    circleMove[0].style.top = top2;
    circleMove[1].style.top = top4;
    circleMove[2].style.top = top6;
    //decrease or increase top value
    objR1--;
    objR2--;
    objR3++;
    //if top value not matches else again run forward function
    if(objR1>=0 && objR2 >=90 && objR3 <= 50){
        objReverseLoop()
    }else{
        obj1 = 0
        obj2 = 90
        obj3 = 50
        objLoop()   
    }
}, loopTimer);

}
//bounce fordward fuction
function objLoop() {   
    //set top value       
  setTimeout(function() {   
    var top1 = obj1 +'%'  
    var top3 = obj2 + '%'
    var top5 = obj3 + '%'
    circleMove[0].style.top = top1;
    circleMove[1].style.top = top3;
    circleMove[2].style.top = top5;
    //decrease or increase top value
    obj1++;                    
    obj2++;                    
    obj3--;   
    //if top value not matches else again run backward function                 
    if (obj1 <= 10 && obj2 <= 100 && obj3>=40) { 
      objLoop();             
    } 
    if(circleMove[0].style.top == '10%' && circleMove[1].style.top == '100%' && circleMove[2].style.top == '40%'){
        objR1 = 10;
        objR2 = 100;
        objR3 = 40;
        objReverseLoop();
    }                      
  }, loopTimer)
}
//run forward function once
objLoop();  

// document.getElementsByClassName('typing');
setTimeout(() => {
    document.getElementsByClassName('typing')[0].style.borderRight = 'none'
    document.getElementsByClassName('typing-p')[0].style.display = 'block';
},3500);



//obstecals move
var skilObs = document.getElementsByClassName('skill-obstecals'),
play = document.getElementsByClassName('play'),
base =  document.querySelector('.base'),
character = document.querySelector('.character');
play[0].addEventListener('click',()=>{
   base.style.borderBottom = '3px solid var(--primary-color)';
   character.style.display = 'block'
   skilObs[0].style.display = 'block'
   play[0].style.display = 'none'
   startMove();
})

var startPoint = 0;
function startMove(){
    setTimeout(function () {
        var leftMin = startPoint +'px'
        skilObs[0].style.marginLeft = leftMin;
        startPoint--
        // console.log('true');
        if(startPoint >= -2000){
            startMove()
        }
    }, 20);
}
// jump button click
// var obsmovLeft = false
// document.addEventListener('keydown',press);
// function press(e){
//     if(e.keyCode === 38 || e.keyCode === 87){
//         console.log('true');
//         obsmovLeft = true
//     }
    
// }
// document.addEventListener('keyup',realease);
// function realease(e){
//     if(e.keyCode === 38 || e.keyCode === 87){
//         obsmovLeft = false
//     }
    
// }
// if(obsmovLeft){
// console.log('obsmovLeft');
//     jumpMove();
// }
var leftArrow = false,
rightArrow = false
document.addEventListener('keydown',press)
function press(e){
 if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
   rightArrow = true
 }

}
document.addEventListener('keyup',release)
function release(e){
 if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
   rightArrow = false
 }

}

var moves = true
setInterval(() => {

 if(rightArrow && jumpStart == 72){
console.log('true');
// moves = true
jumpMove()
}}, 100);
var jumpSpeed = 8
var jumpStart = 72,
jumpBack = 20;
function jumpMove(){
    // console.log('work');
    setTimeout(function () {
        var topDec = jumpStart + '%'
        character.style.top = topDec;
        jumpStart--;
         if(jumpStart>19){
             jumpMove()
            }if(character.style.top == '20%'){
            jumpBack = 20
            console.log('work');
            airPause()
        }
    }, jumpSpeed);
} 
function airPause(){
setTimeout(() => {
    normalJump()
}, 2000);
}
function normalJump(){
    setTimeout(function () {
        var topInc = jumpBack + '%'
        character.style.top = topInc;
        jumpBack++;
        if(jumpBack <73){
        // if(character.style.top == '72%'){
            jumpStart = 72
            normalJump()
        }
    }, jumpSpeed)}