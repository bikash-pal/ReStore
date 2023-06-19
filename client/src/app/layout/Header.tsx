import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { titile: "catalog", path: "/catalog" },
  { titile: "about", path: "/about" },
  { titile: "contact", path: "/contact" },
];

const rightLinks = [
  { titile: "login", path: "/login" },
  { titile: "register", path: "/register" },
];
interface Props {
  darkMode: boolean;
  handleTheamChange: () => void;
}
export default function Header({ darkMode, handleTheamChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          RE-STORE
        </Typography>
        <Switch checked={darkMode} onChange={handleTheamChange} />
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ titile, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{
                color: "inherit",
                topography: "h6",
                "&:hover": { color: "secondary.main" },
                "&.active": { color: "text.secondary" },
              }}
            >
              {titile.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent="3" color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: "flex" }}>
          {rightLinks.map(({ titile, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "inherit", topography: "h6" }}
            >
              {titile.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
