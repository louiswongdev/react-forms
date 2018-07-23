import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css'; // Note this
// import '../public/css/styles.css';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

