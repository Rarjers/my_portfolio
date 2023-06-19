import '../style/Buttons.css'

const Button = ({link, className, text}) => {
    const newClassName = className ? `${className}` : ``;

    return (
        <div>
            <a className={`blackButtons ${newClassName}`} href={link}>{text}</a>
        </div>
    );
}

export default Button;