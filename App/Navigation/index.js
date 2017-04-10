import React from 'react';
import { Container, Drawer, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { Stylesheet } from 'react-native';
import { Text, ListItem, List } from 'native-base';

const Navigation = ({ list, toggleDrawer }) => (
  <Container  style={{ backgroundColor: '#fff' }}>
    <Header>
      <Left>
      </Left>
      <Body>
        <List>
        {list.map((item, i) => (
          <ListItem key={i}>
            <Text>
              {item}
            </Text>
          </ListItem>
        ))}
        </List>
      </Body>
      <Right>
        <Button onPress={() => toggleDrawer()} transparent>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
  </Container>
);

const NavigationEnhanced = connect(
  ({ app }) => ({ app }),
  {
    toggleDrawer: actions.toggleDrawer,
  }
)(Navigation);


export default NavigationEnhanced;
