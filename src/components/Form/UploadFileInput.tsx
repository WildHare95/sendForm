import { ChangeEvent, FC, memo, useRef, useState } from "react"
import { isPhotoValid } from "../../core/utils/validator"

interface Props {
    onUploadFile: (photo: File) => void
    photoFile: File | null
}

const UploadFileInput: FC<Props> = memo(({ onUploadFile, photoFile }) => {

    const [touched, setTouched] = useState(false)

    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const handleUploadFile = () => {
        hiddenFileInput.current?.click()
    }

    const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
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
}, (prevProps, nextProps) => {
    return prevProps.photoFile === nextProps.photoFile
})

export default UploadFileInput