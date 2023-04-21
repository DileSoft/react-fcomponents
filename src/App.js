import { useState } from 'react';
import ExampleClass from './ExampleClass';

function App() {
  const [useless, setUseless] = useState(0);
  return (
    <div>
      <button onClick={() => setUseless(useless + 1)}>Useless</button>
      <ExampleClass text="Hello World" />
      <ExampleClass text="Hello World2" />
    </div>
  );
}

export default App;
