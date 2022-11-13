import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store as DefaultStore} from '../src/redux';

// Overriding the render method
function render(ui, {store = DefaultStore, renderOptions} = {}) {
  console.log('storeasdasdasd', store);
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export {render};

export function renderWithRedux(ui, options) {
  const store = options?.store ?? configureStore(options?.initialState);
  const queries = render(<Provider store={store}>{ui}</Provider>);
  return {...queries, store};
}
