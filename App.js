// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppLoading } from 'expo';

import { FlatList } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, List, ListItem, Text, Card, CardItem } from "native-base";

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])

  
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// STORE
import { Provider, connect } from 'react-redux';
import configureStore from './src/configureStore';
let store = configureStore()

const renderItem = ({ item }) => {
    return (
        <ListItem style={{ marginLeft: 0 }}>
            <Body>
                <Text>{item.text}</Text>
                <Text>${item.amount}</Text>
            </Body>
        </ListItem>
    )
}

import HomeScreen from './src/components/HomeScreen';
/* 
class HomeScreen extends React.Component {
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
  
            <List dataArray={[]}
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

 */
/* 
//  this.props.navigation <=> ({navigation})
function HomeScreen({ navigation }) {
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.navigate("Menu")}>
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
                    onPress={() => navigation.navigate("Details")}>
                    <Text>Goto Details</Text>
                </Button>

                <List dataArray={[]}
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
*/

/* 
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

connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
*/

/* const mapStateToProps = state => {
    return {
        dataTvMaze: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            return dispatch(fetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen); */

/*
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
*/



function MenuScreen({ navigation }) {
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Menu</Title>
                </Body>
                <Right />
            </Header>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Menu content...</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Button full rounded primary
                    style={{ marginTop: 10 }}
                    onPress={() => navigation.goBack()}>
                    <Text>Atras</Text>
                </Button>
            </Content>
        </Container>
    );
}



import DetailsScreen from './src/components/AddScreen';
/* 
function DetailsScreen({ navigation }) {
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Details</Title>
                </Body>
                <Right />
            </Header>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Detail content...</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Button full rounded primary
                    style={{ marginTop: 10 }}
                    onPress={() => navigation.goBack()}>
                    <Text>Atras</Text>
                </Button>
            </Content>
        </Container>
    );
}

 */
const Stack = createStackNavigator();

/*
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
*/

import ContactForm from './src/ContactScreen/ContactForm';
import LoginForm from './src/LoginScreen/LoginForm';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator headerMode="none" initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Menu" component={MenuScreen} />
                        <Stack.Screen name="Details" component={DetailsScreen} />
                        <Stack.Screen name="Contact" component={ContactForm} />
                        <Stack.Screen name="Login" component={LoginForm} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

/*
            <Container>
                <Text>Open up App.js to start working on your app!</Text>
            </Container>

*/