const carregarDados= async () => {

    const dados= await fetch('https://jsonplaceholder.typicode.com/photos');
    return await dados.json();
};

export const carregarAlbuns= async () => {
    
    const fotos= await carregarDados();
    let albuns= [];
    let numAlbum= 0;

    fotos.some((foto, i, vetor) => {
        if(foto.albumId !== numAlbum){
            numAlbum++;
            albuns.push(
                vetor.filter(elemento => elemento.albumId === numAlbum)                        
            );
        }       
        
        return foto.albumId === 10;
    });

    return albuns;
};