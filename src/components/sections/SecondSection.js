import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useOnScreen } from "../../custom-hooks/useOnScreen";
import image from "../../images/pics.png";

export const SecondSection = () => {
    const classes = useStyles();
    const [elementRef, isVisible] = useOnScreen({ threshold: 0.4 });

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <Box ref={elementRef} className={classes.heading}>
                        <Box
                            className={`${isVisible ? classes.animateBlock : ""} ${classes.block}`}
                            component='span'
                        />
                        <Typography
                            variant='h2'
                            className={`${isVisible ? classes.animateIn : ""} ${
                                classes.headingText
                            }`}>
                            You are the one!
                        </Typography>
                    </Box>
                    <Box mt={3} className={classes.subBlock}>
                        <Typography variant='h6' gutterBottom className={classes.subHeading}>
                            How should i tell you that I really love you, i really am clueless when
                            I comes to you. I want to give you everything I have.
                        </Typography>
                        <Typography variant='h6' gutterBottom className={classes.subHeading}>
                            I know sometimes i am too pushy, I know i hurt you on many occasions,
                            but I really don't want to do that, It hurts me too when you get hurt.
                        </Typography>
                        <Typography variant='h6' gutterBottom className={classes.subHeading}>
                            You know me more than i know you, and you should know too that I want
                            your New year, Valentine, Birthday and other special days to be the best
                            you ever had.
                        </Typography>
                        <Typography variant='h6' gutterBottom className={classes.subHeading}>
                            I know i am not good a certain things, I want you to be the one to
                            correct me. I know we can get through this time, but sometimes I also
                            get drained and there is no one for me other than you, so please bear
                            with me if I go out of line, that's all i want from you in these times!
                        </Typography>
                        <Typography variant='h6' gutterBottom className={classes.quote}>
                            After all this confession, right now i don't care what happens to the
                            world i just want to be with you, I want you to be MINE AND MINE ALONE.
                            I want to ask you...
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box className={classes.image}>
                        <img src={image} alt='first-pic' width='100%' height='auto' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        // minHeight: "250px",
    },
    heading: {
        position: "relative",
        padding: "5px 10px",
    },
    block: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        // width: "0%",
        // height: "0%",
        top: 0,
        left: 0,
        backgroundColor: theme.palette.secondary.main,
        // animation: "$entryBlock 2s cubic-bezier(0.87, 0.29, 0.2, 0.97) forwards",
    },
    animateBlock: {
        animation: "$entryBlock 2s cubic-bezier(0.87, 0.29, 0.2, 0.97) forwards",
    },
    subBlock: {
        fontFamily: "Indie Flower",
        padding: "15px 20px",
    },
    subHeading: {
        fontSize: "min(1.3em, 5vw)",
        fontWeight: 700,
        fontFamily: "inherit",
    },
    quote: {
        fontSize: "min(1.8em, 5vw)",
        fontWeight: 700,
        fontFamily: "Loved by the King",
    },
    headingText: {
        opacity: 0,
        fontWeight: 600,
        textAlign: "center",
        fontSize: "min(6em, 10vw)",
        fontFamily: "Loved by the King",
        // animation: "$entryText 1s cubic-bezier(0.87, 0.29, 0.2, 0.97) forwards",
        // animationDelay: "1s",
    },
    animateIn: {
        animationDelay: "1s",
        animation: "$entryText 1s cubic-bezier(0.87, 0.29, 0.2, 0.97) forwards",
    },
    "@keyframes entryBlock": {
        "0%": {
            width: "0%",
            left: "0",
        },
        "50%": {
            width: "100%",
            left: "0",
        },
        "100%": {
            width: "0%",
            left: "100%",
        },
    },
    "@keyframes entryText": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        },
    },
}));
