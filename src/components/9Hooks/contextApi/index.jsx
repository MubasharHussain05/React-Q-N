// The Context API in React is a built-in feature that allows you to share state or 
// data between components without the need to pass props manually through every level of the component tree. 
// It is particularly useful for managing global data, such as themes, user authentication, or language settings.


// import { createContext, useContext } from "react";
import { createContext, use } from "react";

// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "vinod";
  const myAge = 30;
  console.log(children);

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// custom hooks
export const useBioContext = () => {
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};