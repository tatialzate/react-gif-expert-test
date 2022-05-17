import { getGifs } from "../../helpers/getGifs"

describe( 'Pruebas helper getGifs Fetch', () => {

    test( 'Debe traer 10 elementos', async() => { 
        const gifs = await getGifs();
        expect( gifs.length).toBe( 10 );
    });
    
    test( 'Debe devolver un arreglo vacío', async() => { 
        const gifs = await getGifs('');
        expect( gifs.length).toBe( 0 );
    });

} )