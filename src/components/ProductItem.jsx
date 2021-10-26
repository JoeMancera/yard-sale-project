import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import addedToCard from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState(false);

	const addToCartHandler = () => {
		setCart(!cart);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={addToCartHandler} >
					<img src={ !cart ? addToCart: addedToCard } alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
