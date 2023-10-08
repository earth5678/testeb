import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function UserCreate() {  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      avatar: avatar,
    };
  
    try {
      const result = await db.collection("users").insertOne(data);
      console.log("User added:", result.ops[0]);
      alert("User added successfully");
  
    } catch (err) {
      console.error("Error adding user:", err);
      alert("Error adding user");
    }
  };

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  return (
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:2 }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="ชื่อ"
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="นามสกุล"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phonenum"
                label="เบอร์"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="อีเมล"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                เพิ่ม
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}