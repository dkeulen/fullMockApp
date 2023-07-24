import React from "react";
import { createRoot } from "react-dom/client";
import { ApplicationContextProvider } from "./ApplicationContext";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from "@mui/material/styles";
// import "/node_modules/react-grid-layout/css/styles.css";
import "./nextGenStyles.css";
import "/node_modules/react-resizable/css/styles.css";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { grey } from "@mui/material/colors";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#005596",
//       light: "#3275A8"
//     },
//     secondary: {
//       main: "#d82e2f"
//     }
//   }
// });

declare module "@mui/material/styles" {
  interface Theme {
    background: {
      topBar: {
        backgroundColor: string;
        color: string;
        search: {
          backgroundColor: string;
          color: string;
        };
      };
      view: string;
      emptyAlert: {
        backgroundColor: string;
        color: string;
      };
      schedule: {
        taskCard: {
          status: {
            backgroundColor: string;
          };
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background?: {
      topBar?: {
        backgroundColor?: string;
        color?: string;
        search?: {
          backgroundColor?: string;
          color?: string;
        };
      };
      view?: string;
      emptyAlert?: {
        backgroundColor?: string;
        color?: string;
      };
      schedule?: {
        taskCard?: {
          status?: {
            backgroundColor?: string;
          };
        };
      };
    };
  }
}

const MyApp: React.FC = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#005596",
            light: "#3275A8"
          },
          secondary: {
            main: "#d82e2f"
          },
          mode
        },
        ...(mode === "light"
          ? {
              background: {
                topBar: {
                  backgroundColor: grey[300],
                  color: grey[700],
                  search: {
                    backgroundColor: "rgba(255,255,255,0.5)"
                  }
                },
                view: "#f0f0f0",
                emptyAlert: {
                  backgroundColor: grey[100],
                  color: grey[600]
                },
                schedule: {
                  taskCard: {
                    status: {
                      backgroundColor: grey[100]
                    }
                  }
                }
              }
            }
          : {
              background: {
                topBar: {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  search: {
                    backgroundColor: "rgba(255,255,255,0.5)"
                  }
                },
                view: "#121212",
                emptyAlert: {
                  backgroundColor: grey[600],
                  color: grey[800]
                },
                schedule: {
                  taskCard: {
                    status: {
                      backgroundColor: grey[800]
                    }
                  }
                }
              }
            })
      }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{
              body: { backgroundColor: grey[100], fontFamily: "sans-serif" },
              html: { backgroundColor: grey[100] }
            }}
          />
          <ApplicationContextProvider>
            <App />
          </ApplicationContextProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

root.render(
  // <StyledEngineProvider injectFirst>
  //   <CssBaseline />
  //   <ThemeProvider theme={theme}>
  //     <GlobalStyles
  //       styles={{
  //         body: { backgroundColor: grey[100], fontFamily: "sans-serif" },
  //         html: { backgroundColor: grey[100] }
  //       }}
  //     />
  //     <ApplicationContextProvider>
  <MyApp />
  //    </ApplicationContextProvider>
  //   </ThemeProvider>
  // </StyledEngineProvider>
);
