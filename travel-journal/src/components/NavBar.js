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
export default function NavBar() {
  return (
    <div>
      <CssBaseline />
      <AppBar style={{ background: "#F55A5A" }} position="relative">
        <Toolbar style={{ justifyContent: "center" }}>
          <PublicIcon />
          <Typography
            variant="h6"
            style={{ textAlign: "center", paddingLeft: "5px" }}
          >
            My Travel Journal
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
