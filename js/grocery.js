window.addEventListener("load", function() {
  // document.querySelector("form#defaultHidden").removeAttribute("class");
  
  const form =  this.document.querySelector("form");
  form.removeAttribute("class")
  
  form.addEventListener("submit", function(event) {
    event.preventDefault()
   
    let firstInput = document.getElementById('firstInput').value;
    let secondInput = document.getElementById('secondInput').value;
    let thirdInput = document.getElementById("thirdInput").value;

    let selectionArray = [firstInput, secondInput, thirdInput];   
    console.log(selectionArray)
    // let firstUlElement = document.createElement("ul")

    var firstUlElement = document.createElement("ul");
 
    
 
  
    
    
    
    selectionArray.forEach(function(element){
      
      let firstLiElement = document.createElement("li");
      firstUlElement.appendChild(firstLiElement);

      firstLiElement.innerHTML = firstLiElement.innerHTML + element;
      
    });
    // document.body.appendChild(firstUlElement);

    // document.body.append(firstUlElement);

     

  
  });

});