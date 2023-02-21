import React from "react";

import { Container, Form } from "../Register/styles";

export function Register(){
    return(
        <Container>
            <Form >

                <div>
                    <h1>Cadastro de Usuarios</h1>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Sobrenome</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">CPF</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Telefone</label>
                        <input type="text" />
                    </div>
                    <button>Cadastrar</button>
                </div>

            </Form>
        </Container>
        
    );
}