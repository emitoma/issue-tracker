import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../../../../pages/auth/login';
import AuthHeader from '../../../../components/auth/AuthHeader';

configure({ adapter: new Adapter() });

describe('<Login/>', () => {
  it('should render the auth header', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(AuthHeader)).toHaveLength(1);
  });
});
