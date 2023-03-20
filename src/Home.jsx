import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
import { API } from "./global";
import { useEffect, useState } from "react";

export function Home() {
  const [dbs, setDbs] = useState([]);
  const getData = () => {
    fetch(`${API}/web`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((use) => setDbs(use));
  };
  console.log(dbs);
  useEffect(() => getData, []);
  return (
    <div>
      <div className="nav">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                web scraping
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <h1>flipkart iphones products</h1>
      <div className="new">
        {dbs.map((e, index) => (
          <Cards key={index} product={e} />
        ))}
      </div>
    </div>
  );
}

function Cards({ product }) {
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
