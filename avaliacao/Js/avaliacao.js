
var cont = 0;
var contC = 0;
var attempts = 0; 
var imprimir = 0;

function checkresult(){
    
    contC++;
    for (let i = 1; i <= 12; i++) {
        if (document.getElementById("certa"+i).checked) {
            cont++;
        }
        if(cont >=8){
            // alert(cont);
            document.getElementById('butt_invi').style.display ='block';
        }
    }
 
    // alert("Você acertou "+cont+" questões");
   
    document.getElementById('resultav').innerHTML= "Você acertou "+cont+" questões" 
    cont = 0;

    // if(aprovado()){

    //     alert("aprovado");
    // }

    attempts +=1;
    document.getElementById("htmlt2").innerHTML = "TENTATIVAS "+attempts+ "/3";

    
    if(attempts == 3){

        document.getElementById('butt_invi').style.display ='none';
        document.getElementById('butt_').style.display ='none';
    }
    }

    
function aprovado(){

        if(cont >=8){

            return true;
        } 
}



    
// function teste(){

//     document.querySelectorAll('.input1 input[name*="test"]').forEach((input)=>{
       
//         if(input.value=="true"){
//             input.remove();
//         }

//     })

//   alert(window.location.href=="avalicao.html");


