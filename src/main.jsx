import 'bulma/css/bulma.css';
import './styles.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
