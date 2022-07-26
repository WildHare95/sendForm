import "./Form-layout.scss"

const Form = () => {
    return (
        <div className="form">
            <form action="/" method="post" className="form__inner">
                <h1 className="form__title">Working with POST request</h1>

                <div className="form__row">
                    <label
                        htmlFor="input-name"
                        className="form__labale"
                    >
                        <input
                            type="text" placeholder="Your name"
                            id="input-name"
                            className="form__input"
                        />

                    </label>
                </div>

                <div className="form__row">
                    <label
                        htmlFor="input-email"
                        className="form__labale"
                    >
                        <input
                            type="text" placeholder="Email"
                            id="input-email"
                            className="form__input"
                        />

                    </label>
                </div>

                <div className="form__row">
                    <label
                        htmlFor="input-phone"
                        className="form__label"
                    >
                        <input
                            type="text" placeholder="Phone"
                            id="input-phone"
                            className="form__input"
                        />
                        <small className="form__notation">
                            +38 (XXX) XXX - XX - XX
                        </small>
                    </label>
                </div>



                <div className="form__check-wrapper">

                    <h2 className="form__suptitle">Select your position</h2>

                    <div className="form__radio">
                        <input
                            className="form__radio-input"
                            id="frontend"
                            type="radio"
                            value="option1"
                            defaultChecked
                            name="position"
                        />
                        <label className="form__radio-label" htmlFor="frontend">
                            Frontend developer
                        </label>
                    </div>

                    <div className="form__radio">
                        <input
                            className="form__radio-input"
                            id="backend"
                            type="radio"
                            value="option2"
                            name="position"
                        />
                        <label className="form__radio-label" htmlFor="backend">
                            Backend developer
                        </label>
                    </div>

                    <div className="form__radio">
                        <input
                            className="form__radio-input"
                            id="designer"
                            type="radio"
                            value="option3"
                            name="position"
                        />
                        <label className="form__radio-label" htmlFor="designer">
                            Designer
                        </label>
                    </div>

                    <div className="form__radio">
                        <input
                            className="form__radio-input"
                            id="qa"
                            type="radio"
                            value="option4"
                            name="position"
                        />
                        <label className="form__radio-label" htmlFor="qa">
                            QA
                        </label>
                    </div>
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
                    disabled={true}>
                    Sign up
                </button>

            </form >
        </div >
    )
}

export default Form