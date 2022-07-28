import { memo } from "react"
import { FC } from "react"

interface Props {
      value: string
      position: string
      id: string
}

const RadioButton: FC<Props> = memo(({position,value,id}) => {

    return(
        <div className="form__radio">
        <input
            className="form__radio-input"
            id={id}
            type="radio"
            value={value}
            name="position"
        />
        <label className="form__radio-label">
            {position}
        </label>
    </div>
    )
})

export default RadioButton