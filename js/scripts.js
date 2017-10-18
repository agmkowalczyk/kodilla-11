function Phone(brand, price, color, screen, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};
Phone.prototype.printSizeCamera = function() {
	console.log("The phone screen size is " + this.screen + " inch and the camera is " + this.camera + " MPix.");
};

var iPhone6S = new Phone("Apple", 2250, "silver", 5, 8);

iPhone6S.printInfo();
iPhone6S.printSizeCamera();

var SamsungGalaxyXYZ = new Phone ("Samsung", 1500, "black", 5.5, 12);
SamsungGalaxyXYZ.printInfo();
SamsungGalaxyXYZ.printSizeCamera();