const checkBox = document.querySelector('.checkbox');
console.log(checkBox);

const textFields = document.querySelectorAll('.textfield');
console.log(textFields);

const deleteButton = document.getElementById('delete');
console.log(deleteButton);

const divBox = document.querySelector('.output');
console.log(divBox);



function handleInputChange(e) {
    const target = e.target;

    console.log('Avsändaren är:', target);

    const nameAttribute = target.name;

    if(nameAttribute === 'content') {    
        divBox.innerHTML = target.value;

    }
}

const colorInput = document.getElementById('color');

checkBox.addEventListener('change', function(e) {
    const color = colorInput.value;
    divBox.style.backgroundColor = color;
});

textFields.forEach(function(textField) {
    textField.addEventListener ('input', handleInputChange);

});

deleteButton.addEventListener('click', function() {
    divBox.remove();
});

