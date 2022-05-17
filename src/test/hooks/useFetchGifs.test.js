import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe( 'Pruebas componente useFetchGifs', () => {

    test( 'Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dogs' ));
        const { data, loading } =  result.current;

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true);
    })

    test('Debe retornar un arreglo de imagénes y el loading en false', async () => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dogs' ));
        await waitForNextUpdate();
        
        const { data , loading } =  result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
})