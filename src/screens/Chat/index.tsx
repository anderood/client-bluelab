import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { io } from "socket.io-client";


interface dataUser{
    id: string;
    first_name: string;
    last_name: string;
}

export function Chat(){

    const [dataUser, setDataUser ] = useState<dataUser[]>([]);
    const [selectValue, setSelectValue ] = useState('');
    const [selectUser, setSelectUser ] = useState('all');
    const [ isAcess, setIsAcess ] = useState(false);
    const [ msg, setMsg ] = useState('');

    const socket = io('http://localhost:3333/');

    useEffect(()=> {
        api.get("/users").then(response => setDataUser(response.data));
    }, [])

    function handleClick(event: any){

        event.preventDefault();
        selectValue != null ? setIsAcess(true) : setIsAcess(false)
    }

    function handleSendMsg(event: any){

        event.preventDefault();

        if(selectUser != "all" ){
            
            socket.on("connect", () => {
                console.log(msg)
            })

        }else {
            alert('teste')
        }
    }

    return(
        !isAcess ?  
        (
            
            <div>
                <h1>Usuarios Cadastrados</h1>
                <form >
                    <select value={selectValue} onChange={(event) => setSelectValue(event.target.value)}> 
                        <option value="">Todos</option>
                        {
                            dataUser.map((item, idx) => (
                                <option
                                    key={idx}
                                    value={item.id}>
                                        {item.first_name}
                                    
                                </option>
                            ))
                        }
                    </select>
                    <button onClick={(event)=>handleClick(event)}>Entrar</button>
                </form>
            </div>
        )
        : 
        (
            <div>
                <div>
                    <p>Usuarios OnLine</p>
                   <select value={selectUser} onChange={(event) => setSelectUser(event.target.value)}>
                       <option value="all">Todos</option>
                      {
                          dataUser.map((item, idx) => {
                              if(item.id != selectValue){
                                  return(
                                    <option 
                                        key={idx}
                                        value={item.id}>{item.first_name}
                                    </option>
                                  );
                              }
                          })
                      }
                   </select>
                </div>
                <form action="">
                    <ul>
                        <li>Texto de Mensagem</li>
                    </ul>
                    <input type="text" value={msg} placeholder="Digite a sua mensagem..." onChange={(event) => setMsg(event.target.value)}/>
                    <button onClick={(event) => handleSendMsg(event)}>Enviar</button>
                </form>
            </div>
        )
    );
}