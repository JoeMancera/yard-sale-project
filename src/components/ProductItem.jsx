import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCardIcon from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const addToCartHandler = (productAdded) => {
		addToCart(productAdded);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => addToCartHandler(product) } >
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
