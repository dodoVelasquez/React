import { useState } from "react";
import CurrencyField from "./CurrencyField";

const Calculator = () => {
    const [value, setValue] = useState(0);
    const [divisa, setDivisa] = useState("");
    const cotizacion = 7.5;

    const handleUSDChange = (value) => {
        setValue(value);
        setDivisa("USD");
    }

    const handlePesoChange = (value) => {
        setValue(value);
        setDivisa("QUET");
    }

    const usdValue = divisa === "QUET" ? value / cotizacion : value;
    const quetValue = divisa === "USD" ? value * cotizacion : value;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h1>Calculadora Divisa</h1>
                    <CurrencyField value={usdValue} divisa={"USD"} input={handleUSDChange} />
                    <CurrencyField value={quetValue} divisa={"Quetzal"} input={handlePesoChange} />
                </div>
            </div>
        </div>
    )
}

export default Calculator;