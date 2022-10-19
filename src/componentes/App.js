import React, {useState, useEffect} from 'react';

import Navbar from './Navbar';
import Display from './Display';
import Sidebar from './Sidebar';

import {carregarAlbuns} from '../dados';

function App(){

    const foto= {
        albumId: 1,
        id: 4,
        title: "1culpa odio esse rerum om…m voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
    };

    const [albuns, setAlbuns]= useState([]);
    
    useEffect(() => {
        (async () => setAlbuns(await carregarAlbuns()))();
    }, []);
    
    return (
        <div>
            <Navbar/>
            <main className='p-2 d-flex justify-content-around'>
                <Display foto={foto}/>
                <Sidebar albuns={albuns}/>
            </main>
        </div>
    );
}

export default App;