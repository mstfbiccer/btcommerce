import ProductCard from "./ProductCard";

/**
 * ProductWidget Component
 * @param products | any
 * @returns 
 */
const ProductWidget = ({products}:any) => {
  return (
    <div className="product-widget-container">
      <div className="product-category-selector">
        <span>Category Selector</span>
      </div>
      <div className="product-list">
       {products && products.map((product:any) => (
          <ProductCard key={product.id} {...product}/>
       ))}
      </div>
    </div>
  )
}

export default ProductWidget;
