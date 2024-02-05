import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import Loading from "./Loading"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ThemeProvider theme={chosenTheme}>
            <>
              <GlobalStyles />
              <div>
                <Main theme={chosenTheme} />
              </div>
            </>
          </ThemeProvider>
        </div>
      )}
    </>
  );
}

export default App;
