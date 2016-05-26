// test example 
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Counter from './Counter';

describe('<Counter/>', function () {
  it('should have 4 buttons', function () {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('button')).to.have.length(4);
  });
});
