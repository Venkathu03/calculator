var inputele=document.getElementById('input')

var button1=document.getElementById('one')
button1.addEventListener('click',btnone)
function btnone() {
    
    var one=1;
    inputele.value+=one
}

var button2=document.getElementById('two')
button2.addEventListener('click',btn2)
function btn2() {
    
    var two=2;
    inputele.value+=two;
}
var button3=document.getElementById('three')
button3.addEventListener('click',btn3)
function btn3() {
    
    var three=3;
    inputele.value+=three;
}

var button4=document.getElementById('four')
button4.addEventListener('click',btn4)
function btn4() {
    
    var four=4;
    inputele.value+=four;
}

var button5=document.getElementById('five')
button5.addEventListener('click',btn5)
function btn5() {
    
    var five=5;
    inputele.value+=five;
}

var button6=document.getElementById('six')
button6.addEventListener('click',btn6)
function btn6() {
    
    var six=6;
    inputele.value+=six;
}

var button7=document.getElementById('seven')
button7.addEventListener('click',btn7)
function btn7() {
    
    var seven=7;
    inputele.value+=seven;
}


var button8=document.getElementById('eight')
button8.addEventListener('click',btn8)
function btn8() {
    
    var eight=8;
    inputele.value+=eight;
}

var button9=document.getElementById('nine')
button9.addEventListener('click',btn9)
function btn9() {
    
    var nine=9;
    inputele.value+=nine;
}

var button0=document.getElementById('zero')
button0.addEventListener('click',btn0)
function btn0() {
    
    var zero=0;
    inputele.value+=zero;
}

var buttondot=document.getElementById('dot')
buttondot.addEventListener('click',btndot)
function btndot() {
    
    var dot='.';
    inputele.value+=dot;
}

var clear=document.getElementById('reset')
clear.addEventListener('click',clr)
function clr() {
    
    var reset=""
    inputele.value=reset;
}