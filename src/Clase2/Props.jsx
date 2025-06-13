//const Props = (objeto) => { //prop
const Props = ({texto1, texto2, edad}) => { //Desestructuracion

    return (
        <>
            {/* <h>{texto1.toUpperCase()} - {texto2} - {edad + 10}</h> */}
            <h>{texto1.toUpperCase()} - {texto2} - {edad + 10}</h>
        </>
    )
}

export default Props;