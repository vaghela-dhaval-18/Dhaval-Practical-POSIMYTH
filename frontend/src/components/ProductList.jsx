import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import FilterAndSearch from "./FilterAndSearch";

function ProductList() {
  const {
    Products,
    setProducts,
    FilterProducts,
    setFilterProducts,
    loading,
    setLoading,
  } = useContext(ProductContext);

  const handleSearch = (query) => {
    const filtered = Products.filter((product) =>
      product?.title?.toLowerCase().includes(query.toLowerCase())
    );
    setFilterProducts(filtered);
  };

  const handleFilter = (category) => {
    const filtered =
      category == "All"
        ? Products
        : Products.filter((product) => product?.category == category);
    setFilterProducts(filtered);
  };

  if (loading) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <CircularProgress />
        <Typography sx={{ ml: 2 }} color="textSecondary">
          Loading Products...
        </Typography>
        ;
      </Box>
    );
  }
  return (
    <Box
      display={{ xs: "block", sm: "flex" }}
      sx={{ backgroundColor: "#e9e4e4" }}
    >
      <FilterAndSearch onSearch={handleSearch} onFilter={handleFilter} />
      <Grid container spacing={2} sx={{ flexGrow: 1, p: 3 }}>
        {FilterProducts.length > 0 ? (
          FilterProducts.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product?.id}>
                <ProductCard product={product} />;
              </Grid>
            );
          })
        ) : (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
            width={"100%"}
          >
            <Typography variant="h5" color="error">
              No Products Found!
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
}

export default ProductList;
