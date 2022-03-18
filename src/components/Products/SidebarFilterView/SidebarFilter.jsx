import './sidebarFilter.css';
import {useFilter} from "../../../contexts/filterContext";

const SidebarFilter = () => {
    const { state: {categories, priceRange, products}, dispatch }  = useFilter();
    const stars = [4,3,2];

    const changeHandler = (filterType, filterValue, e) => {
        const type = filterType;
        const payload = 
        filterType === 'CATEOGRY' 
            ? { cateogry: {[filterValue.categoryName]: e.target.checked }, id: filterValue.id}
            : filterValue;
        dispatch({type : type, payload: payload}); 
    }
    return (
        <div className="product-sidebar mr-6">
            <aside className="side-navbar">
                <header className="nav-header py-4">
                    <div className="px-4 bold">Filters</div>
                    <a href="" className="link-text-primary px-6"
                    onClick = {() => changeHandler("CLEAR", products)}>clear</a>
                </header>
                <div className="side-navbar">
                    <div className="price-filter">
                        <div className="list-title px-4 my-2 bold">Price</div>
                        <div className="slider px-4">
                            <div className="range">
                            <datalist id="tickmarks">
                                <option value="300" label="300"></option>
                                <option value="600" label="600"></option>
                                <option value="900" label="900"></option>
                                <option value="1200" label="1200"></option>
                            </datalist>
                            <input 
                                className="rangeInput"
                                type="range" 
                                id="price" 
                                name="price"
                                min="300" 
                                max="1299"
                                value={priceRange}
                                onChange={(e) =>  changeHandler('PRICE', e.target.value)}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="rating-filter">
                        <div className="list-title px-4 my-2 bold">Rating</div>
                        <div className="checklist">
                            {stars.map(star => {
                                return(
                                    <label className="list-item" for={`rating${star}`} key={star}>
                                    <input
                                        className="mr-4"
                                        type="radio"
                                        id={`rating${star}`}
                                        name='rating'
                                        onChange= {() => changeHandler('STAR_RATING', star)}
                                    />
                                   {`${star} stars & above`}
                                </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className="category-filter">
                        <div className="list-title px-4 my-2 bold">Cateogry</div>
                        <div className="checklist">
                            {categories.map(item => {
                                let categoryName='';
                                let isChecked = false; 
                                for(const c in item.selectedCategory){
                                    categoryName = c;
                                    isChecked = item.selectedCategory[c];
                                }
                                return(
                                    <label key={item._id} className="list-item" for={categoryName}>
                                    <input
                                        className="mr-4"
                                        type="checkbox"
                                        id={categoryName}
                                        name={categoryName}
                                        checked={isChecked}
                                        onChange={(e) => changeHandler("CATEOGRY", {categoryName: categoryName, id: item._id}, e)}
                                    />
                                    {categoryName}
                                </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className="sort-filter">
                        <div className="checklist">
                            <div className="list-title px-4 my-2 bold">Sort by</div>
                            <label className="list-item" for="highToLow">
                                <input
                                    className="mr-4"
                                    type="radio"
                                    id="highToLow"
                                    name="radioBtn"
                                    onChange={() => changeHandler('LOW_TO_HIGH')}
                                />
                                price low-to-high
                            </label>
                            <label className="list-item" for="lowToHigh">
                                <input
                                    className="mr-4"
                                    type="radio"
                                    id="lowToHigh"
                                    name="radioBtn"
                                    onChange={() => changeHandler('HIGH_TO_LOW')}
                                />
                                price high-to-low
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}
export {SidebarFilter};