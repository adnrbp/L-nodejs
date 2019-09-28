
const repository = require('./repository')
const chalk = require("chalk")


function addProduct(name, price){
	return new Promise((resolve, reject) => {
		if (!name || !price){
			console.error(chalk.red('[productController] No hay nombre o precio'));
			reject('Los datos son incorrectos');
			return false;
		}

		const fullProduct = {
			name: name,
			price: price,
			date: new Date(),
		};

		repository.add(fullProduct);

		resolve(fullProduct);

	});
}

function getProducts(){
	return new Promise((resolve, reject) => {
		resolve(repository.list());
	});
}

module.exports = {
	addProduct,
	getProducts,
};