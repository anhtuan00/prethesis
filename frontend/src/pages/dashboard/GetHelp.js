import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@material-ui/core';
import { Room, Phone, Email, Language } from '@material-ui/icons';

import React from 'react';

const GetHelp = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '5px', height: '100vh', textAlign: 'left' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Get Help
        </Typography>
        <Typography variant="h5" gutterBottom>
          University Department
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Room />
            </ListItemIcon>
            <ListItemText
              primary="Department of Computer Science"
              secondary="Quarter 6, Linh Trung w., Thu Duc City, Ho Chi Minh City"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="(028) 37244270 ext. 3232" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="cse@hcmiu.edu.vn" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="http://cse.hcmiu.edu.vn" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Typography>Working Hours:</Typography>
            </ListItemIcon>
            <ListItemText primary="8am-5pm" />
          </ListItem>
        </List>
        <Divider variant="middle" />
        <Typography variant="h5" gutterBottom>
          Lecturer Responsible for Student internship and job assistance system
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Room />
            </ListItemIcon>
            <ListItemText
              primary="MSc. Pham Quoc Son Lam"
              secondary="Room 610, International University. Block 6, Linh Trung Ward, Thu Duc District, HCM City, Vietnam"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="(84-8) 37244270. Ext: 3232" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="pqslam@hcmiu.edu.vn" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Typography>Working Hours:</Typography>
            </ListItemIcon>
            <ListItemText primary="8am-5pm" />
          </ListItem>
        </List>
      </Container>
    </div>
  );
};

export default GetHelp;
