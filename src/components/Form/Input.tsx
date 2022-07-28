import { ChangeEvent, FC, memo, useState } from "react"
import  validator from "../../core/utils/validator"


interface Props {
    id: string
    placeholder: string
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleErrors: (value: boolean, name: string) => void
}

const Input: FC<Props> = ({ id, placeholder, name, value, onChange, handleErrors}) => {

    const [error, setError] = useState<string | boolean>("")

    return (
        <div className="form__row">
 
                {
                    error ? <div className="form__error">{error}</div> : null
                }
                <input
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    id={id}
                    className={`form__input ${error ? "invalid" : ""}`}
                    value={value}
                    onChange={onChange}
                    onBlur={() => {
                        const error = validator(value, name)
                        if(typeof error === "boolean") {
                            handleErrors(error, name)
                        } else {
                            handleErrors(true, name)
                        }
                        setError(error as string | boolean)

                    }}
                />
                           <label className={`form__labale ${error ? "invalid-label" : ""}`}>
                            {placeholder}
                            </label>
        </div>
    )
}

export default Input