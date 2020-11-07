import React from "react";
import ReactDOM from 'react-dom';
import Graffiti from "./Graffiti";
import './Wall.scss';
import ToolIcon from '../Images/paint-palette.svg';
import TrashIcon from '../Images/bin.svg';
import ColorIcon from '../Images/paint-bucket.svg';
import SaveIcon from '../Images/floppy-disk.svg';
import BrushIcon from '../Images/paintbrush.svg';

class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className='drawwall'>
                <div id="canvas">
                    <Graffiti />
                </div>
                <div id="draw-tools">
                    <div class="tool-wrapper">
                        <div class="tool-menu-btn">
                            <img src={ToolIcon} />
                        </div>
                        <div class="tool-nav">
                            <div class="tool-nav-btn">
                                <img src={TrashIcon} />
                            </div>
                            <div class="tool-nav-btn save">
                                <img src={SaveIcon} />
                            </div>
                            <div class="tool-nav-btn">
                                <img src={BrushIcon} />
                            </div>
                            <div class="tool-nav-btn">
                                <img src={ColorIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wall;