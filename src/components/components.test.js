import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Quotes from '../pages/Quotes';

it('renders correctly', () => {
  const testHome = renderer.create(<Home />);
  const testJson = testHome.toJSON();
  expect(testJson).toMatchSnapshot();
});

it('renders correctly', () => {
  const testCalculator = renderer.create(<Calculator />);
  const testJson = testCalculator.toJSON();
  expect(testJson).toMatchSnapshot();
});

it('renders correctly', () => {
  const testQuotes = renderer.create(<Quotes />);
  const testJson = testQuotes.toJSON();
  expect(testJson).toMatchSnapshot();
});
