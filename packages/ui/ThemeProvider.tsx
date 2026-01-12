import { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

export function ThemeProvider({ children }: any) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

