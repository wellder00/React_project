import './App.scss';

import {Header, HeroBlock, CurrentNeeds, HowYouCanHelp, SomeStats} from "./components";

function App() {
   return (
    <div>
      <Header/> 
      <HeroBlock/> 
      <CurrentNeeds/>       
      <HowYouCanHelp/>
      <SomeStats/>       
    </div>
  );
}

export default App;
