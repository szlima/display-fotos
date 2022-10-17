import React from 'react';

import Navbar from './Navbar';
import Display from './Display';

function App(){

    const foto= {
        albumId: 1,
        id: 4,
        title: "1culpa odio esse rerum om…m voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
    };
    
    return (
        <div>
            <Navbar/>
            <main className='p-2 d-flex justify-content-around'>
                <Display foto={foto}/>
            </main>
        </div>
    );
}

export default App;