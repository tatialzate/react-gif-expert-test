import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe( 'Pruebas componente AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper =  shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    })
    
    test( 'Debe mostrase correctamente el componente', () => {    
        expect( wrapper ).toMatchSnapshot();
    })

    test( 'Debe ejecutarse el evento onChange', () => {   
        const input = wrapper.find('input');
        const value = 'Hi!'; 
        input.simulate( 'change', { target: { value }});
        // input.simulate( 'change', { 
        //     target: {
        //         value: value
        //     }
        // });
        expect( wrapper.find('p').text()).toBe( value );
    })

    test( 'No debe ejecutarse el setCategories', () => {
        const form = wrapper.find( 'form' );

        form.simulate( 'submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test( 'Debe llamar el setCategories y impiar la caja de texto', () => {
        const value = 'Hi!';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value }});
        
        const form =  wrapper.find('form');
        form.simulate('submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        expect(input.prop('value')).toBe( '' );
    })
})