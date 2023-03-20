import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { API } from "./global";
import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export function Home() {
  const [dbs, setDbs] = useState([]);
  const getData = async () => {
    await fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((use) => setDbs(use))
      .catch((err) => console.log(err));
  };
  console.log(dbs);
  useEffect(() => {
    getData();
  }, []);
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
        {dbs?.map((e, index) => (
          <Cards key={index} product={e} />
        ))}
      </div>
    </div>
  );
}
