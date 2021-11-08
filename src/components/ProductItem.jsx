import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCardIcon from '@icons/bt_added_to_cart.svg';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart, isOnCart } = useContext(AppContext);

	const toggleCartHandler = (productAdded) => {
		if(isOnCart(productAdded)) {
			removeFromCart(productAdded);
		} else {
			addToCart(productAdded);
		}
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => toggleCartHandler(product) } >
					<img src={isOnCart(product) ? addedToCardIcon : addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
