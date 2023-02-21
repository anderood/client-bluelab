import React from "react";

import { Container } from "../Users/styles"

export function Users(){
    return(
        <Container>
            <h2>Usuarios Cadastrados</h2>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                </tr>
                <tr>
                    <td>Anderson</td>
                    <td>Santos</td>
                    <td>319.297.768-02</td>
                    <td>(11)95339-7733</td>
                    <td><a href="#">Editar</a></td>
                </tr>
                <tr>
                    <td>Denise</td>
                    <td>Santos</td>
                    <td>354.334.718-70</td>
                    <td>(11)95339-7733</td>
                    <td><a href="#">Editar</a></td>
                </tr>
            </table>

        </Container>
    );
}