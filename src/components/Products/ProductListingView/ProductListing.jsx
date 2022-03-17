import './productListing.css';
import {useFilter} from '../../../contexts/filterContext';
import {SidebarFilter} from '../SidebarFilterView/SidebarFilter';
import { ProductCard } from '../ProductCardView/ProductCard';
import {
    getSortedData,
    getProductsInPriceRange,
    getCateogrisedProducts,
    getDatainStarRatingRange
  } from '../../../utils/sortAndFilter/index';


const ProductListing = () => {

const {state : {sortBy, categories, priceRange, products, starRating}} = useFilter();
const sortedProducts = getSortedData(products, sortBy);
const productsInPriceRange = getProductsInPriceRange(sortedProducts, priceRange);
const productsInStarRating = getDatainStarRatingRange(productsInPriceRange, starRating);
const filteredProducts = getCateogrisedProducts(productsInStarRating, categories);
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