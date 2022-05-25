import './productListing.css';

import {useProduct} from 'contexts/index';
import {SidebarFilter} from 'components/Products/SidebarFilterView/SidebarFilter';
import {ProductCard} from 'components/Products/ProductCardView/ProductCard';
import {
    getSortedData,
    getProductsInPriceRange,
    getCateogrisedProducts,
    getDatainStarRatingRange
  } from 'utils/sortAndFilter/index';


const ProductListing = () => {
const {state : {
        sortBy, 
        categories, 
        priceRange, 
        products, 
        starRating
    }, 
} = useProduct();

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