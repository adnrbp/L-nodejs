
const repository = require('./repository')

const productRepo = new repository.repo();

function addProduct(product){
	return new Promise((resolve, reject) => {

		product["product"]["date"] = new Date();

		repository.add(product);

		resolve(product);

	});
}

function getAllProducts(){
	return new Promise((resolve, reject) => {
		resolve(repository.list());
		//reject(new Error("Error get movies"))
	});
}



function getProducts(tags){
	return new Promise((resolve, reject) => {
		//resolve(repository.list());
		console.log(tags);
		resolve(productRepo.getProducts(tags));
	});
}

function showProduct(productId){
	return new Promise((resolve, reject) => {
		resolve(productRepo.showProduct(productId));
	});
}

function createProduct(product){
	return new Promise((resolve, reject) => {
		console.log(product);
		resolve(productRepo.createProduct(product));
	});
}

function updateProduct({productId, product}){
	return new Promise((resolve, reject) => {
		console.log(product);
		console.log(productId);
		resolve(productRepo.updateProduct({productId, product}));
	});
}

function deleteProduct(productId){
	return new Promise((resolve, reject) => {
		console.log(productId);
		resolve(productRepo.deleteProduct(productId));
	});
}



module.exports = {
	addProduct,
	getAllProducts,

	getProducts,
	showProduct,
	createProduct,
	updateProduct,
	deleteProduct

};