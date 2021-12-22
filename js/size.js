/*
Author       : Andi Ary Anggara ( Triple A )
Template Name: Basic Mini Shop - Bootstrap 5 HTML
Version      : 1.0 Course Journey 1 #DeaCourse
*/

const container = document.getElementById("mainpage"), 
screen = document.getElementById("screen");
const resize = () => {    
        const isChecked = screen.checked;
        isChecked ? container.classList.remove("container") : container.classList.add("container");
      };
      


// function resize(){
//     if(screen.checked){
//         container.classList.remove("container");
//        } else{
//         container.classList.add("container");
//         }
        
    
// }

addEventListener("change",resize,false);

