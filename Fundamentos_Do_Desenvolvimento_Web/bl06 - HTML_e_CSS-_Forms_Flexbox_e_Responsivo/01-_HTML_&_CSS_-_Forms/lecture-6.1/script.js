let myButton = document.getElementById("bt");

myButton.addEventListener('click',onClicked)

function onClicked(event){
    event.preventDefault();

    console.log('entrou no click');
    myForm.submit();
    
}