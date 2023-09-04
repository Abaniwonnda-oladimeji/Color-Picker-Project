const body = document.querySelector('body');
const colorInput =  document.querySelector('#currentcolor');
const displayColor = document.querySelector('#displaycolor')
const opacityInput = document.querySelector('#currentopacity')
const displayOpacity = document.querySelector("#displayopacity")

displayColor.innerText = colorInput.value
colorInput.addEventListener('input', function(e){ 
    body.style.backgroundColor = colorInput.value;
    displayColor.innerText = colorInput.value
})
displayOpacity.innerText = opacityInput.value
opacityInput.addEventListener('input', function(e){ 
    body.style.opacity = opacityInput.value;
    displayOpacity.innerText = opacityInput.value
})
 