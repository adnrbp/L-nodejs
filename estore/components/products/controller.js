
const repository = require('./repository')

function addProduct(product){
	return new Promise((resolve, reject) => {

		product["product"]["date"] = new Date();

		repository.add(product);

		resolve(product);

	});
}

function getProducts(){
	return new Promise((resolve, reject) => {
		resolve(repository.list());
		//reject(new Error("Error get movies"))
	});
}

module.exports = {
	addProduct,
	getProducts,
};