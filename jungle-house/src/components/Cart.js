import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<h2>Cart</h2>
			<ul>
				
			</ul>
			<button onClick={() => updateCart(cart + 1)}>Add</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Clear Cart</button>
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart
