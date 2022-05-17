import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe( 'Pruebas componente GifGrid', () => {

    test( 'Debe mostrarse el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid category="dogs" />);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test( 'Debe presentar las imágenes', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Mi primer Gif',
            url: 'https://www.google.com/image1'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GifGrid category="dogs" />);
        expect(wrapper.find('p').exists()).toBe( false );
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
})