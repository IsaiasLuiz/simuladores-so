import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

//http://lasdpc.icmc.usp.br/~ssc640/pos/i3s/index.php?lang=pt#
