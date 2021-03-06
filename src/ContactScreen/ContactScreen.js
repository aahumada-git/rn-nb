import React from 'react'
import ContactForm from './ContactForm'

export default class ContactScreen extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    render() {
        return <ContactForm onSubmit={this.submit} />
    }
}