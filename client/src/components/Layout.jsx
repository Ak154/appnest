import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const userMenu = [
    {
      name: "SHOP",
      path: "/shop",
    },
    {
      name: "ABOUTUS",
      path: "/aboutus",
    },
    {
      name: "RECIPES",
      path: "/recipes",
    },
    {
      name: "BLOG",
      path: "/blog",
    },
    {
      name: "REVIEWS",
      path: "/reviews",
    },
    {
      name: "Protein Calculator",
      path: "/protiencalculator",
    },
    {
      name: "Searchinput",
      path: "/search",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Cart",
      path: "/cart"
    }
  ];
  return (
    <div>
      <AppBar
        sx={{
          // backgroundColor: "#A9A9A9",
          backgroundColor: "#74AA9C",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          marginLeft: "auto",
          position:"fixed"
        }}
      >
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft:"-60px" }}
            >
              <NavLink
                to="/"
                style={{ color: "black", textDecoration: "none" }}
              >
                Origin Nutritions
              </NavLink>
            </Typography>
            <Stack direction="row" spacing={3}>
              {userMenu.map((item, idx) => {
                return (
                  <div key={idx}>
                    {item.name === "Searchinput" ? (
                      <div>
                        <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                      />
                      </div>
                    ) : (
                      <Button>
                        <NavLink
                          to={item.path}
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </NavLink>
                      </Button>
                    )}
                  </div>
                );
              })}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Layout;
