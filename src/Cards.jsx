import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export function Cards({ product }) {
  return (
    <div>
      <Card className="crd" sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="440"
            id="imgs"
            image={product.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ₹ {product.price}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ⭐ {product.rating}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
