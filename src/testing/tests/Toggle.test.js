import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Toggle from '../components/Toggle';

describe( '<Toggle />', () => {
    it( 'renders a button element', () => {
        const wrapper = shallow(
            <Toggle>Toggle label</Toggle>
        );
        expect(
            wrapper.find( 'button' ).length
        ).toBe( 1 );
    } );
} );