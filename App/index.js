import React from 'react';
import { Container, Drawer, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import Navigation from './Navigation';
import * as actions from './actions';
import state from './state';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(state);
const store = createStoreWithMiddleware(reducer);

const InsideApp = ({ toggleDrawer, app }) => {
  return (
    <Drawer open={app.get('isOpenDrawer')} content={<Navigation list={['boing']} />}>
      <Container>
        <Header>
          <Left>
            <Button onPress={() => toggleDrawer()} transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    </Drawer>
  );
}

const InsideAppEnhanced = connect(
  ({ app }) => ({ app }),
  {
    toggleDrawer: actions.toggleDrawer,
  }
)(InsideApp);

const App = () => (
  <Provider store={store}>
    <InsideAppEnhanced />
  </Provider>
);

export default App;
