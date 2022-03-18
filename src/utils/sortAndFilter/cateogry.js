const getUnionOfProducts = (...arr) => {
  return (
    arr.reduce((prev, current) =>
      { 
        return prev.concat(
          current.filter(item =>
            !prev.some(p => p.id === item.id))
        ); 
      },
      []
    )
  );
}

export const getCateogrisedProducts = (data, cateogries) => {
  let filterData = [];
  let flag=false;
  cateogries.map(catObj => {
   let categoryName='';
   let isSelected = false; 
   for(const c in catObj.selectedCategory){
       categoryName = c;
       isSelected = catObj.selectedCategory[c];
   }
    if(isSelected){
      flag=true;
      filterData = getUnionOfProducts(
              filterData,
              data.filter(item => item['categoryName'] === categoryName)
            );
    }
  })
  return flag ? filterData : data;
};
  