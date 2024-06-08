import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

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
    <Container maxWidth="sm">
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
      {filteredData.length === 0 ? (
        <Typography variant="h6" component="p" gutterBottom>
          No results found
        </Typography>
      ) : (
        <List>
          {filteredData.map(item => (
            <ListItem key={item.id}>{item.name}</ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default SearchPage;