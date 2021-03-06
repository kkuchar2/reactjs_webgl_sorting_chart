import React, {Component} from "react";

import Text from "components/text/Text.jsx";

import "./SubmitButton.scss"

class SubmitButton extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.getAdditionalClassName = this.getAdditionalClassName.bind(this);

        this.state = { text: "Submit" }
    }

    componentDidMount() {
        if (this.props.text !== undefined) {
            this.setState({text: this.props.text});
        }
    }

    onClick() {
        if (this.props.disabled) return;
        this.props.onClick();
    }

    getAdditionalClassName() {
        if (this.props.disabled) {
            return "disabled";
        }
        else {
            return "enabled";
        }
    }

    render() {
        return (
            <button
                className={["SubmitButton", this.props.className, this.getAdditionalClassName()].join(" ")}
                type={"submit"}
                onClick={this.onClick}>
                <div className={"content"}>
                    <Text
                        visible={!this.props.processing}
                        text={this.state.text}
                        onClick={this.state.onTextClick}
                    >
                    </Text>
                </div>
            </button>
        )
    }
}

export default SubmitButton;