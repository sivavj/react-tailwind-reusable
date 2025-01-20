import React from "react";
import AppProvider from "./provider/AppProvider";
import { ThemeProvider } from "./provider/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider />
    </ThemeProvider>
  );
};

export default App;
