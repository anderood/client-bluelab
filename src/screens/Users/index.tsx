import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Search } from "../Users/styles";

interface UsersProps{
    id: string;
    first_name: string;
    last_name: string;
    cpf: string;
    phone: string;
}


export function Users(){


    const [ userList, setUserList ] = useState<UsersProps[]>([])
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ cpf, setCpf ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ search, setSearch ] = useState("")

    useEffect(() => {
        api.get("/users").then(response => response.data).then((data) => setUserList(data))
    }, [search])

    function handleUpdateUser(id: string){
        
        const findUser = userList.find(user => user.id === id);

        const data = {
            first_name: firstName ? firstName : findUser?.first_name,
            last_name: lastName ? lastName : findUser?.last_name,
            cpf: cpf ? cpf : findUser?.cpf,
            phone: phone ? phone : findUser?.phone
        }

        api.put(`/user/${id}`, data)
            .then(response => alert(response.data.msg))
            .catch(response => alert(response.response.data.msg))
    }

    function handDeleteAccount(id: string){
        

        api.delete(`/user/${id}`)
            .then(response => console.log(response))
            .catch(response => alert(response.response.data.msg))
    }

    function handleSearch(){
        
      
        api.get("/search", { params: {cpf: search}} )
         .then(response => response.data).then((data) => setUserList(data.dataUser))
         .catch(response => alert(response.response.data.msg))
       
    }

    return(
        <Container>
            <div>
                <h1>Lista de Usuários</h1>
                <Search>
                    <input type="text" placeholder="Pesquise por CPF" onChange={(event) => setSearch(event.target.value)}/>
                    <button onClick={handleSearch}>Pesquisar</button>
                </Search>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        <input 
                                            type="text" 
                                            defaultValue={user.first_name ? user.first_name : firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            defaultValue={user.last_name}
                                            onChange={(event) => setLastName(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            defaultValue={user.cpf}
                                            onChange={(event) => setCpf(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            defaultValue={user.phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                        />
                                    </td>
                                   <td>
                                        <button onClick={()=> handleUpdateUser(user.id)}>Salvar</button>
                                        <button onClick={()=> handDeleteAccount(user.id)}>Deletar</button>
                                   </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </Container>
    );
}