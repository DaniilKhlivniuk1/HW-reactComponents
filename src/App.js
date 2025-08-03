import './App.css';
import {Greetings} from './Components/Greetings';
import {Message} from './Components/Message';
import {Action} from './Components/Button';

function App() {
  return (
    <div className="App">
     <Greetings name="Даня" />
     <Message text="На вулиці дуже жарко" />
     <Action onClick={() => {
      console.log("Ви натиснули кнопку!");
     }}/>
    </div>
  );
}

export default App;
