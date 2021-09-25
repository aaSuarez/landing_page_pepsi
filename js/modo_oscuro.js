const btn = document.querySelector('.modoOscuro');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let body = document.querySelector('body')
//     btn.innerText = 'Modo Claro'
//     body.style.background= '#000'
//     btn.style.background = '#fff'
//     btn.style.color = '#000'
// })

btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let body = document.querySelector('body')
        body.classList.add('black')
    })

