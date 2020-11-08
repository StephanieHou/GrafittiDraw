import React from "react";
import ReactDOM from 'react-dom';
import './Wall.scss';

class Graffiti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevX: 0,
            currX: 0,
            prevY: 0,
            currY: 0,
            flag: false,
            dotFlag: false,
            color: this.props.color,
            size: this.props.size
        }
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            color: newProps.color,
            size: newProps.size
        });
    }

    componentDidMount() {
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        canvas.addEventListener("mousemove", this.handleMouseMove);

        canvas.addEventListener("mousedown", this.handleMouseDown);

        canvas.addEventListener("mouseup", this.handleMouseUp);

        canvas.addEventListener("mouseout", this.handleMouseOut);
    }

    componentWillUnmount() {
        var canvas = this.refs.canvas;

        canvas.removeEventListener("mousemove", this.handleMouseMove);

        canvas.removeEventListener("mousedown", this.handleMouseDown);

        canvas.removeEventListener("mouseup", this.handleMouseUp);

        canvas.removeEventListener("mouseout", this.handleMouseOut);
    }

    handleMouseDown = (e) => {
        var currX = this.state.currX;
        var currY = this.state.currY;
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext("2d");
        var size = this.state.size;
        var color = this.state.color;
        var flag = true;
        var dotFlag = true;

        var newPrevX = currX;
        var newPrevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        if (dotFlag) {

            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(currX, currY, size/2 , 0, 2 * Math.PI, false);
            ctx.closePath();
            dotFlag = false;
        }

        this.setState({
            prevX: newPrevX,
            prevY: newPrevY,
            currX: currX,
            currY: currY,
            dotFlag: dotFlag,
            flag: flag
        });
    }

    handleMouseUp = (e) => {
        this.setState({
            flag: false
        });
    }

    handleMouseMove = (e) => {
        var currX = this.state.currX;
        var currY = this.state.currY;
        var canvas = this.refs.canvas;
        var flag = this.state.flag;

        if (flag) {
            var newPrevX = currX;
            var newPrevY = currY;
            var newCurrX = e.clientX - canvas.offsetLeft;
            var newCurrY = e.clientY - canvas.offsetTop;
            this.handleDraw(canvas, newPrevX, newPrevY, newCurrX, newCurrY);

            this.setState({
                prevX: newPrevX,
                prevY: newPrevY,
                currX: newCurrX,
                currY: newCurrY
            });
        }
    }

    handleMouseOut = (e) => {
        this.setState({
            flag: false
        });
    }

    handleDraw = (canvas, prevX, prevY, currX, currY) => {
        var ctx = canvas.getContext("2d");
        var color = this.state.color;
        var size = this.state.size;

        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.closePath();
        ctx.stroke();
    }

    render() {
        const { prevX, prevY, currX, currY, color, flag } = this.state;
        return (
            <div className='canvas'>
                <canvas ref="canvas" id="draw-canvas" />
            </div>
        )
    }
}

export default Graffiti;