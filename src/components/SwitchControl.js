import { Settings } from "@mui/icons-material";
import { Box, Divider, FormControlLabel, FormGroup, FormLabel, Switch, Typography } from "@mui/material";

export default function SwitchControl({ ellipse, setEllipse, planetNames, setPlanetNames }) {

  return (
    <Box
      width={250}
      display='flex'
      justifyContent='center'
    >
      <FormGroup>
        <FormLabel style={{ display: 'flex', alignContent: 'center', gap: 5 }}>
          <Settings />
          <Typography>
            Settings
          </Typography>
        </FormLabel>
        <Divider style={{ margin: '5px 0 15px 0' }} />
        <FormControlLabel control={<Switch onChange={() => setEllipse(!ellipse)} checked={ellipse} />} label="ellipse" />
        <FormControlLabel control={<Switch onChange={() => setPlanetNames(!planetNames)} checked={planetNames} />} label="planet names" />
      </FormGroup>
    </Box>
  );
}