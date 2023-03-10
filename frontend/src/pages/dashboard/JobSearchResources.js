import React from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@material-ui/core';
import { Link, LinkedIn, Language } from '@material-ui/icons';
import usePageName from '../../utils/usePageName';

const JobSearchResources = () => {
  usePageName('Other Resources');

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '5px',
        height: '100vh',
        textAlign: 'left',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Recommended Job Search Sites
        </Typography>
        <List>
          <ListItem button component="a" href="https://www.topcv.vn">
            <ListItemIcon>
              <Link />
            </ListItemIcon>
            <ListItemText primary="TOPCV" />
          </ListItem>
          <ListItem button component="a" href="https://www.linkedin.com/jobs">
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem button component="a" href="https://itviec.com">
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Glints" />
          </ListItem>
          <ListItem button component="a" href="https://glints.com">
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="TopDev" />
          </ListItem>
          <ListItem button component="a" href="https://topdev.vn/">
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="CareerBuilder" />
          </ListItem>
          <ListItem button component="a" href="https://careerbuilder.vn/">
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="ITviec" />
          </ListItem>
        </List>
        <br />
        <Divider />
        <Typography variant="h2" gutterBottom>
          Other Resources
        </Typography>
        <Typography variant="body1" gutterBottom>
          Consider reaching out to alumni or networking with professionals in your field of interest. You can also check
          out job fairs and career events at International University or in your local community.
        </Typography>
      </Container>
    </div>
  );
};

export default JobSearchResources;
