import React from 'react';

import Search from '../index';
import ShowCard from '../../ShowCard';
import preload from '../../../../public/data.json';

describe('<Search />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Search />);
    });

    it('should render correct component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render correct number', () => {
        expect(preload.shows.length).toEqual(wrapper.find(ShowCard).length);
    });

    it('should render correct amount of shows', () => {
        const searchTerm = 'house';
        const searchInput = wrapper.find('input');
        searchInput.simulate('change', {target: {value: searchTerm}});
        expect(wrapper.find(ShowCard).length).toEqual(2);
    });

    describe('Full DOM rendering', () => {
        it('should call _handleChange', () => {
            jest.spyOn(Search.prototype, '_handleChange');
            wrapper = mount(<Search />);
            const searchTerm = 'house';
            const searchInput = wrapper.find('input');
            searchInput.simulate('change', {target: {value: searchTerm}});
            expect(Search.prototype._handleChange).toHaveBeenCalled();
        });
    });
});
