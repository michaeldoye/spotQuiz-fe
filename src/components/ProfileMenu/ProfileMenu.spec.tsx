import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { ProfileMenuComponent } from './ProfileMenu';

describe('ProfileMenuComponent', () => {
  let container: any;
  let history: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    history = { push: jest.fn(), location: { pathname: 'test' } };
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    cleanup();
  });

  it('should navigate on click of menu item', () => {
    const { queryByTestId } = render(<ProfileMenuComponent history={history} />);

    fireEvent.click(queryByTestId('menu-item-0') as HTMLElement);

    expect(history.push).toHaveBeenCalled();
  });
});
