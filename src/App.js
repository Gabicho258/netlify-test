import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function App() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((response) => response.json());
    for (let i = 0; i < 20; i++) {
      setItems((oldItems) => [...oldItems, response[i]]);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item) => (
          <Grid item xs={2} sm={11} md={2} key={item.id}>
            <Card sx={{ minWidth: 150, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.thumbnailUrl}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
