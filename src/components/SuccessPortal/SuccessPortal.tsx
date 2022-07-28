import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"
import "./SucceessPortal.scss"


interface Props {
    children: ReactNode,
}

const SuccessPortal: FC<Props> = ({ children }) => {
    return createPortal(
        <div className="portal">
            {children}
        </div>
        ,
        document.getElementById("modal-root")!
    )
}

export default SuccessPortal