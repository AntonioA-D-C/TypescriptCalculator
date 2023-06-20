



     function init(){

        const uno= (<HTMLInputElement>document.getElementById("uno"));
        const dos= (<HTMLInputElement>document.getElementById("dos"));
        const tres= (<HTMLInputElement>document.getElementById("tres"));
        const cuatro= (<HTMLInputElement>document.getElementById("cuatro"));
        const cinco= (<HTMLInputElement>document.getElementById("cinco"));
        const seis= (<HTMLInputElement>document.getElementById("seis"));
        const siete= (<HTMLInputElement>document.getElementById("siete"));
        const ocho= (<HTMLInputElement>document.getElementById("ocho"));
        const nueve= (<HTMLInputElement>document.getElementById("nueve"));
        const zero= (<HTMLInputElement>document.getElementById("zero"));
        const inputBox= (<HTMLInputElement>document.getElementById("box"));
        const deeThis =(<HTMLInputElement>document.getElementById("del"));
        const aC =(<HTMLInputElement>document.getElementById("allclear"));
        
        const sumar =(<HTMLInputElement>document.getElementById("sumar"));
        const restar =(<HTMLInputElement>document.getElementById("restar"));
        const dividir =(<HTMLInputElement>document.getElementById("dividir"));
        const multiplicar =(<HTMLInputElement>document.getElementById("multiplicar"));
        const modulus =(<HTMLInputElement>document.getElementById("mod"));
        
        const igual =(<HTMLInputElement>document.getElementById("result"));
        var operandoa="";
        var operandob="";
        var operacion="";
        
        class Calculadora{
            
            constructor(){
              
            uno.onclick= function(e){
                inputBox.value= inputBox.value + "1"
            };
           dos.onclick= function(e){
                inputBox.value= inputBox.value + "2"
            };
            tres.onclick= function(e){
                inputBox.value= inputBox.value + "3"
            };
           cuatro.onclick= function(e){
                inputBox.value= inputBox.value + "4"
            };
          cinco.onclick= function(e){
                inputBox.value= inputBox.value + "5"
            };
           seis.onclick= function(e){
                inputBox.value= inputBox.value + "6"
            };
            siete.onclick= function(e){
                inputBox.value= inputBox.value + "7"
            };
           ocho.onclick= function(e){
               inputBox.value= inputBox.value + "8"
            };
            nueve.onclick= function(e){
                inputBox.value= inputBox.value + "9"
            };
            zero.onclick= function(e){
                inputBox.value= inputBox.value + "0"
            };
            deeThis.onclick= function(e){
                let thisString = inputBox.value;
                 thisString=thisString.slice(0, -1);
                 inputBox.value= thisString;
            
            };
        
            aC.onclick= function(e){
                object.limpiar();
                operandoa= "";
                operandob= "";
             };
             
             sumar.onclick = function(e){
                 operandoa=    inputBox.value;
                 operacion ="+";
                 object.limpiar();
              }
             
             modulus.onclick = function(e){
                 operandoa=    inputBox.value;
                 operacion ="%";
                 object.limpiar();

              }
             restar.onclick = function(e){
                 operandoa=    inputBox.value;
                 operacion ="-"
                object.limpiar();
              }
              multiplicar.onclick = function(e){
                 operandoa= inputBox.value;
                 operacion ="*"
                object.limpiar();
                 if(operandob !=""){
                    object.resolver()
                  }
              }
              dividir.onclick = function(e){
                 operandoa= inputBox.value;
                 operacion ="/";
                 object.limpiar();
                 if(operandob !=""){
                  
                  }
              }
              igual.onclick = function(e){
                operandob= inputBox.value;
                object.resolver();
                
              }
              
           }
           
           resolver(){
            object.limpiar();
            var res= 0
              switch(operacion){
                 case "+":
                    res= parseFloat(operandoa) + parseFloat(operandob)
                    break;
        
                    case "-":
                    res= parseFloat(operandoa) - parseFloat(operandob)
                    break;
        
                    case "*":
                    res= parseFloat(operandoa) * parseFloat(operandob)
                    break;
        
                    case "/":
                    res= parseFloat(operandoa) / parseFloat(operandob)
                    break;
        
                    case "%":
                        res= parseFloat(operandoa) % parseFloat(operandob)
                        break;
              }
              inputBox.value=res.toString();  
            }
            limpiar(){
               
            inputBox.value="";
            }
            
            resetear(){
                
                inputBox.value="";
            operandoa = "";
            operandob = "";
            operacion = "";
             }
            
        }
        
        const object = new Calculadora();
          
        }
        