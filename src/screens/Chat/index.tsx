import React, { useEffect, useState } from "react";
import { api } from "../../services/api";


interface dataUser{
    id: string;
    first_name: string;
    last_name: string;
}

export function Chat(){

    const [dataUser, setDataUser ] = useState<dataUser[]>([]);
    const [selectValue, setSelectValue ] = useState('');
    const [ isAcess, setIsAcess ] = useState(false);

    useEffect(()=> {
        api.get("/users").then(response => setDataUser(response.data));
    }, [])

    function handleClick(event: any){

        event.preventDefault();
        selectValue != null ? setIsAcess(true) : setIsAcess(false)
    }

    return(
        console.log(dataUser),
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
                    <ul>
                        <li>usuario</li>
                    </ul>
                </div>
                <form action="">
                    <ul>
                        <li>Texto de Mensagem</li>
                    </ul>
                    <input type="text" placeholder="Digite a sua mensagem..."/>
                    <button>Enviar</button>
                </form>
            </div>
        )
    );
}