import React, { useState } from "react";

class FComponent {
    props = {}

    states = {}
    setStates = {}

    useHooks() {
    }

    renderInternal(props) {
        this.props = props;
        this.useHooks();
        return this.render(props);
    }

    useState(key, ...args) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const state = useState(...args);
        this.states[key] = state[0];
        this.setStates[key] = state[1];
        return state;
    }        

    render(props) {
        throw new Error('You have to implement the method render.');
    }

    Component = () => {
        return this.renderInternal.bind(this);
    }
}

export const make = (_class) => {
    return props => {
        const componentRef = React.useRef();
        if (!componentRef.current) {
            componentRef.current = new _class().Component();
        }
        const Component = componentRef.current;
        return <Component {...props} />
    };
}

export default FComponent;