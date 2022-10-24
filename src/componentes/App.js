import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';

import store from '../redux/store';

import Navbar from './Navbar';
import Display from './Display';
import Sidebar from './Sidebar';

import {carregarAlbuns} from '../dados';

function App(){

    const [albuns, setAlbuns]= useState([]);
    
    useEffect(() => {
        (async () => setAlbuns(await carregarAlbuns()))();
    }, []);
    
    return (
        <div>
            <Provider store={store}>
                <Navbar/>
                <main className='p-2 d-flex justify-content-around'>
                    <Display/>
                    <Sidebar albuns={albuns}/>
                </main>
            </Provider>            
        </div>
    );
}

export default App;