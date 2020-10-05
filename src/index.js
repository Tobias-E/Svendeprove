import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import Loader from './components/atoms/Loader';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<React.Suspense fallback={<Loader />}>
				<App />
			</React.Suspense>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
