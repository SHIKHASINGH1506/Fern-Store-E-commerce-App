import './productListing.css';
import {useEffect} from "react";
import axios from "axios";
import {useFilter} from '../../../contexts/filterContext';
import {SidebarFilter} from '../SidebarFilterView/SidebarFilter';
import {ProductCard} from '../ProductCardView/ProductCard';
import {
    getSortedData,
    getProductsInPriceRange,
    getCateogrisedProducts,
    getDatainStarRatingRange
  } from '../../../utils/sortAndFilter/index';


const ProductListing = () => {
const {state : {sortBy, categories, priceRange, products, starRating}, dispatch} = useFilter();

useEffect(() => {
    (async () => {
        try{
        const {data : {products}} = await axios.get('/api/products');
        dispatch({
            type: "INIT_PRODUCTS", 
            payload: products
        });
        }catch(error){
        console.log(error);
        }
    })();
    }, []);

const categorisedProducts = getCateogrisedProducts(products, categories);
const productsInStarRating = getDatainStarRatingRange(categorisedProducts, starRating);
const productsInPriceRange = getProductsInPriceRange(productsInStarRating, priceRange);
const filteredProducts = getSortedData(productsInPriceRange, sortBy);
    return (
        <>
            <div className="general-wrapper">
                <div className="product-page">
                        <SidebarFilter />
                    <div className="product-container">
                        <h5 className="product-header py-4">Products</h5>
                        <div className="product-list">
                            {filteredProducts.map(product => (
                                <ProductCard product={product} key={product._id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export {ProductListing}