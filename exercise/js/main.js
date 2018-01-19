 //Create three objects with four properties (one must be an image file path) using object literal notation
 var litObjCar1 = {
	 	make: "ford",
	 	model: "mustang",
	 	price: 35095,
	 	image: "img/mustang.jpg",
	 }
	 
var	litObjCar2 = {	
		make:"porsche",
	 	model: "911",
	 	price: 91100
	    image: "img/911.jpg",
	 }

var litObjCar3 = {
	 	make: "toyota",
	 	model: "tacoma",
	 	price: 37500,
	    image: "img/tacoma.jpg",
	 }

	 console.log( litObjCar1,litObjCar2,litObjCar3);
// Create the same three objects, with the same four properties, using a constructor notation.

function Cars(make,model, price, image) {
 	this.make = make;
 	this.model = model;
 	this.price = price;
 	this.image = image;
 }

 var conObj1 = new Cars("ford","mustang",35095,"img/mustang.jpg")
 var conObj2 = new Cars("porsche","911",91100, "price","img/911.jpg")
 var conObj3 = new Cars("toyota",37500,"tacoma","img/tacoma.jpg")
 console.log(conObj1, conObj2, conObj3);
 // Add to a method each literal object, that multiplies two numbers and returns the product.


var litObjCar1 = {
	 
	 	make: "ford",
	 	model: "mustang",
	 	price: 35095,
	 	image: "img/mustang.jpg",
	 	salesTax: function() {
	 		return this.price * 0.09
	 	}
	}
	 
var	litObjCar2 = {	
		make:"porsche",
	 	model: "911",
	 	price: 91100,
	    image: 	"img/911.jpg",
	 	salesTax: function() {
	 	 	return this.price * 0.09
	 	}
	}


var litObjCar3 = {
		make: "toyota",
	 	model: "tacoma",
	 	price: 37500,
	    image: "img/tacoma.jpg",
	    salesTax: function () {
	    	return this.price * 0.09
	    }
	 }
	 console.log(litObjCar1.salesTax(), litObjCar2.salesTax(), litObjCar3.salesTax());


	//Add to the constructor function, create a method that multiplies two numbers and returns the product.
function Cars(make,model,price,image) {
	this.make = make;
	this.model = model;
	this.price = price;
	this.image = image;
	this.salesTax = function() {
		return this.price * 0.09;
	};
}



var conObj1 = new Cars("ford","mustang",35095,"img/mustang.jpg");
var conObj2 = new Cars("porsche","911",91100,"img/911.jpg");
var conObj3 = new Cars("toyota","tacoma",37500,"img/tacoma.jpg");

//Add each constructor object to an array.

var carsArray = [conObj1,conObj2,conObj3];

//Loop through the array of objects

for(var i = 0; i < carsArray.length; i++) {
// for each one create an element to add the content to (one needs to be an image element).

var newDiv = document.createElement("div");
var newImg = document.createElement("img");
var newH1 = document.createElement("h1");
var newH2 = document.createElement("h2");
var newP = document.createElement("p");
var newSpan = document.createElement("span");
console.log(newDiv, newImg, newH1, newH2, newP, newSpan);

// Still in the loop, create text nodes for each piece of content

var newH1Text = document.createTextNode(carsArray[i].make);	
var newH2Text = document.createTextNode(carsArray[i].model);
var newPText = document.createTextNode("price: " + carsArray[i].price);
var newspanText = document.createTextNode("sales tax:" + carsArray[i].salesTax());
//add those elements you created
newH1.appendChild(newH1Text);
newH2.appendChild(newH2Text);
newP.appendChild(newPText);
newSpan.appendChild(newspanText);
// Still in the loop, update the source and alt attributes of the image.

newImg.src = carsArray[i].image;
newImg.alt = carsArray[i].make + " " + carsArray[i].model;

//Add the elements to the HTML so a user can view them.

  newDiv.appendChild(newImg);
  newDiv.appendChild(newH1);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  newDiv.appendChild(newSpan);

  document.getElementById("display").appendChild(newDiv)
}



	 	

