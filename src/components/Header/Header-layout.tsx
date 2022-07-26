import "./Header-layout.scss"
import logo from "../../assets/Logo.svg"


const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <a
                        className="header__logo-link"
                        href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>

                <div className="header__buttons">
                    <button className="header__buttons-users">Users</button>
                    <button className="header__buttons-sing-up">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header