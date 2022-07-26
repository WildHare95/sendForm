import { ChangeEvent, Dispatch, FC, SetStateAction } from "react"


interface Props {
    id: string
    placeholder: string
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ id, placeholder, name, value, onChange}) => {
    return (
        <div className="form__row">
            <label
                className="form__labale"
            >
                <input
                name={name}
                    type="text"
                    placeholder={placeholder}
                    id={id}
                    className="form__input"
                    value={value}
                    onChange={onChange}
                />

            </label>
        </div>
    )
}

export default Input