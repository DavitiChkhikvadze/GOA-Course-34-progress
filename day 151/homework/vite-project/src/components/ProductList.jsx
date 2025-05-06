import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {products.map(product => (
      <ProductItem
        key={product.id}
        name={product.name}
        price={product.price}
        inStock={product.inStock}
      />
    ))}
  </div>
);

export default ProductList;
