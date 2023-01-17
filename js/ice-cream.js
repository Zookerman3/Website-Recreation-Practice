window.addEventListener("load", function(){
    let firstUl = document.createElement("ul")
    let firstLi = document.createElement("li")
    let secondLi = document.createElement("li")
    let thirdLi = document.createElement("li")
  
    
    let iceCream= ['Chocolate ','Vanilla ','Neapolitan' ];   
    let newArray1 = []
  
  
     newArray1.push(iceCream[0]);
     newArray1.push(iceCream[1]);
     newArray1.push(iceCream[2]);
  
   
    firstLi = newArray1[0];
    secondLi = newArray1[1];
    thirdLi = newArray1[2];
  
    firstUl.append(firstLi);
    firstUl.append(secondLi);
    firstUl.append(thirdLi);
  
     document.body.append(firstUl);
  
  
  
  
    
  
  
  });
  