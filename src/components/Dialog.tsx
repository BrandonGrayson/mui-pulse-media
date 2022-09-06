import {
  Box,
  Button,
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
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { User, Service } from "../schemas/interfaces";
export default function SignUpUserDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [services, setServices] = useState<Service>({
    google: false,
    web_development: false,
    social_media: false,
  });

  const handleClose = () => {
    setOpen(!open);
  };

  const checkService = (event: React.SyntheticEvent<Element, Event>) => {
    console.log("event", event);
    let value = (event.target as unknown as HTMLInputElement).value;

    if (value === "google") {
      setServices({
        ...services,
        google: !services.google,
      });
    } else if (value === "social media") {
      setServices({
        ...services,
        social_media: !services.social_media,
      });
    } else if (value === "web development") {
      setServices({
        ...services,
        web_development: !services.web_development,
      });
    }
  };

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:8000/service", {
      method: "Post",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user, services: services }),
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
    });
  };

  return (
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
            value="google"
            control={
              <Checkbox checked={services.google} onChange={checkService} />
            }
            label="Google"
          />
          <FormControlLabel
            value="social media"
            control={<Checkbox checked={services.social_media} />}
            onChange={checkService}
            label="Social Media"
          />
          <FormControlLabel
            value="web development"
            control={<Checkbox checked={services.web_development} />}
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
  );
}
