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