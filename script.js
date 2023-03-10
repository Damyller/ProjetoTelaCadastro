let TarcisioVale = {
    handleSubmit: (event) => {
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0; i<inputs.length; i++) {
            let input = inputs[i];
            let check = TarcisioVale.checkInput(input);

            if(check !== true) {
                send = false;
                TarcisioVale.showError(input, check);
            }
        }

        if(send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null){
            rules = rules.split('|'); 
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == ""){
                            return "Campo nao pode ser vazio.";
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]) {
                            return "Campo tem que ter pelo menos " +rDetails[1]+ " caractes";
                        }
                    break;
                        
                }
            
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.style.borderColor = "#FF0000"

        let errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
     }
}


let form = document.querySelector('.TarcisioValidador');
form.addEventListener('submit', TarcisioVale.handleSubmit);