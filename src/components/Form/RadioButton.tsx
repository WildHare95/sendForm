import { LegacyRef } from "react"
import { FC } from "react"

interface Props {
      value: string
      position: string
      id: string
      defaultChecked?: LegacyRef<HTMLInputElement>
}

const RadioButton: FC<Props> = ({position,value,id, defaultChecked}) => {
    return(
        <div className="form__radio">
        <input
            className="form__radio-input"
            id={id}
            type="radio"
            value={value}
            name="position"
            ref={defaultChecked}
        />
        <label className="form__radio-label">
            {position}
        </label>
    </div>
    )
}

export default RadioButton