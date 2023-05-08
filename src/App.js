import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <div className='display'>{counter}</div>
      <Button value="add 1" fn={add}/>
      <Button value="reset" fn={reset} />
    </div>
  );
}

export default App;
