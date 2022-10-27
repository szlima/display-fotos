import React from 'react';
import {Provider} from 'react-redux';

import store from '../redux/store';

import Navbar from './Navbar';
import Display from './Display';
import Sidebar from './Sidebar';

function App(){
    
    return (
        <div>
            <Provider store={store}>
                <Navbar/>
                <main className='p-2 d-flex justify-content-around'>
                    <Display/>
                    <Sidebar/>
                </main>
            </Provider>            
        </div>
    );
}

export default App;