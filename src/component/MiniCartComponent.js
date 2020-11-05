import React from 'react';
import { component_details } from '../utils/CMSAdapter';



class MiniCartComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "this is a mini cart componet",
            component_type: "Mini Cart",

        }

    }
    render() {
        var mini_cart_details = component_details(this.props.minicart_text, this.state.component_type)
        let mini_cart_component_data = "";
        if (mini_cart_details != null) {
            mini_cart_component_data = mini_cart_details.standard_data;
        } console.clear();
        console.log("Standard data after translation :- " + JSON.stringify(mini_cart_component_data))

        return (
            <div>
                <h1>{this.state.msg}</h1>
                The mini cart details is :- {mini_cart_component_data.component_position}
                <button onClick={this.handlechage}></button>
            </div>
        )

    }

}

export default MiniCartComponent;

