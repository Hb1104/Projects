



const DISPLAY = document.getElementById("result"); // Campo de exibição dos algarismos.



const clicks = function (index) {   // Função para determinar o clique da aplicação.
    if (DISPLAY.innerHTML.length < 18) {
        if (DISPLAY.innerHTML == "0") {
            DISPLAY.innerHTML = ''; 
        }
        
       return DISPLAY.innerHTML += index;
       
    }
} 

const result = function() {
    
    if (DISPLAY.innerHTML.includes('%')) { // Verificação função porcentagem
        percent ();
    } else if ((DISPLAY.innerHTML[0] == '*') || (DISPLAY.innerHTML[0] == '/')) { // Verificação caracter inicial inválido
        return DISPLAY.innerHTML = '0';
    }  else {
        return DISPLAY.innerHTML = eval(DISPLAY.innerHTML);;
    }
} 

const clean = () => DISPLAY.innerHTML = "0"; // Função para limpar o Display.

const back = () => DISPLAY.innerHTML = DISPLAY.innerHTML.slice(0 , -1); // Função para apagar o último dígito.
    
function percent () { // Função para calcular o porcentual. 
        if (DISPLAY.innerHTML[0] == '%' ) {
            return DISPLAY.innerHTML = "0";
        }
        let percentResult;
        percentResult = DISPLAY.innerHTML.split("%" , DISPLAY.innerHTML.length);
        percentResult = percentResult[0] /100 * percentResult[1];
        DISPLAY.innerHTML = percentResult;
}

