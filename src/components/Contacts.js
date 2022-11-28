import { ContactPage, GitHub, LinkedIn } from "@mui/icons-material";
import { Divider, FormGroup, FormLabel, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Contacts() {
  const contacts = [
    {
      label: 'LinkedIn',
      path: 'https://www.linkedin.com/in/bob-marley-wendell-de-souza-5b13781a3',
      icon: <LinkedIn />
    },
    {
      label: 'GitHub',
      path: 'https://github.com/bob-mw',
      icon: <GitHub />
    }
  ];

  const Item = ({ label, path, icon }) => {
    return (
      <ListItem key={label} disablePadding>
          <ListItem button component="a" href={path} target="_blank">
              <ListItemIcon>
                { icon }
              </ListItemIcon>
              <ListItemText primary={label} />
          </ListItem>
      </ListItem>
    );
  };

  return (
    <Box
      width={250}
      display='flex'
      justifyContent='center'
    >
      <FormGroup>
        <FormLabel style={{ display: 'flex', alignContent: 'center', gap: 5 }}>
          <ContactPage />
          <Typography>
            Contacts
          </Typography>
        </FormLabel>
        <Divider style={{ margin: '5px 0 15px 0' }} />
        <List>
         {
            contacts.map(props => (<Item { ...props } />))
          }
        </List>
      </FormGroup>
    </Box>
  );
}