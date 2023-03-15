import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { dbs } from "./global";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
import { API } from "./global";
import { useEffect, useState } from "react";

export function Home() {
  const [dbss, setDbs] = useState(dbs);
  const getData = () => {
    fetch(API)
      .then((data) => data.json())
      .then((use) => setDbs(use));
  };
  console.log(dbss);
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
      <h1>flipkart products</h1>
      <div className="new">
        {dbss.map((e) => (
          <Cards key={e.id} product={e} />
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
          <CardMedia component="img" height="240" image={product.image} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.tittle}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {product.price}
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
