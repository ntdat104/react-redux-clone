import React from 'react';
import { createStore } from './redux';

type Store = ReturnType<typeof createStore>;

//* StoreContext
const StoreContext = React.createContext<Store | null>(null);

//* Provider
interface ProviderProps {
  children: React.ReactNode;
  store: Store;
}

export const Provider: React.FC<ProviderProps> = (props) => {
  const { children, store } = props;
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

//* useSelector
export const useSelector = (selector: (state: any) => any) => {
  const store = React.useContext(StoreContext) as Store;

  const [value, setValue] = React.useState(selector(store.getState()));

  React.useEffect(() => {
    store.subscribe(() => {
      setValue(selector(store.getState()));
    });
  }, []);

  return value;
};

//* useDispatch
export const useDispatch = () => {
  const store = React.useContext(StoreContext) as Store;
  return store.dispatch;
};
