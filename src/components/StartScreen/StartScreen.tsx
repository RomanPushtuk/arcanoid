import React from "react";
import MainButton from "../MainButton";

import styles from "./InputName.module.scss"

const {startForm, label, input, buttonContainer} = styles

type InputNameProps = {
    onInputName: (userName: string) => void
}

function InputName({onInputName}: InputNameProps) {
    const [isDisabled, setButtonDisabled] = React.useState<boolean>(true)
    const [userName, setUsername] = React.useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;

        if(value) {
            setButtonDisabled(false)
            setUsername(value)
        } else {
            setButtonDisabled(true)
        }
    }

    const handleClick = () => {
        onInputName(userName)
    }

    return (
        <div className={startForm}>
            <label className={label} htmlFor="username">Введите ваш логин</label>
            <input className={input} onChange={handleChange} id="username" type="text"/>
            <div className={buttonContainer}>
                <MainButton onClick={handleClick} isDisabled={isDisabled}>Продолжить</MainButton>
            </div>
        </div>
    );
}

export default InputName