function highlightInputField {
  document.getElementsByTagName('input').style.backgroundColor = "blue";
}

var inputs = document.getElementsByTagName('input');
inputs.forEach(function(inputField) {inputField.backgroundColor = "blue"});