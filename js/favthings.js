window.addEventListener("load", function(){
const form =  this.document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault()
  let firstInput = document.getElementById('firstInput').value;
  let secondInput = document.getElementById('secondInput').value;
  let thirdInput = document.getElementById("thirdInput").value;
  let firstUl = document.createElement("ul")
  let firstLi = document.createElement("li")
  let secondLi = document.createElement("li")
  let thirdLi = document.createElement("li")

  
  let newArray = [firstInput,secondInput,thirdInput];   
  let newArray1 = []


  //  newArray.push(array[0]);
  //  newArray.push(array[1]);
  //  newArray.push(array[2]);


   newArray1.push(newArray[1]);
   newArray1.push(newArray[0]);
   newArray1.push(newArray[2]);

  //  firstUl.append(newArray1[0]);
  //  firstUl.append(newArray1[1]);
  //  firstUl.append(newArray1[2]);
  firstLi = newArray1[0];
  secondLi = newArray1[1];
  thirdLi = newArray1[2];

  firstUl.append(firstLi);
  firstUl.append(secondLi);
  firstUl.append(thirdLi);

   document.body.append(firstUl);




  


});






});