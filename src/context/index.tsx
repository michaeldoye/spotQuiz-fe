import React, {
  ComponentProps,
  Context,
  SetStateAction,
  useState
} from 'react';

let context: Context<any>;
let dispatcher: SetStateAction<any>;
let StoreProvider: Function;
let StoreRender: Function;

export const createStore = ({
  initialState = {},
  events = (...args: any): SetStateAction<any> => {}
}) => {
  StoreProvider = ({ ...children }: any) => {
    const [state, setState] = useState(initialState);

    dispatcher = (action: any, params: any): SetStateAction<any> => {
      setState(events(action, state, params));
    };

    const _state = {
      state: state,
      dispatch: dispatcher
    };

    context = React.createContext(_state);

    return (
      <context.Provider value={_state}>{children.children}</context.Provider>
    );
  };

  StoreRender = (props: ComponentProps<any>) => {
    return context ? (
      <context.Consumer>{props.children}</context.Consumer>
    ) : (
      <div />
    );
  };

  return {
    StoreRender: StoreRender,
    GlobalStore: StoreProvider
  };
};

export const withStore = (Component: any) => {
  return () => {
    return (
      <StoreRender>
        {(props: ComponentProps<any>) => {
          return <Component store={props} />;
        }}
      </StoreRender>
    );
  };
};
