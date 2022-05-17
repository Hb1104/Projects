let number = document.getElementById("timer");
        
let timer = 1;

setInterval(function() {
    number.innerHTML = "Timer: " + timer;
    timer++;
},1000);
   

let block = document.getElementsByClassName("block");

let clicks = document.getElementById("clicks");

let clickBlocks = 1;

function movCounter () {
     return clicks.innerHTML = "clicks: " + clickBlocks++; 
}

for (let i = 0; i < block.length; i++) {
    block[i].setAttribute("numero",Math.round(Math.random()*100));
}

let redBlock = [];

function wrongBlock() {
    
    for (let j = 0; j < block.length; j++) {

        if (block[j].getAttribute("numero") < 20) {
            redBlock.push(block[j]);

            block[j].addEventListener("click" , function(){
                block[j].style.backgroundColor = "red"; 
                
            } );
        } else {
            block[j].addEventListener("click" , function(){
                block[j].style.backgroundColor = "blue"; 
            } );
        }
    } 
}
wrongBlock();

let numberRedBlocks = document.getElementById("numberRedBlocks");

numberRedBlocks.innerHTML = "Number of Red Blocks: " + redBlock.length;


for (k in redBlock) {
    redBlock[k].addEventListener("click", function() {
        setTimeout(function () {
            location.reload();
        }, 1500); 
    });
    
}


