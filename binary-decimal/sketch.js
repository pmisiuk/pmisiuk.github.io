let num = '';
let byte = [];
let shiftLeft;
let shiftRight;
let decimalP;

function mousePressed() {
	for (let i=0; i < byte.length; i++) {
		byte[i].toggle(mouseX, mouseY);
	}
}

function setup() {
	createCanvas(400, 100);
	frameRate(12);
	binaryToDecimal(num);
	decimalP = createP('');
	shiftLeft = createButton('<<');
	shiftRight = createButton('>>');
	shiftLeft.mousePressed(shiftBitsLeft);
	shiftRight.mousePressed(shiftBitsRight);

	let w = width/8;
	for (let i=0; i<8; i++) {
		byte[i] = new Bit(w/2 + i * w, 50, w - 4);
		byte[i].setState(num.charAt(i));
	}
}

function shiftBitsLeft() {
	let num = getBinaryString();
	let val = binaryToDecimal(num);
	val = val << 1;
	num = decimalToBinary(val);
	for (let i=0; i<8; i++) {
		byte[i].setState(num.charAt(i));
	}
}

function shiftBitsRight() {
	let num = getBinaryString();
	let val = binaryToDecimal(num);
	val = val >> 1;
	num = decimalToBinary(val);
	for (let i=0; i<8; i++) {
		byte[i].setState(num.charAt(i));
	}
}

function getBinaryString() {
	num = '';
	for (let i=7; i>-1; i--) {
		byte[i].show();
		num += byte[i].state ? '1' : '0';
	}
	return num;
}

function draw() {
	background(70, 130, 180);

	decimalP.html(binaryToDecimal(getBinaryString()));
}

function binaryToDecimal(val) {
	let sum = 0;
	for (let i=val.length-1; i>-1; i--) {
		let bit = val.charAt(i);
		sum += parseInt(bit * pow(2, i));
	}
	return sum;
}

function decimalToBinary(val) {
	let bits = '';
	let rem = val;

	for (let i = 7; i >= 0; i--) {
		let div = pow(2, i);
		let bitVal = floor(rem / div);
		bits += bitVal;
		rem = rem % div;
	}
	return bits;
}