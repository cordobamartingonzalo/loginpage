import React from 'react';

import './App.css';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

function Componenteuno () {
    return(
        <Form className="login-form">
        
            <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email"></Input>
            </FormGroup>
            <FormGroup className="login-box">
            <Label>Contraseña</Label>
            <Input type="password" placeholder="Contraseña"></Input>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Iniciar Sesion</Button>
            <div className="text-center pt-3"> O continue con su red social</div>
            <FacebookLoginButton className="mt-3 mb-3">Inicia sesion con Facebook</FacebookLoginButton>
            <div className="text-center">
            <a href="/sign-up">Registrate</a>
            <span className="p-2">|</span>
            <a href="/sign-up">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="text-linkedin">
                <a href="https://www.linkedin.com/in/martingonzalocordoba21/">LinkedIn</a>
            </div>

         
        </Form>
    );
}

export default Componenteuno;