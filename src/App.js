import { StyledEngineProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles/";
import { MainApp } from "./components";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <MainApp />
                </StyledEngineProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
