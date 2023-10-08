import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import Navbar from './Navbar'; // นำเข้า Navbar จากไฟล์ที่เกี่ยวข้อง

export default function UserList() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    UserGet()
  }, [])
  
  const UserGet = () => {
    fetch(" ")
      .then(res => res.json())
      .then(
        (result) => {
          setUser(result)
        }
      )
  }

  const UpdateUser = id => {
    window.location = '/update/'+id
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch(' ', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          UserGet();
        }
      }
    )
  }
  return (
    <Container sx={{ p:2 }} maxWidth="lg">
      <Navbar /> {/* เรียกใช้ Navbar ที่นำเข้ามา */}
      <Paper sx={{ p:2 }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              DOCTORS
            </Typography>
          </Box>
          <Box>
            <Link to="/create">
              <Button variant="contained" color="primary">
                เพิ่ม
              </Button>
            </Link>
          </Box>
        </Box> 
        
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="center">ชื่อ</TableCell>
              <TableCell align="left">นามสกุล</TableCell>
              <TableCell align="left">เบอร์</TableCell>
              <TableCell align="left">อีเมล</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user) => (
              <TableRow key={user.ID}>
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Avatar src={user.avatar} />
                  </Box>
                </TableCell>
                <TableCell align="left">{user.fname}</TableCell>
                <TableCell align="left">{user.lname}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="center">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => UpdateUser(user.id)}>เเก้ไข</Button>
                    <Button onClick={() => UserDelete(user.id)}>ลบ</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Container>
  );
}
