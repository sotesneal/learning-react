import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Container,
  CssBaseline,
} from "@mui/material";
import { padding } from "@mui/system";
import PublicIcon from "@mui/icons-material/Public";

export default function CardComponent(props) {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 345, marginTop: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.place}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
