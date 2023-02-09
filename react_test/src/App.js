import './App.scss';

import {Header, HeroBlock, CurrentNeeds, HowYouCanHelp, SomeStats, Support} from "./components";

function App() {
   return (
    <div>
      <Header/> 
      <HeroBlock/> 
      <CurrentNeeds/>       
      <HowYouCanHelp/>
      <Support/>  
      <SomeStats/>           
    </div>
  );
}

export default App;
