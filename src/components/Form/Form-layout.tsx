import { ChangeEvent, useEffect, useState } from "react"
import "./Form-layout.scss"

import { isValidForm } from "../../core/utils/validator"
import usersAPI from "../../core/ api/APIUsers";
import successPic from "../../assets/success-image.svg"

import Input from "./Input"
import RadioButton from "./RadioButton"
import { Errors, FormValues } from "../../core/models/form.models"
import { Position } from "../../core/models/users.model";
import UploadFileInput from "./UploadFileInput";
import SuccessPortal from "../SuccessPortal/SuccessPortal";
import Preloader from "../Preloader/Preloader";

const Form = () => {
    const [answerRequest, setAnswerRequest] = useState("")
    const [positions, setPositions] = useState<Position[]>([])
    const [formState, setFormState] = useState<FormValues>({
        name: "",
        email: "",
        phone: "",
        photo: null,
        position_id: ""
    })
    const [errors, setErrors] = useState<Errors>({
        name: true,
        email: true,
        phone: true,
        position_id: true,
        photo: true
    })
    const [showModals, setShowModals] = useState({
        loader: false,
        successed: false,
    })

    useEffect(() => {
        usersAPI.getPositions().then(response => {
            setPositions(response)
        })
    }, [])



    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "name":
                setFormState({ ...formState, name: event.target.value })
                break
            case "email":
                setFormState({ ...formState, email: event.target.value })
                break
            case "phone":
                setFormState({ ...formState, phone: event.target.value })
                break
        }
    }

    const onHandleErrors = (error: boolean, value: string) => {
        setErrors({ ...errors, [value]: error })
    }

    const onChangeValuePosition = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, position_id: event.target.value })
        setErrors({ ...errors, position_id: false })
    }

    const onUploadFile = (photo: File) => {
        setFormState({ ...formState, photo })
        setErrors({ ...errors, photo: false })
    }

    const onSubmitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const formData = new FormData()
        setShowModals({ ...showModals, loader: true })

        Object.keys(formState).forEach(key => {
            const value = formState[key as keyof FormValues]
            if (value) {
                formData.append(key, value)
            }
        })

        usersAPI.postUser(formData).then((response) => {
            setShowModals({ ...showModals, loader: false })
            if (response.success) {
                setAnswerRequest(response.message)
                setFormState({
                    name: "",
                    phone: "",
                    email: "",
                    photo: null,
                    position_id: ""
                })
                setShowModals({ ...showModals, successed: true })
                setTimeout(() => setShowModals({ ...showModals, successed: false }), 3500)
            }
        })

    }

    return (
        <div className="form">
            <div className="form__inner">
                {
                    showModals.loader &&
                    <Preloader />
                }
                <h1 className="form__title">Working with POST request</h1>
                <div className="form__state">
                    <div className="form__input-wrapper">
                        <Input
                            id="input-name"
                            placeholder="Your name"
                            name="name" value={formState.name}
                            onChange={onChangeHandler}
                            handleErrors={onHandleErrors}
                        />
                        <Input
                            id="input-email"
                            placeholder="Email"
                            name="email" value={formState.email}
                            onChange={onChangeHandler}
                            handleErrors={onHandleErrors}
                        />
                        <Input
                            id="input-phone"
                            placeholder="Phone"
                            name="phone"
                            value={formState.phone}
                            onChange={onChangeHandler}
                            handleErrors={onHandleErrors}
                        />
                        <small className="form__notation">
                            +38 (XXX) XXX - XX - XX
                        </small>

                    </div>

                    <div className="form__check-wrapper" onChange={onChangeValuePosition}>

                        <h2 className="form__suptitle">Select your position</h2>
                        {
                            positions.map((position) => {
                                return <RadioButton
                                    key={position.id}
                                    value={position.id}
                                    id={position.id}
                                    position={position.name}
                                />
                            })
                        }
                    </div>

                    <UploadFileInput
                        onUploadFile={onUploadFile}
                        photoFile={formState.photo}
                    />

                    <button
                        className="form__submit"
                        disabled={isValidForm(errors)}
                        onClick={onSubmitForm}

                    >
                        Sign up
                    </button>
                </div >


                {

                    showModals.successed &&
                    <SuccessPortal>
                        <div>
                            <div className="portal__img">
                                <img src={successPic} alt="img" />
                            </div>
                            <h1 className="portal__answer-request">{answerRequest}</h1>
                        </div>
                    </SuccessPortal>
                }

                {

                }

            </div >
        </div>
    )
}

export default Form