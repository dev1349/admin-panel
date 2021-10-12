import React from 'react'

const InputField = ({
    type,
    typeOfInput,
    name,
    label,
    id,
    value,
    onChange,
}) => {
    const onChangeFieldValueHandler = evt => {
        onChange({
            [name]: evt.target.value,
        })
    }

    switch (type) {
        case 'input':
            if (typeOfInput === 'text') {
                return (
                    <ul className="addCategory--inputField">
                        <li className="addCategory--inputFieldLabel">
                            <label
                                htmlFor={id}
                                className={'addCategory--label'}
                            >
                                {label}
                            </label>
                        </li>
                        <li className="addCategory--inputFieldInput">
                            <input
                                type={typeOfInput}
                                name={name}
                                id={id}
                                className={'addCategory--input'}
                                value={value}
                                onChange={onChangeFieldValueHandler}
                            />
                        </li>
                    </ul>
                )
            }
            break
        case 'textarea':
            return (
                <ul className="addCategory--inputField">
                    <li className="addCategory--inputFieldLabel">
                        <label htmlFor={id} className={'addCategory--label'}>
                            {label}
                        </label>
                    </li>
                    <li className="addCategory--inputFieldInput">
                        <textarea
                            name={name}
                            id={id}
                            className={'addCategory--textarea'}
                            value={value}
                            onChange={onChangeFieldValueHandler}
                        />
                    </li>
                </ul>
            )
        default:
            return null
    }
}

export default InputField
