import React from "react";
import PropTypes from "prop-types";
// material ui tools
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, rgbToHex, useTheme } from "@material-ui/core/styles";

import { ListItemIcon, Collapse, Divider } from "@material-ui/core";

// icons import
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import InfoIcon from "@material-ui/icons/Info";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

// page imports
import Home from "../pages/Home";
import About from "../pages/About";
import Chapter from "../pages/Chapter";
import Routine from "../pages/Routine";

// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Classes from "../pages/Classes";

import logo from "../logo.png";
import { display, textAlign } from "@material-ui/system";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  content: {
    flexGrow: 1,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
function Nav({ src, setSrc }) {
  const [expand, setExpand] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        }}
        component="nav"
        aria-label="main mailbox folders"
      >
        {/* {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem
          button
          divider
          key="home"
          onClick={() => {
            setMobileOpen(false);
          }}
          component={NavLink}
          to="/"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List>
            <ListItem
              button
              key="hsc21"
              onClick={() => {
                setMobileOpen(false);
              }}
              component={NavLink}
              to="/chapter/hsc21"
            >
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="HSC 21" />
            </ListItem>
            <ListItem
              button
              key="hsc22"
              onClick={() => {
                setMobileOpen(false);
              }}
              component={NavLink}
              to="/chapter/hsc22"
            >
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="HSC 22" />
            </ListItem>
            <ListItem
              button
              key="master"
              onClick={() => {
                setMobileOpen(false);
              }}
              component={NavLink}
              to="/chapter/master"
            >
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Master Group" />
            </ListItem>
          </List>
          <Divider />
        </Collapse>
        <ListItem
          button
          key="routine"
          onClick={() => {
            setMobileOpen(false);
          }}
          component={NavLink}
          to="/routine"
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="routine and notices" />
        </ListItem>
        <ListItem
          button
          key="about"
          onClick={() => {
            setMobileOpen(false);
          }}
          component={NavLink}
          to="/about"
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <span style={{ fontFamily: "Noto Sans JP" }}>
                <span>JE</span>
                <span style={{}}>W</span>
                <span>EL</span>
                <br />
                <span style={{ color: "limegreen" }}>CHEMISTRY</span>
              </span>
            </Link>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <Home src={src} setSrc={setSrc} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/routine">
              <Routine />
            </Route>
            <Route path="/chapter/:course">
              <Chapter />
            </Route>
            <Route path="/classes/:course/:id">
              <Classes />
            </Route>
            <Route>
              <>oops page not found</>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// Nav.propTypes = {
//   // Injected by the documentation to work in an iframe.
//   // You won't need it on your project.
//   container: PropTypes.object,
// };
export default Nav;
