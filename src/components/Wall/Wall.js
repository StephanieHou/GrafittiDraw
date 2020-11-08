import React from "react";
import ReactDOM from 'react-dom';
import { ChromePicker } from 'react-color';
import Graffiti from "./Graffiti";
import './Wall.scss';
import ToolIcon from '../Images/paint-palette.svg';
import TrashIcon from '../Images/bin.svg';
import ColorIcon from '../Images/paint-bucket.svg';
import SaveIcon from '../Images/floppy-disk.svg';
import BrushIcon from '../Images/paintbrush.svg';
import StencilIcon from '../Images/stencil.svg';

class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "rgba(0, 0, 0, 1)",
            size: 2,
            displayColor: false,
            displaySize: false,
            displayTools: true,
            displayStencil: false
        }
    };

    handleColorClick = () => {
        var displayColor = this.state.displayColor;

        this.setState({
            displayColor: !displayColor,
            displaySize: false
        });
    }

    handleColor = (color, event) => {
        var rgb = color.rgb;
        var rgbstring = "rgba(" + rgb['r'] + ", " + rgb['g'] + ", " + rgb['b'] + ", " + rgb['a'] + ")";
        this.setState({
            color: rgbstring
        });
    }

    handleSizeClick = () => {
        var displaySize = this.state.displaySize;

        this.setState({
            displaySize: !displaySize,
            displayColor: false
        });
    }

    handleSize = (e) => {
        this.setState({
            size: e.target.value
        });
    }

    handleStencilClick = () => {
        var displayStencil = this.state.displayStencil;

        this.setState({
            displayStencil: !displayStencil,
            displayColor: false
        });
    }

    handleStencil = (e) => {
        this.setState({
            Stencil: e.target.value
        });
    }

    handleClear = () => {
        var canvas = document.getElementById('draw-canvas');
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    handleSave = () => {
        var canvas = document.getElementById('draw-canvas');
        var downloadUrl = canvas.toDataURL();
        document.getElementById("downloadbtn").download = "image.png";
        document.getElementById("downloadbtn").href = downloadUrl.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    }

    handleTools = () => {
        var displayTools = this.state.displayTools;

        this.setState({
            displayTools: !displayTools
        });
    }

    render() {
        const { color, size, displayColor, displaySize, displayTools, displayStencil } = this.state;
        return (
            <div className='drawwall'>
                <div className="logo">
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
                    </div>
                </div>
                <div id="canvas-wrapper">
                    <Graffiti color={color} size={size} />
                </div>
                <div id="draw-tools">
                    <div class="tool-wrapper">
                        <div class="tool-menu-btn">
                            <p>Open/Close Menu</p>
                            <a href="#" id="toolbtn" onClick={this.handleTools}>
                                <img src={ToolIcon} />
                            </a>
                        </div>
                        <div className={displayTools ? "tool-nav display" : "tool-nav hide"}>
                            <div class="tool-nav-btn">
                                <p>Clear All</p>
                                <a href="#" id="clearbtn" onClick={this.handleClear}>
                                    <img src={TrashIcon} />
                                </a>
                            </div>
                            <div class="tool-nav-btn save">
                                <p>Save</p>
                                <a href="#" id="downloadbtn" onClick={this.handleSave}>
                                    <img src={SaveIcon} />
                                </a>
                            </div>
                            <div class="tool-nav-btn">
                                <p>Stencils</p>
                                <a href="#" id="stencilbtn" onClick={this.handleStencilClick}>
                                    <img src={StencilIcon} />
                                </a>
                                <div className={displayStencil ? "pickStencil display" : "pickStencil hide"} >
                                    <input type="input" id="stenciltext" value="Text" onClick={this.handleStencil} />
                                </div>
                            </div>
                            <div class="tool-nav-btn">
                                <p>Brush Size</p>
                                <a href="#" id="sizebtn" onClick={this.handleSizeClick}>
                                    <img src={BrushIcon} />
                                </a>
                                <div className={displaySize ? "pickSize display" : "pickSize hide"} >
                                    <input type="button" id="size5" value="5" onClick={this.handleSize} />
                                    <input type="button" id="size10" value="10" onClick={this.handleSize} />
                                    <input type="button" id="size15" value="15" onClick={this.handleSize} />
                                    <div>
                                        <input type="text" id="sizepicker" value={size} onChange={this.handleSize} />
                                        <span>px</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tool-nav-btn">
                                <p>Color</p>
                                <a href="#" id="colorbtn" onClick={this.handleColorClick}>
                                    <img src={ColorIcon} />
                                </a>
                                <div className={displayColor ? "pickColor display" : "pickColor hide"} >
                                    <ChromePicker
                                        color={this.state.color}
                                        onChange={this.handleColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wall;