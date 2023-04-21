import React, { useState } from "react";

class FComponent {
    props = {}

    states = {}
    setStates = {}

    useHooks() {
    }

    renderInternal(props) {
        this.useHooks();
        this.props = props;
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

    Component() {
        return this.renderInternal.bind(this);
    }
}

export const make = (_class) => {
    return props => {
        const classRef = React.useRef();
        if (!classRef.current) {
            classRef.current = new _class();
        }
        const obj = classRef.current;
        const Component = (obj.Component.bind(obj))()
        return <Component {...props} />
    };
}

export default FComponent;