import React, { useState } from 'react';
import { Grid, Tab, Tabs, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { BsPerson, BsStar } from 'react-icons/bs';

import TabPanel from '../TabPanel';

interface Rating {
  Source: string;
  Value: string;
}

interface InfoTabsProps {
  actors: string[];
  directors: string[];
  ratings: Rating[];
}

const InfoTabs: React.FC<InfoTabsProps> = (props: InfoTabsProps) => {
  const { actors, directors, ratings } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Actors" />
          <Tab label="Director" />
          <Tab label="Ratings" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <List aria-label="actors">
          {actors.map((actor) => (
            <ListItem key={actor}>
              <ListItemAvatar>
                <Avatar>
                  <BsPerson />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={actor} />
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {directors.map((director) => (
          <ListItem key={director}>
            <ListItemAvatar>
              <Avatar>
                <BsPerson />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={director} />
          </ListItem>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {ratings.map((rating) => (
          <ListItem key={rating.Source}>
            <ListItemAvatar>
              <Avatar>
                <BsStar />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={rating.Source} secondary={rating.Value} />
          </ListItem>
        ))}
      </TabPanel>
    </Grid>
  );
};

export default InfoTabs;
