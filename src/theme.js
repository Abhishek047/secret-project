import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#524A4E",
        },
        secondary: {
            main: "#FF5C8D",
        },
        background: {
            paper: "#FDEFF4",
            default: "#222831",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: [
            "Roboto",
            "Helvetica",
            "Loved by the King",
            "Arial",
            "Josefin Sans",
            "sans-serif",
            "Indie Flower",
            "Dancing Script",
        ].join(","),
    },
    shape: {
        borderRadius: 2,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "unset",
                },
                elevation2: {
                    boxShadow: "0px 3px 15px rgba(139,21,178,0.3)",
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                primary: {
                    backgroundImage:
                        "linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%)",
                    color: "#fafafa",
                    transition: "all 0.5s ease-out",
                    backgroundSize: "300% 300%",
                    "&:hover": {
                        backgroundPosition: "right center",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    letterSpacing: "1.2px",
                    "&.Mui-disabled": {
                        backgroundImage: "none",
                    },
                },
                containedPrimary: {
                    backgroundImage:
                        "linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B)",
                    color: "#fafafa",
                    transition: "all 0.5s ease-out",
                    backgroundSize: "300% 300%",
                    "&:hover": {
                        backgroundPosition: "right center",
                    },
                },
                containedSecondary: {
                    backgroundImage:
                        "linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376)",
                    color: "#fafafa",
                    transition: "all 0.5s ease-out",
                    backgroundSize: "300% 300%",
                    "&:hover": {
                        backgroundPosition: "right center",
                    },
                },
            },
        },
    },
});

// GLOBAL DELETE BUTTON
// backgroundImage: "linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f)",
// backgroundSize: "300% 300%",
// color: "#fafafa",
// transition: "all 0.5s ease-out",
// "&:hover": {
//     backgroundPosition: "right center",
// },
