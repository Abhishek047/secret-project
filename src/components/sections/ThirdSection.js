import { Box, Typography } from "@mui/material";
import "./drawing.css";

export const ThirdSection = () => {
    return (
        <Box>
            <div className='pos wrapper'>
                <Typography
                    variant='h2'
                    style={{
                        fontFamily: "Loved by the King",
                    }}>
                    Will chu be my valentine?
                </Typography>

                <div className='pos pikachu'>
                    <div className='pos head'>
                        <div className='pos ears left brown'>
                            <div className='pos ears-inside yellow'></div>
                        </div>
                        <div className='pos ears right brown'>
                            <div className='pos ears-inside yellow'></div>
                        </div>

                        <div className='pos face yellow'>
                            <span className='pos eye left brown'></span>
                            <span className='pos eye right brown'></span>
                            <span className='pos mouth'>w</span>

                            <span className='pos cachete left'></span>
                            <span className='pos cachete right'></span>
                        </div>
                    </div>

                    <div className='pos body yellow'>
                        <div className='pos heart'></div>

                        <div className='pos paw left yellow'></div>
                        <div className='pos paw right yellow'></div>
                    </div>

                    <div className='pos leg left yellow-dark'></div>
                    <div className='pos leg right yellow-dark'></div>

                    <div className='pos tail yellow-dark'></div>
                </div>
            </div>
        </Box>
    );
};
