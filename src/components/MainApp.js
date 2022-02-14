import { Alert, Box, Button, Container, Snackbar } from "@mui/material";
import { Header } from "./header";
import { FirstSection, SecondSection, ThirdSection } from "./sections";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export const MainApp = () => {
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [answered, setAnswered] = useState(false);

    const onClick = async (answer = "NO") => {
        try {
            const db = getFirestore();
            await addDoc(collection(db, "answers"), {
                waited_answer: answer,
                time: new Date(),
            });
            console.log(answer === "YESSSSS...");
            if (answer === "YESSSSS...") {
                setMessage("You have a gift awaiting, can we meet tomorrow");
            } else if (answer === "YESSSSS par abhi ni...") {
                setMessage("You have a gift awaiting, can we meet tomorrow");
            } else {
                setMessage("Whyyyyyyyyyy.....");
                setType("error");
            }
            setAnswered(true);
            console.log("answer saved");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Box pb={10}>
            <Header />
            <Container maxWidth='xl'>
                <FirstSection />
                <SecondSection />
                <Box position={"relative"} mt={30}>
                    <ThirdSection />
                </Box>
                <Box mt={50} display='flex' justifyContent={"center"} alignItems='center'>
                    <Box mx={1}>
                        <Button
                            disabled={answered}
                            onClick={() => onClick("YESSSSS...")}
                            variant='contained'
                            color='primary'>
                            Yessss!!!
                        </Button>
                    </Box>
                    <Box mx={1}>
                        <Button
                            disabled={answered}
                            onClick={() => onClick("YESSSSS par abhi ni...")}
                            variant='contained'
                            size='small'
                            color='primary'>
                            yes par abhi ni :|
                        </Button>
                    </Box>
                    <Box mx={1}>
                        <Button
                            disabled={answered}
                            onClick={() => onClick("No ...")}
                            size='small'
                            variant='contained'
                            color='secondary'>
                            no :(
                        </Button>
                    </Box>
                </Box>
                {message && (
                    <Snackbar open={message} onClose={() => setMessage("")}>
                        <Alert severity={type}>{message}</Alert>
                    </Snackbar>
                )}
            </Container>
        </Box>
    );
};
