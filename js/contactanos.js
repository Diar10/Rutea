const inputs = document.querySelectorAll(".caja-texto");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

const formulario = document.querySelector("#form");
/*const btnEnviar = document.querySelector("#btnEnviar");

formulario.addEventListener('submit',enviarForm)

function enviarForm(event) {
    event.preventDefault()
    const form = new FormData(this)
    btnEnviar.setAttribute('href',`mailto:rutea@gmail.com?subject=${form.get('nombre')}${form.get('email')}${form.get('telefono')}&body=${form.get('sugerencia')}`)
    btnEnviar.click()
}*/

formulario.addEventListener('submit',enviarForm2)

async function enviarForm2(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept':'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias')
    }
}