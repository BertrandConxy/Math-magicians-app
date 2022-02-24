import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('page renders properly', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Home />).toTree();
    expect(tree).toMatchSnapshot();
  });
});
