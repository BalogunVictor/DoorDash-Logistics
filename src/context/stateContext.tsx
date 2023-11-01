import { createContext, useContext, useState } from 'react';
import { ChildrenProps } from 'src/models/state';

const Context = createContext<any>({
  setTable: () => {},
  table: '',
});

const StateContext = ({ children }: ChildrenProps) => {
  const [table, setTable] = useState<string>('');

  const contextValue = {
    setTable,
    table,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useStateContext = (): any => useContext(Context);

export { StateContext, useStateContext };
