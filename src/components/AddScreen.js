import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, List, ListItem, Text, Card, CardItem, Form, Item, Input, Label } from "native-base";

import { connect } from 'react-redux';

import  { addEvent } from '../reducers/eventReducer';

class AddScreen extends React.Component {
    state = {
        _id: 'NA',
        text: 'STATE',
        amount: '0'
    };
    
    handleChangeText   = (text)   => {  this.setState({ text }) };
    handleChangeAmount = (amount) => {  this.setState({ amount }) };

    componentDidMount() {
        console.log('AddScreen:', this.props.route.params)
        const { action, _id, text, amount } = this.props.route.params;
        if ( action === 'NEW') {
            this.setState( {
                _id : Math.random().toString(),
                text: '',
                amount: '0'
            })
        } else {
            this.setState({
                _id,
                text,
                amount
            })
        }
    }

    handleSave = () => {
        console.log('handleSave:',this.state)
        this.props.addEvent(this.state)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Add Item</Title>
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

                    <Form>
                        <Item stackedLabel>
                            <Label>Text</Label>
                            <Input value={this.state.text} onChangeText={this.handleChangeText}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Amount</Label>
                            <Input keyboardType={'number-pad'}  value={this.state.amount} onChangeText={this.handleChangeAmount}/>
                        </Item>
                    </Form>
                    
                    <Button rounded success
                            style={{ marginTop: 10 }}
                            onPress={() => {
                                    this.handleSave() 
                                    this.props.navigation.goBack() 
                                }
                            }>
                        <Icon name='home' />
                        <Text>Save</Text>
                    </Button>

                    <Button rounded danger
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.goBack()}>
                        <Icon name='home' />
                        <Text>Cancel</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}
            
const mapStateToProps = state => {
    console.log('AddScreen-mapStateToProps:', state)
    return state
}
              
const mapDispatchToProps = dispatch => ({
    addEvent: payload => dispatch(addEvent(payload))
})
      
// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
      
      /*
function DetailsScreen({navigation}) {
    return (
            
                );
            }
*/