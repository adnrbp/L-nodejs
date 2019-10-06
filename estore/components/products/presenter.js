const response = require('../../network/response');
const controller = require('./controller');
const { productsMock } = require('./mock');


const getProductsP = async function (req, res, next) {
	await controller.getProducts()
		.then((productList) =>{
			response.success(req,res, productList, 200,"listed");
		})
		.catch(e => {
			response.error(req,res, "Unexpected Error", 500, e);
			//next(e)
		});
}




const createProductP = async function (req, res, next) {
	const {body: product } = req;

	await controller.addProduct({product})
		.then((fullProduct) => {
			response.success(req,res, fullProduct, 201,"created");
		})
		.catch(e => {
			response.error(req,res, "información invalida", 400, "Error en el controller");
		});

}






// Async Await CRUD
const getProducts = async function (req, res, next){
	const { tags } = req.query;
	try{
		const products = await Promise.resolve(productsMock);
		response.success(req,res, products, 200, 'products listed');
		/*res.status(200).json({
			data: products,
			message: 'products listed'
		});*/
	} catch(err){
		next(err);
	}
}


const showProduct = async function (req, res, next){
	const { productId } = req.params;
	try{
		const product = await Promise.resolve(productsMock[0]);
		response.success(req,res, product, 200, 'product retrieved');
	} catch(err){
		next(err);
	}
}


const createProduct = async function (req, res, next){
	const {body: product } = req;
	try{
		const createdProductId = await Promise.resolve(productsMock[0]);
		response.success(req,res, createdProductId, 201, 'product created');
	} catch(err){
		next(err);
	}
}

const updateProduct = async function (req, res, next){
	const { productId } = req.params;
	const { body: product } = req;
	try{
		const updatedProductId = await Promise.resolve(productsMock[0]);
		response.success(req,res, updatedProductId, 200, 'product updated');
	} catch(err){
		next(err);
	}
}

const deleteProduct = async function (req, res, next){
	try{
		const deletedProductId = await Promise.resolve(productsMock[0]);
		response.success(req,res, deletedProductId, 200, 'product deleted');
	} catch(err){
		next(err);
	}
}


module.exports = {
	getProducts,
	showProduct,
	createProduct,
	updateProduct,
	deleteProduct,

	getProductsP,
	createProductP,
};