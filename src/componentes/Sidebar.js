import React from 'react';
import {connect} from 'react-redux';

import {selecionarFotoAction} from '../redux/actions/actionCreators';

function Sidebar({albuns, selecionarFoto}){
           
    return (
        <aside id='accordion'>
            {    
                albuns.map(album => (
                    <div className='card d-grid text-center' key={`album${album[0].albumId}`}>
                        <div className='card-header'>
                            <a className='btn btn-block' data-bs-toggle='collapse' href={`#collapseAlbum${album[0].albumId}`}>
                                {`Album ${album[0].albumId}`}
                            </a>
                        </div>
                        <div id={`collapseAlbum${album[0].albumId}`} className='collapse' data-bs-parent='#accordion'>
                            {
                                album.map(foto => (
                                    <div className='card-body foto text-secondary' key={`foto${foto.id}`} onClick={() => selecionarFoto(foto)}>
                                        <p>{`Foto ${foto.id}`}</p>
                                    </div>
                                ))
                            }                            
                        </div>
                    </div>
                ))
            }
        </aside>
    );
}

const mapDispatchToProps= dispatch => ({
    selecionarFoto: foto => dispatch(selecionarFotoAction(foto))    
});


export default connect(null, mapDispatchToProps)(Sidebar);