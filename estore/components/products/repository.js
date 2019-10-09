const { productsMock } = require('./mock');
const MongoLib = require('../../utils/lib/mongo');

class ProductRepository {
	constructor(){
		this.collection = 'products';
		this.mongoDB = new MongoLib();
	}
	async getProducts({ tags }){
		//const products = await Promise.resolve(productsMock);
		const query = tags && { tags: { $in: tags}};
		const products = await this.mongoDB.getAll(this.collection, query);
		return products || [];
	}
	
	async showProduct({productId}){
		const products = await this.mongoDB.get(this.collection, productId);
		return products || [];
	}

	async createProduct({ product }){
		console.log(product);
		const createdProductId = await this.mongoDB.create(this.collection, product);
		return createdProductId;
	}

	async updateProduct({ productId, product } = {}){
		const updatedProductId = await this.mongoDB.update(this.collection, productId, product);
		return updatedProductId;
	}
	async deleteProduct({ productId }){
		const deletedProductId = await this.mongoDB.delete(this.collection, productId);
		return deletedProductId;
	}


}



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
	repo: ProductRepository
}



