function display(num){
    let screen = document.getElementById("screen");
    screen.value += num;
}

function insertSym(sym){
    let screen = document.getElementById('screen')
    screen.value += sym;
}

function calculate(){
	var screen = document.getElementById("screen");
	var result = eval(screen.value);
	screen.value = result;
};

function clr(){
    var screen = document.getElementById("screen");
    screen.value = "";
    document.getElementById("hulk").style.backgroundColor="grey"
   };
       
function del(){
    var screen = document.getElementById("screen");
    var exp = screen.value;
    var led = exp.substring(0, exp.length-1);
    screen.value = led;
    };