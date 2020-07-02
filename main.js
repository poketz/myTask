const input_field = document.getElementById('input-field') //id='input-field'の要素
const display = document.getElementById('display')  //id='display'の要素
const button = document.getElementById('button')  //id='button'の要素

button.addEventListener('click', inputFieldToDisplay, false);

function inputFieldToDisplay() {
    
    //input_fieldの内容をdisplayに反映させる関数
    display.innerHTML = input_field.value
    
}


