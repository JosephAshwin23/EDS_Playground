import { createContext, useState } from "react";

export const MainContext = createContext();

function ContextProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState("daily");
  return (
    <MainContext.Provider value={{ visible, view, setVisible, setView }}>
      {children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
