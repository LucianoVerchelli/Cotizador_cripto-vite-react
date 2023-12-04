import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Error from "./Error";

import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
    background-color:#9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size:20px;
    border-radius: 20px;
    transition: background-color, .5s ease;
    margin-top:30px;

    &:hover{
       opacity:0.7; 
       cursor: pointer;
    }

`

const Formulario = ({setMonedas})=> {
    const [criptos,setCriptos] = useState([])
    const [error,setError] = useState(false)
    //No es necesario que lleve el mismo nombre ya que retorna por indice, en este caso "moneda" proviene de "state"
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige la criptomoneda', criptos)
    

    useEffect(()=> {
        const consultarApi = async()=> {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id:cripto.CoinInfo.Name,
                    nombre:cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarApi()
    },[])
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if ([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return ( 
        <>
        {error && <Error>Todos los campos son obligatorios</Error>}

        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit type="submit" 
                         value="cotizar"/>
        </form>
    </>
     )
}

export default Formulario;