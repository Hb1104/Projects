
        let blocks = document.getElementsByClassName("item");
        let optionX = document.getElementById("optionX");
        let optionCircle = document.getElementById("optionCircle");
        let buttonH2 = document.getElementById("h2");

        let opt;
        let check = 0;
        
        function play (index) {

          if (opt >= 9 && check == 9 ) {
                console.log("End Game!");

            } else if (opt % 2 == 0 && opt <=9) {
                    
                blocks[index].innerHTML = "X";
                blocks[index].style.color = "darkblue";
                opt++;
                check++;
               
            } else if (opt % 2 == 1 && opt <=9) {
                
                blocks[index].innerHTML = "O";
                blocks[index].style.color = "darkred";
                opt++;
                check++;
        
            } else {
                alert("Escolha X ou Círculo");
            
            }
            restart ();
        } 

         optionX.addEventListener("click" , function () {
            opt = 0;
            optionX.style.visibility = "hidden";
            optionCircle.style.visibility = "hidden";
            buttonH2.style.visibility = "hidden";
           
        })

        optionCircle.addEventListener("click" , function () {
            opt = 1;
            optionX.style.visibility = "hidden";
            optionCircle.style.visibility = "hidden";
            buttonH2.style.visibility = "hidden";
            
        })

        function restart () {
            if (check == 9 ) {
                buttonH2.style.visibility = "visible";
                buttonH2.innerHTML = '<button id="restart">Restart?</button>'
            }
        }
       
        buttonH2.addEventListener('click' , reload);
           
        function reload () {
            location.reload();
        }

     