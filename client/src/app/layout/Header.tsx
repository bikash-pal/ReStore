import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const midLinks = [
  { titile: "catalog", path: "/catalog" },
  { titile: "about", path: "/about" },
  { titile: "contact", path: "/contact" },
];

const rightLinks = [
  { titile: "login", path: "/login" },
  { titile: "register", path: "/register" },
];

const navStyle = {
  color: "inherit",
  textDecoration: "none",
  topography: "h6",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};
interface Props {
  darkMode: boolean;
  handleTheamChange: () => void;
}
export default function Header({ darkMode, handleTheamChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyle}>
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={handleTheamChange} />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ titile, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyle}>
              {titile.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton
            component={Link}
            to="basket"
            size="large"
            sx={{ color: "inherit" }}
          >
            <Badge badgeContent={3} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ titile, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyle}>
                {titile.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
