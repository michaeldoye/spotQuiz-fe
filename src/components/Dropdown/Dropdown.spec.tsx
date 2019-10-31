import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { DropdownComponent } from './Dropdown';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../firebase-config';

describe('DropdownComponent', () => {
  let container: any;
  let history: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    history = { push: expect.any(Function) };
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    cleanup();
  });

  it('should open the dropdown on click of toggle', () => {
    const { queryByTestId } = render(<DropdownComponent history={history} />);
    const dropdownToggle: any = queryByTestId('dropdown-toggle');

    expect(queryByTestId('dropdown-menu')).toBeFalsy();

    fireEvent.click(dropdownToggle);

    expect(queryByTestId('dropdown-menu')).toBeTruthy();
  });

  it('should close the dropdown on click outside', () => {
    const { queryByTestId } = render(<DropdownComponent history={history} />);
    const dropdownToggle: any = queryByTestId('dropdown-toggle');

    fireEvent.click(dropdownToggle);

    expect(queryByTestId('dropdown-menu')).toBeTruthy();

    fireEvent.click(document.body);

    expect(queryByTestId('dropdown-menu')).toBeFalsy();
  });

  it('should call firebase signOut() on logout', () => {
    firebase.initializeApp(firebaseConfig);
    const spy = spyOn(firebase.auth(), 'signOut');
    const { queryByTestId } = render(<DropdownComponent history={history} />);

    fireEvent.click(queryByTestId('dropdown-toggle') as any);

    expect(queryByTestId('dropdown-menu')).toBeTruthy();

    const logoutBtn: any = queryByTestId('logout');

    fireEvent.click(logoutBtn);

    expect(spy).toHaveBeenCalled();
  });
});
