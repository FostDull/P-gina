import { useState } from "react";

function Calculadora (){
    const [ingreso, setIngreso] = useState("");

    const agregarValor = (valor) => {
        setIngreso(ingreso + valor)
    }

    const validar = () =>{
        setIngreso(val(ingreso))
    }

    return(
        <></>
    )
}

export default Calculadora;