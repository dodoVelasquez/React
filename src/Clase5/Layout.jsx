const Layout = ({children, darkMode}) => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col p-3 ${darkMode ? "text-white bg-dark" : ""}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout