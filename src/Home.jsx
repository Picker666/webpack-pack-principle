import React, { useState, useEffect } from 'react';
// import * as test from './test';

const flag = 'this is home page...';

const Home = () => {
	const [count, setCount] = useState(666);

	useEffect(() => {
		import('./test').then((test) => {
			console.log('test: ', test);
		});
	}, []);
	
	return (<div>this is home component...</div>)
}

export default Home;
