import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {selecionarFotoAction, carregarAlbunsAction} from '../redux/actions/actionCreators';

function Sidebar({albuns, carregando, erro, selecionarFoto, carregarAlbuns}){

    useEffect(() => {
        carregarAlbuns();
    }, []);
    
    return (
        carregando ?
            <aside className='aside-incompleto'>
                <i className="fa-solid fa-spinner"></i>
            </aside>
        : erro ?
            <aside className='aside-incompleto'>
                {erro}
            </aside>
        :        
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

const mapStateToProps= state => ({
    albuns: state.albunsReducer.albuns,
    carregando: state.albunsReducer.carregando,
    erro: state.albunsReducer.erro,
});

const mapDispatchToProps= dispatch => ({
    selecionarFoto: foto => dispatch(selecionarFotoAction(foto)),
    carregarAlbuns: () => dispatch(carregarAlbunsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);