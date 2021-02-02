import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Content, Buttons, Footer, Particles } from './components/'

const date = new Date();
if (date.getHours() >= 18) {
    document.documentElement.classList.add('dark')
}

ReactDOM.render(
    <React.StrictMode>
        <div className='app'>
            <Content />
            <Buttons />
            <Footer />
            <Particles />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
