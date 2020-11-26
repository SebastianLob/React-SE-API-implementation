import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import About from '../index';

describe('Basic Pagination', () => {
  const renderer = new ShallowRenderer();
  it('should render and match the snapshot', () => {
    renderer.render(<About />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
