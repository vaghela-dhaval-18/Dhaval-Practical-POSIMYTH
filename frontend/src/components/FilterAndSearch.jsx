import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function FilterAndSearch({ onSearch, onFilter }) {
  const categories = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <Box
      sx={{
        width: 250,
        p: 2,
        border: "1px solid #ddd",
        height: { xs: "auto", md: "100vh" },
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filter And Search
      </Typography>
      <TextField
        fullWidth
        label="Search Products"
        variant="outlined"
        onChange={(e) => handleSearchChange(e)}
        value={searchQuery}
      />
      <List>
        {categories?.map((category, index) => (
          <ListItem
            key={index}
            sx={{ cursor: "pointer" }}
            button
            onClick={() => onFilter(category)}
          >
            <ListItemText primary={category}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FilterAndSearch;
