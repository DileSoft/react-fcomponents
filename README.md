# React-fcomponents

О пакете: https://habr.com/ru/articles/730766/

Use classes as functional React components.

Example of usage: 

```jsx
import { useEffect, useState } from "react";
import FComponent, { make } from "react-fcomponents";

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

    render(props) {
        return <div>{this.props.text}<button onClick={
            () => {
                this.setStates.test(this.states.test + 1)
            }
        }>{this.states.test}</button></div>;
    }

}

export default make(ExampleClass);
```

You must export `make(ExampleClass)`, not just ExampleClass.

In `render` you can write anything like in functional component. You can use props or this.props.

`useHooks` runs before render, you can add hooks to this.

`this.useState(<key>, <default value>)` - create state with name `key`. You can use `this.states.<key>` and `this.setStates.key` after it.