import React from 'react';

function Navbar(){

    return (
        <nav className='navbar bg-light px-5 py-3'>
            <div className='d-flex'>
                <a href='#'>
                    <i className="fa-solid fa-bars"></i>
                </a>
                <h4 className='mx-4'>Display de fotos</h4>
            </div>            
            
            <form className='d-flex'>
                <input className='form-control mr-2' type='text' placeholder='Buscar'/>
                <button className='btn' type='submit'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </nav>
    );
}

export default Navbar;