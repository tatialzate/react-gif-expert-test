import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe( 'Pruebas componente GifGridItem', () => {

    const img = {
        url: 'https://media3.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=78a8ec572354v6c7c7njjwlqwua9hdik9nxxdcc23a3l3ogk&rid=giphy.gif&ct=g',
        title: 'saitama GIF'
    }
    const wrapper = shallow( <GifGridItem {...img}/> );

    test( 'Debe mostrarse el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test( 'Debe presentar en el párrafo el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( img.title );
    })

    test( 'Debe presentar la url en el src y el title en el alt', () => {
        const image = wrapper.find('img');
        expect( image.prop('src')).toBe( img.url );
        expect( image.prop('alt')).toBe( img.title );
    })

    test( 'El div debe contener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn')).toBe(true);
    })
})