import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, List, ListItem, Text, Card, CardItem } from "native-base";

import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('HomeScreen:',this.props)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Menu")}>
              <Icon type="MaterialCommunityIcons" name="attachment" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
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
            onPress={() => this.props.navigation.navigate("Details")}>
            <Text>Goto Details</Text>
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
  console.log('mapStateToProps:',state)
  return state
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({ 
      type: "GET_EVENTS", 
      payload: [
          { _id: 1, text: 'CARGA DIESEL', amount: -54000 },
          { _id: 2, text: 'PEAJE LAMPA', amount: -3400 },
          { _id: 3, text: 'ALMUERZO DON PEYO', amount: -5600 },
          { _id: 4, text: 'ADELANTO', amount: 100000 },
      ],
  })
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