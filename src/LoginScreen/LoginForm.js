import React, { Component, Fragment } from 'react';

import { TextInput, Alert } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, List, ListItem, Text, Card, CardItem, Form, Item, Input, Label } from "native-base";

import * as yup from 'yup'
import { Formik } from 'formik'

class LoginForm extends Component {
    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => Alert.alert(JSON.stringify(values))}
                validationSchema={yup.object().shape({
                    email: yup
                        .string()
                        .email()
                        .required(),
                    password: yup
                        .string()
                        .min(6)
                        .required(),
                })}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <Fragment>
                        <TextInput
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="E-mail"
                        />
                        {touched.email && errors.email &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                        }
                        <TextInput
                            value={values.password}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            onBlur={() => setFieldTouched('password')}
                            secureTextEntry={true}
                        />
                        {touched.password && errors.password &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                        }
                        <Button
                            disabled={!isValid}
                            style={{ marginTop: 10 }}
                            onPress={handleSubmit}
                        >
                            <Text>Sing In</Text>
                        </Button>
                    </Fragment>
                )}
            </Formik>
        );
    }
}

export default class ScreenForm extends Component {
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
                        <Title>Login</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>

                    <LoginForm />

                    <Button rounded danger
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon name='home' />
                        <Text>Go Back</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}