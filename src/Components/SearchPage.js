import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, data]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Search
      </Typography>
      <TextField
        label="Search..."
        fullWidth
        margin="normal"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={2}>
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
              <CardMedia
  component="img"
  height="140"
  image={item.imageUrl} // Change this to 'imageUrl'
  alt={item.name}
/>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              No results found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default SearchPage;
