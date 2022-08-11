import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../pages/Home';

it('renders correctly', () => {
  const testHome = renderer.create(<Home />);
  const testJson = testHome.toJSON();
  expect(testJson).toMatchSnapshot();
});
