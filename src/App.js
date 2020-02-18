import React from 'react';
import Componenteuno from './Componenteuno'

import './App.css';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';


function App() {
  return (
    <Form className="title">
    <h1><span className="font-weight-bold">mywebsite</span>.com</h1>
    

      <Componenteuno />

    </Form>
          );
        }
        
        export default App;
