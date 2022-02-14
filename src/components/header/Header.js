import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Box mx='auto' width='fit-content'>
                    <Typography variant='h6' align='center'>
                        Will you ?
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
