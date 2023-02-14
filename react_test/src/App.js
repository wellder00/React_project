import './App.scss';


import {
  Header,
  HeroBlock,
  CurrentNeeds,
  HowYouCanHelp,
  SomeStats,
  Support,
  SuccessfulStories,
  Footer,  
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
      <Footer />
    </div>
  );
}

export default App;

