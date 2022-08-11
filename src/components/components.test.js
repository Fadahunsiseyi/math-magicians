import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';

it('renders correctly', () => {
  const testHome = renderer.create(<Home />);
  const testJson = testHome.toJSON();
  expect(testJson).toMatchSnapshot();
});

it('renders correctly', () => {
  const testHome = renderer.create(<Calculator />);
  const testJson = testHome.toJSON();
  expect(testJson).toMatchSnapshot();
});
