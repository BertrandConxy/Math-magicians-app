import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('page renders properly', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Quote />).toTree();
    expect(tree).toMatchSnapshot();
  });
});
