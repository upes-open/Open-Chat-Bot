import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: 'white',
    fontFamily: 'Trebuchet MS',
    headerBgColor: '#51ff00',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#000000',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#000000',
};

const config = {
    width: "350px",
    height: "500px",
    floating: true,
}

class SimpleForm extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: 'q-firstname',
                            message: 'What is your first name?',
                            trigger: 'firstname',
                        },
                        {
                            id: 'firstname',
                            user: true,
                            trigger: 'q-lastname'
                        },
                        {
                            id: 'q-lastname',
                            message: 'What is your last name?',
                            trigger: 'lastname',
                        },
                        {
                            id: 'lastname',
                            user: true,
                            trigger: 'q-email'
                        },
                        {
                            id: 'q-email',
                            message: 'Finally. what is your email?',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: 'q-submit'
                        },
                        {
                            id: 'q-submit',
                            message: 'Do you wish to submit?',
                            trigger: 'submit'
                        },
                        {
                            id: 'submit',
                            options: [
                                { value: 'y', label: 'Yes', trigger: 'end-message' },
                                { value: 'n', label: 'No', trigger: 'no-submit' },
                            ]
                        },
                        {
                            id: 'no-submit',
                            message: 'Your information was not submitted.',
                            end: true,
                        },
                        {
                            id: 'end-message',
                            component: <Post />,
                            asMessage: true,
                            end: true,
                        },
                    ]}
                    {...config}
                />
            </ThemeProvider>
        );
    }

}

export default SimpleForm;