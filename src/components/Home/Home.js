import React from "react";
import SprayPaint from '../Images/spray-paint.png';
import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className='homepage'>
                <div className="home-bg">
                    <img src={SprayPaint} />
                    <img src={SprayPaint} />
                    <img src={SprayPaint} />
                    <img src={SprayPaint} />
                </div>
                <div className="home-title">
                    <div>
                        <h1>
                            <span className="title-part ch1">D</span>
                            <span className="title-part ch2">r</span>
                            <span className="title-part ch3">a</span>
                            <span className="title-part ch4">f</span>
                            <span className="title-part ch5">f</span>
                            <span className="title-part ch6">i</span>
                            <span className="title-part ch7">t</span>
                            <span className="title-part ch8">i</span>
                        </h1>
                        <p class="home-subtitle">Your Personal Creativity Wall</p>
                        <a href="/drawwall">
                            <p>Start Drawing</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;