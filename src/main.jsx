import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index.js';
import './Firebase.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
)
