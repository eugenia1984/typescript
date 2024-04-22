type GroceryStore<NameType , CityType> = {
	name : NameType 
	city : CityType
};

type GroceryItem = unknown;

type CapreseSalad = {
	name : 'Caprese Salad';
	price : 14.99;
	inStock : true
};

console.log(CapreseSalad['name'] === 'Caprese Salad';

console.log(CapreseSalad['price'] === 14.99;

console.log(CapreseSalad['inStock'] === true;

console.log(GroceryStore<'Kroger', 'Detroit'> ===  { name: 'Kroger', city: 'Detroit' };

console.log( GroceryStore<'Stop \'N Shop', 'Massachusetts'> === { name: 'Stop \'N Shop', city: 'Massachusetts' };
