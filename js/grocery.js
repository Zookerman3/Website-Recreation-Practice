window.addEventListener("load", function () {
  // document.querySelector("form#defaultHidden").removeAttribute("class");  
  
  const form = this.document.querySelector("form");
  form.removeAttribute("class")
  const div = document.querySelector("div")

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    let firstInput = document.getElementById('firstInput').value;
    let secondInput = document.getElementById('secondInput').value;
    let thirdInput = document.getElementById("thirdInput").value;
    
    let selectionArray = [firstInput, secondInput, thirdInput];

    selectionArray = selectionArray.sort()
    
    
    function createUlElementAndAddLiElements(array) {
      // Create the list element:
      var firstUlElement = document.createElement('ul');

      for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var firstliElement = document.createElement('li');

        // Set its contents:
        firstliElement.appendChild(document.createTextNode(array[i].toUpperCase()));

        // Add it to the list:
        firstUlElement.appendChild(firstliElement);
      }

      // Finally, return the constructed list:
      return firstUlElement;
    }
    
    
    
    // Add the contents of options[0] to #foo:
    document.getElementById('foo').appendChild(createUlElementAndAddLiElements(selectionArray));
    form.setAttribute("class","defaultHidden");
    div.removeAttribute("class")
    
  });

});