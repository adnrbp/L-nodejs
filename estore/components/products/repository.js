
const list = [];

function addProduct(product){
	list.push(product);

}

function getProducts(){
	return list;
}

module.exports = {
	add: addProduct,
	list: getProducts,
	// get 
	// update
	// delete
}