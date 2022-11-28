import { createContext, useState } from "react";

export const context = createContext();

export default function Provider({ children }) {
  const [ellipse, setEllipse] = useState(true);
  const [planetNames, setPlanetNames] = useState(false);

  const value = {
    ellipse,
    planetNames,
    setEllipse,
    setPlanetNames
  };

  return(
    <context.Provider value={ value }>
      { children }
    </context.Provider>
  );
}