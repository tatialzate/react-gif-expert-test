import React from 'react';

const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Pruebas del GifExpertApp', () => { 

    test('Debe presentarse correctamente', () => { 
        const categories = ['Dogs', 'Food'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
})