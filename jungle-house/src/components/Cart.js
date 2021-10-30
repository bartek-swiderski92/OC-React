import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;
    return (
        <div className="jh-cart">
            <h2>Cart</h2>
            <ul>
                <li>Monstera: £{monsteraPrice}</li>
                <li>ivyPrice: £{ivyPrice}</li>
                <li>Flowers: £{flowerPrice}</li>
            </ul>
            <p>Total: £{monsteraPrice + ivyPrice + flowerPrice}</p>
        </div>
    )
}

export default Cart