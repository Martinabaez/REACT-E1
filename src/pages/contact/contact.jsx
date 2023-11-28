import React from "react";
import { Conteiner, ConteinerContact, Correo, InfoContact, InfoContactoDatos, InfoContactoTitulo, InfoMensaje, Mensaje, Nombre, Telefono } from "./style";
import icono from './icono-contacto.png';

export const Contact =() =>{
    return(
        <Conteiner>
            <h2>Envianos tu consulta</h2>
        <ConteinerContact>
            <InfoContact>
                <InfoContactoTitulo>
                    <img src={icono} alt="icono contacto" />
                    <h2>INFORMACIÓN DE CONTACTO </h2>
                </InfoContactoTitulo>

                <InfoContactoDatos>
                    <p>Pastelería&co.com</p>
                    <p>@Pasteleríayco.online</p>
                    <p>+54 2389987656</p>

                </InfoContactoDatos>
            </InfoContact>
            
            <InfoMensaje>
                
                <Nombre>
                    <label >Nombres</label>
                    <input
                    type='text'
                    placeholder='Name'
                    id='name'
                    name='name'
                    />
                </Nombre>
                <Telefono>
                    <label >Teléfono</label>
                    <input
                    type='number'
                    placeholder='Teléfono'
                    />
                </Telefono>
                <Correo>
                    <label >Email</label>
                    <input
                    type='email' 
                    placeholder='Email'
                    />
                </Correo>
                <Mensaje>
                <label >Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                </Mensaje>
                <button>Enviar</button>
            </InfoMensaje>
        </ConteinerContact>
        </Conteiner>
    )
}