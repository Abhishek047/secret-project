import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useOnScreen } from "../../custom-hooks/useOnScreen";
// import image from "../../images/harley.jpg";
import image from "../../images/Secret.svg";

export const FirstSection = () => {
    const classes = useStyles();
    const [elementRef] = useOnScreen({ threshold: 0.4 });

    return (
        <Box height='100vh' mt={5}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.image}>
                        <img src={image} alt='first-pic' width='100%' height='auto' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box ref={elementRef} className={classes.heading}>
                        <Box
                            className={`${classes.animateBlock} ${classes.block}`}
                            component='span'
                        />
                        <Typography
                            variant='h2'
                            className={`${classes.animateIn} ${classes.headingText}`}>
                            You are the one!
                        </Typography>
                    </Box>
                    <Box mt={3} className={classes.subBlock}>
                        <Typography variant='h6' gutterBottom className={classes.subHeading}>
                            I am not sure this is the best way, but i want to make you happy in
                            whatever way i can!
                        </Typography>
                        <Typography variant='h6' className={classes.quote}>
                            <q>
                                &nbsp;Yes, all our souls are written in our eyes! and yours is a
                                beautiful one!&nbsp;
                            </q>
                        </Typography>
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
        width: "0%",
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
        fontSize: "min(1.8em, 5vw)",
        fontWeight: 700,
        fontFamily: "inherit",
    },
    quote: {
        fontWeight: 700,
        fontFamily: "inherit",
        fontSize: "min(1.8em, 5vw)",
    },
    headingText: {
        opacity: 0,
        fontWeight: 600,
        textAlign: "center",
        fontSize: "min(7em, 10vw)",
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
