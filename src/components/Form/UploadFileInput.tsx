import { ChangeEvent, FC, useRef, useState } from "react"
import { isPhotoValid } from "../../core/utils/validator"

interface Props {
    onUploadFile: (photo: File) => void
    photoFile: File | null
}

const UploadFileInput: FC<Props> = ({ onUploadFile, photoFile }) => {

    const [touched, setTouched] = useState(false)

    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const handleUploadFile = () => {
        hiddenFileInput.current?.click()
    }

    const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            const file = event.target.files[0]
            if (isPhotoValid(file)) {
                onUploadFile(file)
            }
        }
    }
    return (
        <div className="form__file-wrapper"
            onBlur={() => setTouched(true)}
        >
            <label
                className="form__file"
            >
                <input
                    type="file"
                    id="input-file"
                    className="form__file-input"
                    ref={hiddenFileInput}
                    onChange={uploadFile}
                    accept="image/jpeg"

                />
                <button
                
                    className={`form__file-button ${touched ? (photoFile ? "" : "invalid") : ""}`}
                    onClick={handleUploadFile}
                >
                    Upload
                </button>

                <span className={`form__file-title  ${touched ? (photoFile ? "" : "invalid") : ""}`}>
                    {
                        photoFile ? photoFile.name : "Upload your photo"
                    }</span>
            </label>
            {
                touched ? (photoFile ? "" : <div className="form__error">Required</div>) : ""
            }

        </div>
    )
}

export default UploadFileInput