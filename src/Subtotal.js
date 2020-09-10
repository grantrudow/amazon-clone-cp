import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

// npm i react-currency-format
// Show money

function Subtotal() {
	const history = useHistory();
	const [{ basket }, dispatch] = useStateValue();
	

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						
						<p>
							Subtotal ({basket.length} items): 
							<strong className="subtotal__value">{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button onClick={event => history.push('/payment')}>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
