import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, List, ListItem, Text, Card, CardItem } from "native-base";

import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  componentDidMount() {
    // console.log('HomeScreen:',this.props)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Contact", {action: 'NEW', payload: {_id: 100, text: null, amount: null}})}>
              <Icon type="MaterialCommunityIcons" name="attachment" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")} >
              <Icon type="MaterialCommunityIcons" name="login" />
            </Button>
            </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Home content...</Text>
              </Body>
            </CardItem>
          </Card>

          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Details", {action: 'EDIT', _id: 10, text: 'EDIT', amount: '-69'})}>
            <Text>ADD</Text>
          </Button>

          <List dataArray={this.props.eventReducer.data}
            keyExtractor={item => String(item._id)}
            renderRow={(item) =>
              <ListItem >
                <Text>{item.text}</Text>
                <Text>${item.amount}</Text>
              </ListItem>
            }
          />

        </Content>
      </Container>

    );
  }
}

const mapStateToProps = state => {
  // console.log('mapStateToProps:',state)
  return state
}

const mapDispatchToProps = dispatch => ({
  // TBD
})

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
export default connect(mapStateToProps)(HomeScreen)




/*
<Container>
<Header>
  <Left>
    <Button
      transparent
      onPress={() => this.props.navigation.navigate("DrawerOpen")}
    >
      <Icon name="menu" />
    </Button>
  </Left>
  <Body>
    <Title>HomeScreen</Title>
  </Body>
  <Right />
</Header>
<Content padder>
  <Card>
    <CardItem>
      <Body>
        <Text>Chat App to talk some awesome people!</Text>
      </Body>
    </CardItem>
  </Card>
  <Button
    full
    rounded
    dark
    style={{ marginTop: 10 }}
    onPress={() => this.props.navigation.navigate("Chat")}
  >
    <Text>Chat With People</Text>
  </Button>
  <Button
    full
    rounded
    primary
    style={{ marginTop: 10 }}
    onPress={() => this.props.navigation.navigate("ProfileScreen")}
  >
    <Text>Goto Profiles</Text>
  </Button>
</Content>
</Container>

 */