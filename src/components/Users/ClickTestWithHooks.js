import React from "react";
// import s from './Users.module.sass';


class ClickTestClass extends React.Component {

    state = {isClicked: true}

    textClick = () => {
        console.log('Text Double Clicked')
        this.setState({isClicked: false})
    }
    inputOutFocus = () => {
        console.log('input Out Focus')
        this.setState({isClicked: true})
    }

    // componentDidUpdate
    componentDidUpdate() {
        console.log('111');
    }

    render() {
        return (
            <>
                {this.state.isClicked &&
                    <p onDoubleClick={this.textClick}>Click Text</p>
                }

                {!this.state.isClicked &&
                    <input onMouseOut={this.inputOutFocus} type="text" />
                }
            </>
        );
    }

}

export default ClickTestClass;
