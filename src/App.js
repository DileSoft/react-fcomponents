import { useState } from 'react';
import ExampleClass from './ExampleClass';

function App() {
  const [useless, setUseless] = useState(0);
  return (
    <div>
      <ExampleClass text="Hello World" />
      <ExampleClass text="Hello World2" />
      <button onClick={() => setUseless(useless + 1)}>Useless {useless}</button>
    </div>
  );
}

export default App;
