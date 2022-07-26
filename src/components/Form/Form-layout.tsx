import { ChangeEvent, ReactEventHandler, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { debounce } from "../../core/utils/dobounce"
import validator, { Errors, ValidData } from "../../core/utils/validator"
import "./Form-layout.scss"
import Input from "./Input"
import RadioButton from "./RadioButton"

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [position, setPosition] = useState("")

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.defaultChecked = true
            setPosition(ref.current.value)
        }
    }, [])

    const debouncedChangeHandler = useMemo(() => {
        return debounce(700)
    }, [])

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            name: { value: string }
            email: { value: string }
            phone: { value: string }
        }

        const obj = {
            name: target.name.value,
            email: target.email.value,
            phone: target.phone.value,
            position: position
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "name":
                setName(event.target.value)
                break
            case "email":
                setEmail(event.target.value)
                break
            case "phone":
                setPhoneNumber(event.target.value)
                break
        }

        const obj = {
            name: name,
            email: email,
            phone: phoneNumber,
            position_id: 1
        }

        debouncedChangeHandler(() => {
            console.log(validator(obj))
            validator(obj)
        })
      
    }

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setPosition(event.target.value)
    }

    return (
        <div className="form">
            <form className="form__inner" onSubmit={submitForm}>
                <h1 className="form__title">Working with POST request</h1>

                <Input id="input-name" placeholder="Your name" name="name" value={name} onChange={onChange} />
                <Input id="input-email" placeholder="Email" name="email" value={email} onChange={onChange} />
                <Input id="input-phone" placeholder="Phone" name="phone" value={phoneNumber} onChange={onChange} />
                <small className="form__notation">
                    +38 (XXX) XXX - XX - XX
                </small>

                <div className="form__check-wrapper" onChange={onChangeValue}>

                    <h2 className="form__suptitle">Select your position</h2>

                    <RadioButton value="option1" id="frontend" position="Frontend developer" defaultChecked={ref} />
                    <RadioButton value="option2" id="backend" position="Backend developer" />
                    <RadioButton value="option3" id="designer" position="Designer" />
                    <RadioButton value="option4" id="qa" position="QA" />

                </div>

                <div className="form__file-wrapper">
                    <label
                        htmlFor="file-input"
                        className="form__file"
                    >
                        <input
                            type="file"
                            id="input-file"
                            className="form__file-input"
                        />
                        <button className="form__file-button">
                            Upload
                        </button>
                        <span className="form__file-title">Upload your photo</span>
                    </label>
                </div>

                <button
                    className="form__submit"
                    disabled={false}
                    onSubmit={(event) => submitForm(event)}
                >
                    Sign up
                </button>

            </form >
        </div >
    )
}

export default Form