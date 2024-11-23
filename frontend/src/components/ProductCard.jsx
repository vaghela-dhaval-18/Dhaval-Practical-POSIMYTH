import React from "react";
import Card from "@mui/material/Card";
import {
  Box,
  CardContent,
  CardMedia,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, p: "4px", height: "400px" }}>
      <CardMedia
        component={"img"}
        height={"140"}
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Tooltip
          title={product?.title?.length > 50 ? product?.title : ""}
          arrow
        >
          <Typography
            sx={{ cursor: "pointer" }}
            variant="h6"
            component="div"
            noWrap={product?.title.length > 50}
          >
            {product?.title.length > 50
              ? product?.title.slice(0, 50)
              : product?.title}
          </Typography>
        </Tooltip>
        <Typography variant="body2" color="textSecondary">
          {product?.category}
        </Typography>
        <Typography variant="h6" color="primary">
          $ {product?.price}
        </Typography>
        <Box sx={{ display: "flex", alignContent: "center", mt: 1 }}>
          <Rating value={product?.rating?.rate} precision={0.1} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {product?.rating?.count} reviews
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
