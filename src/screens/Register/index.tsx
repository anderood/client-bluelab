import React, { FormEvent, useState } from "react";
import { api } from "../../services/api";

import { Container, Form } from "../Register/styles";

export function Register(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cpf, setCPF] = useState("")
    const [phone, setPhone] = useState("")

    async function handleSubmit(event: FormEvent){

        event.preventDefault();
       
        const data = {
            first_name: firstName,
            last_name: lastName,
            cpf: cpf,
            phone: phone
        }

        await api.post("/register", data)
            .then(response => alert(response.data.msg))
            .catch(response => alert(response.response.data.msg))

    }

    return(
            <Form onSubmit={handleSubmit} >

                <div>
                    <h1>Cadastro de Usuarios</h1>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input 
                            type="text" 
                            value={firstName}
                            onChange={ (event) => setFirstName(event.target.value) }
                            />
                    </div>

                    <div >
                        <label htmlFor="">Sobrenome</label>
                        <input 
                            type="text" 
                            value={lastName}
                            onChange={ event => setLastName(event.target.value) }
                            />
                    </div>

                    <div>
                        <label htmlFor="">CPF</label>
                        <input 
                            type="text"
                            value={cpf}
                            onChange={ event => setCPF(event.target.value) }
                            />
                    </div>

                    <div>
                        <label htmlFor="">Telefone</label>
                        <input 
                            type="text" 
                            value={phone}
                            onChange={ event => setPhone(event.target.value) }
                            />
                    </div>
                    <button>Cadastrar</button>
                </div>

            </Form >
        
    );
}