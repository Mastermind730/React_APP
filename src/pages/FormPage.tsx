import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

const FormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      window.location.href = '/data_page';
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <Container  className="bg-white p-8 items-center justify-center rounded-lg shadow-lg">
        <Typography variant="h4" className="mb-6 text-center font-semibold text-gray-700">
          User Details
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          className="mb-4"
          variant="outlined"
          InputLabelProps={{ className: "text-gray-500" }}
          InputProps={{ className: "rounded-lg" }}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
          className="mb-4"
          variant="outlined"
          InputLabelProps={{ className: "text-gray-500" }}
          InputProps={{ className: "rounded-lg" }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          className="mb-6"
          variant="outlined"
          InputLabelProps={{ className: "text-gray-500" }}
          InputProps={{ className: "rounded-lg" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="w-full py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default FormPage;
