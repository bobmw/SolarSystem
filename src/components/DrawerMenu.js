import { Close, Menu } from "@mui/icons-material";
import { AppBar, Divider, Drawer, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { context } from "../context";
import Contacts from "./Contacts";
import SwitchControl from "./SwitchControl";


export default function DrawerMenu() {
  const [opened, setOpened] = useState(false);
  const { ellipse, setEllipse, setPlanetNames, planetNames } = useContext(context);

  return (
    <>
      <AppBar style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton onClick={() => setOpened(true)}>
            <Menu style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={opened}
          onClose={() => setOpened(false)}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginBottom: 10
            }}
          >
            <IconButton onClick={() => setOpened(false)}>
              <Close />
            </IconButton>
          </Toolbar>
          <SwitchControl
            ellipse={ellipse}
            setEllipse={setEllipse}
            setPlanetNames={setPlanetNames}
            planetNames={planetNames}
          />
          <Divider style={{ margin: '50px 0 30px 0' }} />
          <Contacts />
        </Drawer>
      </Box>
    </>
  );
}