import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import PageTitleComponent from './index';

describe('PageTitleComponent', () => {
  let container: any;
  let history: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    history = { goBack: jest.fn() };
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    cleanup();
  });

  it('should go back on click of back button', () => {
    const { queryByTestId } = render(
      <PageTitleComponent text="test" history={history} hasBackBtn />
    );

    fireEvent.click(queryByTestId('back-btn') as HTMLElement);

    expect(history.goBack).toHaveBeenCalled();
  });
});
