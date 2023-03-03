import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { io } from "socket.io-client";


interface dataUser{
    id: string;
    first_name: string;
    last_name: string;
    message: string;
    created_at: string;
}

export function Chat(){

    const [ dataUser, setDataUser ] = useState<dataUser[]>([]);
    const [ selectValue, setSelectValue ] = useState('');
    const [ selectUser, setSelectUser ] = useState('all');
    const [ isAcess, setIsAcess ] = useState(false);
    const [ textMsg, setTextMsg ] = useState('');
    const [ historyMessage, setHistoryMessage ] = useState([]);

    const socket = io('http://localhost:3333/');

    

    useEffect(()=> {
        api.get("/users").then(response => setDataUser(response.data));
    }, [])

    useEffect(()=> {

        socket.on('chat-private', (data) => {
            setHistoryMessage(data)
        })

    }, [historyMessage])

    

    function handleClick(event: any){

        event.preventDefault();
        selectValue != null ? setIsAcess(true) : setIsAcess(false)
    }

    function handleSendMsg(event: any){

        event.preventDefault();

        const data = {
            id: selectUser,
            room: ['chat-private'],
            message: textMsg
        }
        
        //Evento q envia as mensagem para o servidor
        socket.emit('chat-private', data);
        setTextMsg('');
        
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
                              if(item.id !== selectValue){
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
                      {

                          historyMessage.map(item => {
                              const options = {
                                year: 'numeric', month: 'numeric', day: 'numeric',
                                hour: 'numeric', minute: 'numeric', second: 'numeric',
                                hour12: false,
                                timeZone: 'America/Sao_Paulo'
                              }

                              return(
                                <li> 
                                    <span>{ new Intl.DateTimeFormat('pt-BR', options ).format(new Date(item.created_at))} - </span> 
                                    <span>{item.first_name}: </span>
                                        {item.message}
                                </li>
                              );
                          })
                      }
                    </ul>
                    <input type="text" value={textMsg} placeholder="Digite a sua mensagem..." onChange={(event) => setTextMsg(event.target.value)}/>
                    <button onClick={(event) => handleSendMsg(event)}>Enviar</button>
                </form>
            </div>
        )
    );
}