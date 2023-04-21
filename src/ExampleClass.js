import { useEffect, useState } from "react";
// import FComponent, { make } from "react-fcomponents";
import FComponent, { make } from './FComponent';

class ExampleClass extends FComponent {
    useTest = (...args) => {
        useEffect(() => {
            console.log('mounted');
        }, []);
        return useState(...args);
    }

    useHooks() {
        this.useTest();
        this.useState('test', 0);
    }

    render() {
        return <div>{this.props.text}<button onClick={
            () => {
                this.setStates.test(this.states.test + 1)
            }
        }>{this.states.test}</button></div>;
    }

}

export default make(ExampleClass);