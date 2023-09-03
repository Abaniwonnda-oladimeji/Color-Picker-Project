const colorInput =  document.querySelector('#currentcolor');
const body = document.querySelector('body');
const displayColor = document.querySelector('#displaycolor')
displayColor.innerText = colorInput.value
colorInput.addEventListener('input', function(e){ 
    body.style.backgroundColor = colorInput.value;
    displayColor.innerText = colorInput.value
})
 