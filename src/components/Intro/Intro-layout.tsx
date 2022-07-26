import "./Intro-layout.scss"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__inner">
                <h1 className="intro__title">Test assignment for front-end developer</h1>
                <h2 className="intro__suptitle">
                    What defines a good front-end developer is one
                    that has skilled knowledge of HTML, CSS, JS with
                    a vast understanding of User design thinking as
                    they'll be building web interfaces with accessibility
                    in mind. They should also be excited to learn, as the
                    world of Front-End Development keeps evolving.
                </h2>

                <button className="intro__button">Sign up</button>
            </div>
        </div>
    )
}

export default Intro