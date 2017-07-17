interface CarName {
	name : string;
}

interface CarPrice {
	price : number;
}

class Car<T,Y>{
	private dataArray= [];
	push = (value1: T) => this.dataArray.push(value1);

	displayArray() {
		let len = this.dataArray.length;
		for (var i = 0; i < len; i++){
			console.log(this.dataArray[i]);
		}
	}
}

let carObj = new Car();
carObj.push({ name: "Renault Duster" });
	carObj.push({ price: 9 });
