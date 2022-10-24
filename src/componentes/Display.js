import React from 'react';
import {connect} from 'react-redux';

function Display({foto}){

    return (
        foto ? (
            <div className='text-center text-secondary display p-3'>
                <img src={foto.url} className='mb-3' alt={`Foto ${foto.id}`}/>
                <h3>Foto {foto.id}</h3>
                <h4>{foto.title}</h4>
            </div>
        ) : <div className='display d-flex justify-content-center align-items-center'>
                <h4>Selecione uma foto</h4>
            </div>
    );
}

const mapStateToProps= state => ({
    foto: state.fotoReducer.foto
});

export default connect(mapStateToProps)(Display);