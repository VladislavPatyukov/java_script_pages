const node_for_click = document.getElementById('for_click')
function find_edit(){
    const surname=document.getElementsByTagName('span')[1].innerHTML
    console.log(surname.innerText)
    surname.innerText='Patyukov'
}
node_for_click.addEventListener('click',find_edit)