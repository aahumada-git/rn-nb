import React, { useState } from 'react'
import { connect } from 'react-redux';

import { Formik, useFormikContext } from 'formik'
import * as yup from 'yup'

import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, List, ListItem, Text, Card, CardItem, Form, Item, Input, Label } from "native-base";

const eventSchema = yup.object({
    text: yup.string().required(),
    amount: yup.string().required().test('isNum1to5', 'Num must be 1-5', (val) => {
        return parseInt(val) > 0 && parseInt(val) < 6
    }),
})

// export default function ContactForm () {
class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        console.log('\n\n\n***[ contructor ]**************');

        this.state = {
            _id: 'XXX',
            text: 'XXX',
            amount: 'XXX',
        }

        console.log('this.state: ', this.state)
    }

    componentDidMount() {
        console.log('\n---[ componentDidMount ]------------------');
        console.log('IN this.props.route.params : ', this.props.route.params)

        const { payload } = this.props.route.params;

        let x = {
            _id: payload._id !== null ? payload._id : Math.random().toString(),
            text: payload.text !== null ? payload.text : '',
            amount: payload.amount !== null ? payload.amount : '0',
        }

        console.log(' X: ', x)

        this.state._id = x._id;
        this.state.text = x.text;
        this.state.amount = x.amount;


        console.log('OUT: this.state: ', this.state)

    }

    handleSubmitFormik = (values, actions) => {
        console.log('\n---[ handleSubmitFormik ]------------------');
        console.log('values:', values)
        // this.handleSave(values)
        // actions.resetForm()
        // this.props.navigation.goBack()
    }


    /*
        handleSave = (values) => {
            console.log('ContactForm.handleSave:', this.state)
            this.props.addEvent({
                _id: this.state._id,
                text: value.text,
                amount: value.amount,
            })
        }
    */




    render() {
        console.log('\n---[ render ]------------------');
        console.log('this.state: ', this.state)

        const { payload } = this.props.route.params;

        let x = {
            _id: payload._id !== null ? payload._id : Math.random().toString(),
            text: payload.text !== null ? payload.text : '',
            amount: payload.amount !== null ? payload.amount : '0',
        }

        console.log(' X: ', x)

        this.state = x

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
                        <Title>CONTACT</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Formik
                        initialValues={{ text: this.state.text, amount: this.state.amount }}
                        // initialValues={{ text: '', amount: '' }}
                        // validationSchema={eventSchema}
                        onSubmit={this.handleSubmitFormik}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                            console.log('\n---[ Formik Function ]------------------x');
                            console.log('values: ', values)
                            return (
                                <Form>
                                    <Item stackedLabel>
                                        <Label>Text</Label>
                                        <Input
                                            placeholder='Enter the text'
                                            value={values.text}
                                            onChangeText={handleChange('text')}
                                            onBlur={handleBlur('text')}
                                        />
                                        <Text>{touched.text && errors.text}</Text>
                                    </Item>
                                    <Item stackedLabel last>
                                        <Label>Amount</Label>
                                        <Input
                                            placeholder='Enter the amount'
                                            value={values.amount}
                                            onChangeText={handleChange('amount')}
                                            onBlur={handleBlur('amount')}
                                        // keyboardType={'number-pad'}
                                        />
                                        <Text>{touched.amount && errors.amount}</Text>
                                    </Item>

                                    <Button rounded danger
                                        style={{ marginTop: 10 }}
                                        onPress={() => handleSubmit()}>
                                        <Text>Save</Text>
                                    </Button>
                                </Form>
                            )
                        }}
                    </Formik>

                    <Button rounded danger
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon name='home' />
                        <Text>Cancel</Text>
                    </Button>

                </Content>
            </Container>
        )
    }
}

export default ContactForm;

/*
const mapStateToProps = state => {
    console.log('ContactForm-mapStateToProps:', state)
    return state
}

const mapDispatchToProps = dispatch => ({
    addEvent: payload => dispatch(addEvent(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
*/