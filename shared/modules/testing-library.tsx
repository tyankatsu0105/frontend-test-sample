import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import * as ReactRedux from "react-redux";

import type { AppStore, PreloadedState } from "~store/index";
import { createStore } from "~store/index";

type ExtendedRenderOptions = Omit<RenderOptions, "queries"> & {
  preloadedState?: PreloadedState;
  store?: AppStore;
};

/**
 * wrapperを作成する
 * renderHooksのwrapperに渡す
 */
export const createWraper = (preloadedState: PreloadedState = {}) => {
  const store = createStore(preloadedState);

  const wrapper = (props: PropsWithChildren) => (
    <ReactRedux.Provider store={store}>{props.children}</ReactRedux.Provider>
  );

  return {
    store,
    wrapper,
  };
};

/**
 * testでDOMをrenderするときに使う
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options: ExtendedRenderOptions = {}
) => {
  const { preloadedState = {}, ...otherOptions } = options;

  const { wrapper } = createWraper(preloadedState);

  return render(ui, { wrapper, ...otherOptions });
};
