import { ThemeContext } from "./context/ThemeContext"

const Banner = (props) => {    
    return (
        <ThemeContext.Consumer>
            {(value) => (
                    <p className={`text-center ${value.darkMode ? "text-white bg-dark" : ""}`}>{props.children}</p>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default Banner