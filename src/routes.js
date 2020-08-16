import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main : () => <Home />
    }, {
        path: '/about',
        exact: false,
        main : () => <About />
    },{        
        path: '',
        exact: false,
        main : () => <NotFound />        
    }
];

export default routes;