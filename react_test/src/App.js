import './App.scss';

import {Header, ButtonClass, ButtonFunc} from "./components";

function App() {
  const click = () => alert('123')
  return (
    <div>
      <Header />
      <ButtonClass onClick = {()=> alert('Hello world')} class="button button1">Кнопка</ButtonClass>
      <ButtonFunc onClick = {click} class="button button2">Кнопка2</ButtonFunc>
    </div>
  );
}

export default App;
