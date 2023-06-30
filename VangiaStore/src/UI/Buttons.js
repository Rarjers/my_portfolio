import React from 'react';
import '../style/Buttons.css'

const Button = ({link, className, text, click}) => {
    const newClassName = className ? `${className}` : ``;

    return (
        <div>
            <a onClick={click} className={`blackButtons ${newClassName}`} href={link}>{text}</a>
        </div>
    );
}

export default Button;