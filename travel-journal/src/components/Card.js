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
  Tooltip,
  Link,
  List,
  ListItem,
} from "@mui/material";
import { padding } from "@mui/system";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function CardComponent(props) {
  console.log(props);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <ListItem>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
          }}
          alt="The house from the offer."
          src={props.image}
        ></Box>
        <CardContent>
          <li>
            <Toolbar>
              <LocationOnIcon style={{ color: "#F55A5A" }} />
              <Typography>{props.country}</Typography>
              <Link
                href={props.googleMapUrl}
                sx={{ marginLeft: 2 }}
                variant="body2"
              >
                {"View on Google Maps"}
              </Link>
            </Toolbar>
          </li>
          <Typography gutterBottom variant="h4">
            {props.place}
          </Typography>
          <Typography variant="h7" component="div">
            {props.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </ListItem>
    </List>
  );
}
{
  /* <Card sx={{ marginTop: 2 }}>
  <CardMedia
    component="img"
    alt="green iguana"
    height="400"
    image={props.image}
  />
  <CardContent>
    <Toolbar>
      <LocationOnIcon />
      <Typography>{props.country}</Typography>
      <Link href={props.googleMapUrl} sx={{ marginLeft: 2 }} variant="body2">
        {"View on Google Maps"}
      </Link>
    </Toolbar>
    <Typography gutterBottom variant="h4">
      {props.place}
    </Typography>
    <Typography variant="h7" component="div">
      {props.date}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {props.description}
    </Typography>
  </CardContent>
</Card>;
 */
}
