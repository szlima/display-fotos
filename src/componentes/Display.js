import React from 'react';

function Display({foto}){

    return (
        <div className='text-center text-secondary display p-3'>
            <img src={foto.url} className='mb-3' alt={`Foto ${foto.id}`}/>
            <h3>Foto {foto.id}</h3>
            <h4>{foto.title}</h4>
        </div>
    );
}

export default Display;