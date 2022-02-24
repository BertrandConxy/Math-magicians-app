import React from 'react';
import renderer from 'react-test-renderer';
import Calculate from './Calculate';

describe('page renders properly', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Calculate />).toTree();
    expect(tree).toMatchSnapshot();
  });
});
