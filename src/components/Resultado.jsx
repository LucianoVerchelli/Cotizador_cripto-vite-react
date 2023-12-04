import styled from "@emotion/styled";



const Contenedor = styled.div`
display:flex;
align-items: flex-start;
justify-content: space-around;
background-color: #42719d;
margin-top:40px;
border-radius: 10px;
color: #fff;
padding:10px;

@media(max-width:992px){
    flex-direction:column;
    text-align: center;
}

`

const Precio = styled.p`
font-size: 16px;

`

const Parrafo = styled.p`
margin-top: 10px;
font-size: 13px;
padding:4px;

`
const Span = styled.span`
    font-weight:bold;
    text-transform: uppercase;
`
const Imagen = styled.img`
    max-width:150px;
    align-self: center;
    
    
    
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
    return ( 
        
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
            <div>
                <Precio>El precio es de: <Span>{PRICE}</Span></Precio>
                <Parrafo>Precio más alto del día: <Span>{HIGHDAY}</Span></Parrafo>
                <Parrafo>Precio más bajo del día: <Span>{LOWDAY}</Span></Parrafo>
                <Parrafo>Variación ultimas 24horas: <Span> % {CHANGEPCT24HOUR}</Span></Parrafo>
                <Parrafo>Última actualización: <Span>{LASTUPDATE}</Span></Parrafo>
                <Parrafo></Parrafo>
            </div>
            
        </Contenedor>

     )
}

export default Resultado;