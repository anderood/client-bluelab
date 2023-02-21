import React from "react";

import { Container, Button, } from "../Home/styles";

export function Home(){
    return(
        <Container>
            <Button >Cadastro</Button>
            <Button>Usuarios Cadastrados</Button>
            <Button>Acessar Chat</Button>

        </Container>
    );
}