const boton = document.getElementById('btn');

boton.addEventListener('click', ()=>{
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor(rgb(num1, num2, num3));
});