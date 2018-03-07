function executeTheseFunctions(e) {

  // highlightInputFields
  chrome.tabs.executeScript(null,
    {
      code: "var inputs = document.getElementsByTagName('input'); for (var i = 0; i < inputs.length; i++) {inputs[i].style.border = 'cadetblue 4px solid'}"
    });
  // add event listeners to input tags
  chrome.tabs.executeScript(null,
    {
      code: "var inputs = document.getElementsByTagName('input'); for (var i = 0; i < inputs.length; i++) {inputs[i].addEventListener('click', contentScriptFunction)}"
    })
  chrome.tabs.executeScript(null,
    {
      code: "fillInForm();"
    })

  window.close();
}

document.getElementById("work-button").addEventListener('click', executeTheseFunctions);
