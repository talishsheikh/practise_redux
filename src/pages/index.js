import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "@/redux/slice";

export default function HomePage() {
  const dispatch = useDispatch();
  const talish = useSelector((state) => state?.product);
  console.log(talish, "lkeit");

  React.useEffect(() => {
    dispatch(getApiData());
  }, []);
  return (
    <>
      {talish?.data?.map((item, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardMedia
            sx={{ height: 140 }}
            image={item?.images}
            title="green iguana"
            // title={item?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
