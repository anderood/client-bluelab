import React from "react";

import { 
    Container, 
    Form, 
    Title, 
    FormContainer, 
    ContainerName, 
    ContainerSobrenome, 
    ContainerCPF, 
    ContainerPhone,
    Label,
    Input,
    Button


} from "../Register/styles";

export function Register(){
    return(
        <Container>
            <Form action="">

                <FormContainer>
                <Title>Cadastro de Usuarios</Title>
                    <ContainerName>
                        <Label htmlFor="">Nome</Label>
                        <Input type="text" />
                    </ContainerName>

                    <ContainerSobrenome>
                        <Label htmlFor="">Sobrenome</Label>
                        <Input type="text" />
                    </ContainerSobrenome>

                    <ContainerCPF>
                        <Label htmlFor="">CPF</Label>
                        <Input type="text" />
                    </ContainerCPF>

                    <ContainerPhone>
                        <Label htmlFor="">Telefone</Label>
                        <Input type="text" />
                    </ContainerPhone>
                    <Button>Cadastrar</Button>
                </FormContainer>

            </Form>
        </Container>
        
    );
}