import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
    }

    static defaultProp = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    }

    handleIndexClick = (e) =>{
        this.setState({
            active: +e.target.dataset.index
        })
    }

    render () {
        const { active } = this.state
        const { images } = this.props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero"></img>
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img 
                        key={photo}
                        onClick={this.handleIndexClick}
                        data-index={index}
                        src={photo}
                        className={index === active ? "active": ""}
                        alt="animal thumbnail"></img>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel