import './App.scss';


import {
  Header,
  HeroBlock,
  CurrentNeeds,
  HowYouCanHelp,
  SomeStats,
  Support,
  SuccessfulStories,
  
} from './components';


function App() {
  return (
    <div>      
      <Header />
      <HeroBlock />
      <CurrentNeeds />
      <HowYouCanHelp />
      <Support />
      <SomeStats />
      <SuccessfulStories />
    </div>
  );
}

export default App;

