window.addEventListener("load", function(){

const firstH1Element = document.querySelector("h1")
const secondH1Tag = document.createElement("h1")
const firstPTag = document.createElement("p")
const firstImgTag = this.document.createElement("img")
const thirdH1Tag = this.document.createElement("h1")
const firstUl = this.document.createElement("ul")
const firstLi = this.document.createElement("li")
const secondLi = this.document.createElement("li")
const firstH2Tag = this.document.createElement("h2")
const firstSourceTag = this.document.createElement("a")


firstH1Element.remove();


secondH1Tag.innerText = "Webpage Recreation Practice";
firstPTag.innerText = "The HTML of this webpage was created with JavaScript.";
firstImgTag.src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
firstImgTag.setAttribute('width', '50%');
thirdH1Tag.innerText = "Facts about the Multicolored Tanager";
firstLi.innerText = "It is endemic to the mountains of Colombia.";
secondLi.innerText = "It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.";
firstH2Tag.innerText = "Source";
firstSourceTag.href="https://en.wikipedia.org/wiki/Multicoloured_tanager";
firstSourceTag.innerText = "Wikipedia";



document.body.append(secondH1Tag);
document.body.append(firstPTag);
this.document.body.append(firstImgTag);
this.document.body.append(thirdH1Tag);
firstUl.append(firstLi);
firstUl.append(secondLi);
this.document.body.append(firstUl);
this.document.body.append(firstH2Tag)
this.document.body.append(firstSourceTag);
});