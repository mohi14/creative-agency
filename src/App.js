import {
  Alert,
  Avatar,
  Button,
  createTheme,
  IconButton,
  Rating,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "./App.css";
import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import SxProps from "./components/SxProps";
import Boxy from "./components/Boxy";
// import Boxy from "./components/Boxy";

function App() {
  const [submitting, setSubmitting] = useState(false);

  const [ratting, setRatting] = useState(2);

  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [submitting]);

  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#FF0000"
      }
    }
  })
  const theme2 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#FFFF00"
      }
    }
  })

  return (
    <ThemeProvider theme={darkMode ? theme2 : theme}>

      <Switch onClick={() => setDarkMode(!darkMode)} />
      <div className="">
        <h1>hello</h1>
        <Button>Checkout</Button>
        <Button variant="text">Checkout</Button>
        <Button variant="contained">Checkout</Button>
        <Button variant="outlined">Checkout</Button>
        <Button variant="outlined" color="secondary">
          Checkout
        </Button>
        <Button variant="outlined" color="secondary" fullWidth>
          Checkout
        </Button>
        <LoadingButton
          loading={submitting}
          loadingIndicator="Loading…"
          variant="outlined"
          onClick={() => setSubmitting(true)}
        >
          Fetch data
        </LoadingButton>
        <Typography>Hello there</Typography>
        <Typography variant="h1">Hello there</Typography>
        <Typography variant="h5" gutterBottom>
          Hello there
        </Typography>
        <Typography variant="h5" component="h1">
          Hello there
        </Typography>
        <Typography variant="h5" component="h1" noWrap>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
          of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s&psig=AOvVaw04f9kOVjmnGIp5iMUqgrXW&ust=1676010639242000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDJ5aLoh_0CFQAAAAAdAAAAABAE"
            sx={{
              height: "80px",
              width: "80px",
            }}
          />
          <Typography variant="h5" component="h1">
            Hello there
          </Typography>
          <InstagramIcon color="primary" />
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <Rating
            name="simple-controlled"
            value={ratting}
            onChange={(event, newValue) => {
              setRatting(newValue);
            }}
            sx={{
              color: "steelBlue",
            }}
          />
          <TextField
            label="User Name"
            helperText="invalid username"
            error={true}
          />
          <Alert severity="error">This is an error alert — check it out!</Alert>

        </div>
        <SxProps></SxProps>
        <Boxy></Boxy>
      </div>
    </ThemeProvider>
  );
}

export default App;
