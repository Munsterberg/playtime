import React from 'react';

import ShowCard from '../index';

describe('<ShowCard />', () => {
    let wrapper = null;
    const props = {
        show: {
            description: 'A movie description for testing',
            imdbID: 'tt1251',
            poster: 'something.jpg',
            title: 'Test movie',
            trailer: 'DfaaomAN',
            year: '2015'
        }
    };

    beforeEach(() => {
        wrapper = shallow(<ShowCard {...props}/>);
    });

    it('should render correct component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
