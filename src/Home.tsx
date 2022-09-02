import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  CardActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import "./Home.css";
import CloseIcon from "@mui/icons-material/Close";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  services: string[];
}

export default function Home() {
  const [open, setOpen] = useState(false);
  // const [services, setServices] = useState([])
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    services: [],
  });
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const checkService = (event: React.SyntheticEvent<Element, Event>) => {
    console.log("event", event);
    let checkedService = (event.target as unknown as HTMLInputElement).value;

    if (user.services.indexOf(checkedService) === -1) {
      setUser({
        ...user,
        services: [...user.services, checkedService],
      });
    } else {
      setUser({
        ...user,
        services: [
          user.services.filter(
            (service) => service === checkedService
          ) as unknown as string,
        ],
      });
    }
  };

  const handleSubmit = async () => {
    // axios.post("http://127.0.0.1:8000/service", JSON.stringify(user))'
    const response = await fetch("http://127.0.0.1:8000/service", {
      method: "Post",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.status === 201) {
      alert("Service added successfully");
    } else {
      alert("Error adding product");
    }
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      services: [],
    });
  };

  return (
    <>
      <Grid container spacing={2} id="container">
        <Grid
          item
          xs={10}
          md={12}
          lg={3}
          sx={{ marginLeft: "15vw" }}
          id="title"
        >
          <Typography
            variant="h2"
            width="bold"
            color="pulse.headerText"
            id="header"
          >
            Designed to
          </Typography>

          <Typography
            variant="h4"
            pt="3%"
            color="pulse.subtitleText"
            id="sub-header"
          >
            generate referrals
          </Typography>
        </Grid>

        <Grid
          item
          xs={10}
          md={10}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "none",
            position: "relative",
          }}
        >
          <Box sx={{ display: "block" }}>
            <Box
              component="img"
              alt="Pulse Media Hero"
              src="img/pulseHeroImg.png"
              className="hero-img"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        display="flex"
        flexDirection="row"
        mt={5}
        className="about-box"
      >
        <Box className="bar"></Box>
        <Typography
          id="about"
          sx={{ marginRight: "5vw", display: "flex", alignItems: "center" }}
        >
          Pulse Media is a branding agency based in Mt Laurel, NJ. We help home
          remodeling companies generate referrals through online brand
          promotion.
        </Typography>
      </Grid>

      <Grid item xs={12} mt={3} pb={4} display="flex" justifyContent="center">
        <Typography id="what">What We Do</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4} px={3} mb={2} className="card-group">
          <Card className="card">
            <CardHeader title="Google Reviews" />
            <CardContent>
              <Typography>Generate Consistent Reviews </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={handleClick}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} px={3} mb={2} className="card-group">
          <Card className="card">
            <CardHeader title="Social Media" />
            <CardContent>
              <Typography>Generate Consistent Reviews </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={handleClick}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} px={3} mb={2} className="card-group">
          <Card className="card">
            <CardHeader title="Web Development" />
            <CardContent>
              <Typography>Generate Consistent Reviews </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={handleClick}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle>Service</DialogTitle>
          <CloseIcon
            onClick={handleClose}
            sx={{ marginTop: "10px", marginRight: "30px" }}
          />
        </Box>
        <DialogContent>
          <DialogContentText>
            To get a free guide fill out this form
          </DialogContentText>
          <FormGroup>
            <FormControlLabel
              value="Google"
              control={
                <Checkbox
                  checked={user.services.includes("Google")}
                  onChange={checkService}
                />
              }
              label="Google"
            />
            <FormControlLabel
              value="Social Media"
              control={
                <Checkbox checked={user.services.includes("Social Media")} />
              }
              onChange={checkService}
              label="Social Media"
            />
            <FormControlLabel
              value="Web Development"
              control={
                <Checkbox checked={user.services.includes("Web Development")} />
              }
              onChange={checkService}
              label="Web Development"
            />
          </FormGroup>
          <FormControl>
            <TextField
              label="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  );
}
