import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img 
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
			
				<div className="home__row">
					<Product 
						id= "123993456"
						title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
						price={14.99}
						image='https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg'
						rating={4}
					/>
					<Product 
						id= "1234506345"
						title="Hario V60 Drip Coffee Scale and Timer, Black"
						price={51.50}
						image="https://images-na.ssl-images-amazon.com/images/I/61ioXK-r6EL._AC_SX679_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product 
						id= "1234845"
						title="AmazonBasics Premium Single Monitor Stand - Lift Engine Arm Mount, Aluminum - Black"
						price={116.00}
						image="https://images-na.ssl-images-amazon.com/images/I/81vVhNmk8JL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product 
						id="12349089453"
						title="Fellow Stagg EKG, Electric Pour-over Kettle For Coffee And Tea, Matte Black, Variable Temperature Control, 1200 Watt Quick Heating, Built-in Brew Stopwatch"
						price={141.75}
						image="https://images-na.ssl-images-amazon.com/images/I/619uJqSTdSL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product 
						id="5023587345"
						title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray"
						price={2549.00}
						image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
				<Product 
						id="953466907"
						title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
						price={549.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
