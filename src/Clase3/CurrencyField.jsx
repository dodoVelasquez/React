const CurrencyField = ({divisa, value, input}) => {
    return (
        <div className="mb-3 shadow p-3 bg-body-tertiary rounded">
            <label className="form-label">{divisa}</label>
            <input type="text" className="form-control" value={value} onInput={(e) => input(e.target.value)} />
        </div>
    )
}

export default CurrencyField;