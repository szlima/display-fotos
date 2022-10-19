import React from 'react';

function Sidebar({albuns}){
           
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
                                    <div className='card-body foto text-secondary' key={`foto${foto.id}`}>
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

export default Sidebar;