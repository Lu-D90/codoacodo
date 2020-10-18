
let lista_input = document.querySelectorAll(".form-control");

for (let i=0; i<lista_input.length; i++) {

    lista_input[i].addEventListener("invalid",(ev)=>{
        console.log(ev);
        console.log(ev.target.validationMessage);
    })
    
    lista_input[i].addEventListener("input",(ev)=>{
        lista_input[i].classList.remove("is-valid","is-invalid");
        if (lista_input[i].checkValidity()){
            lista_input[i].classList.add("is-valid");
        }else{
            lista_input[i].classList.add("is-invalid");
        }
    })
}


