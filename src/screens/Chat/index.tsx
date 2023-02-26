import React, { useState } from "react";
import { api } from "../../services/api";



export function Chat(){

    const [isEnabled, setIsEnabled ] = useState(false);
    const [dataUser, setDataUser ] = useState([]);
    const [cpf, setCPF ] = useState("");

    
    async function verifyUser(event: any){
        
        event.preventDefault();
        
        api.get(`/search?cpf=${cpf}`)
            .then(response => setDataUser(response.data))
            .catch(response => alert(response.response.data.msg))
       
        // if(result.status === 200){
        //     setDataUser(result.data);
        // }else {
        //     alert("Teste")
        // }

        dataUser.map(item => console.log(item))
    }

    return(
        
        
        <div>
            <form action="">
                <label htmlFor="">CPF</label>
                <input type="text" onChange={(event) => setCPF(event.target.value)} />
                <button onClick={(event) => verifyUser(event)}>Entrar</button>
            </form>
        </div>


        
    );
}