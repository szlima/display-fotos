export const carregarAlbuns= async () => {
    
    let albuns= [];
    let numAlbum= 0;
    
    const dados= await fetch('https://jsonplaceholder.typicode.com/photos');
    const fotos= await dados.json();    

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