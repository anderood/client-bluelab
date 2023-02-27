import React from "react";


interface SelectProps{
    id: string;
    first_name: string;
}


export function Select({ id, first_name}: SelectProps ){
    return(

        <select>
            <option value="">Padrao</option>
            <option value={id}>{first_name}</option>
        </select>
    );
}