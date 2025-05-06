const ProductItem = ({ name, price, inStock }) => (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>${price}</p>
      <p className={inStock ? 'text-green-600' : 'text-red-600'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
  export default ProductItem;
  