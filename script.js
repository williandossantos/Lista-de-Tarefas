






let container = document.querySelector("container")
let section = document.querySelector("section")
let form = document.querySelector(".form")

/* 01 */
form.addEventListener("submit", el => {
    el.preventDefault()

    let elTexto = document.querySelector(".texto")
    /*let inputText = el.target.querySelector(".btn-add")*/
    
    if(!elTexto.value){
        console.log("Invállio")
        return
    }
    
    let texto = elTexto.value
    respLista(texto)
    
})

/* 02 */
const criaP = (texto)=> {

    let p = document.createElement("p")
    p.innerHTML = texto
    return p
}

/* 04 */
const criaButton = ()=> {

    let btnWrap = document.createElement("div")
    let editar =  document.createElement("button")
    let excluir =  document.createElement("button")

    editar.classList.add("btn-editar")
    excluir.classList.add("btn-excluir")
    btnWrap.classList.add("btn-wrap")

    editar.innerText = "Editar"
    excluir.innerText = "Excluir"

    btnWrap.appendChild(editar)
    btnWrap.appendChild(excluir)

    /*editarClick(editar)*/
    
    return btnWrap

}

/* 05 */
const editarClick = (button, p) => {
   
    if(!button.className == "btn-editar"){}

    
    button.addEventListener("click",el =>{

        let insiraMensagem = prompt("")
        
        if(!insiraMensagem) return

        p.innerText = insiraMensagem
    })
    
}

/* 06 */
const excluirClick = (excluir, div) => {
   
    if(!excluir.className == "btn-excluir")return
    
    excluir.addEventListener("click",el =>{

    section.removeChild(div)
        
        
       
       
    })

    
    
    
}

/* 03 */
const respLista = (texto) => {

    
    let div = document.createElement("div") 
    div.classList.add("resposta")

    let wrap = document.createElement("div")
    wrap.classList.add("wrap")

    let p = criaP(texto)
    let btnWrap = criaButton()

    wrap.appendChild(p)
    wrap.appendChild(btnWrap)

    div.appendChild(wrap)
    
    editarClick(btnWrap.firstChild, p)
    excluirClick(btnWrap.lastChild, div)
    

    // insere um elemento após o container dentro de section
    section.insertBefore(div, container);
    
}   























