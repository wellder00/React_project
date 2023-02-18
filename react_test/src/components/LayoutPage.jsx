import HeroBlock from './HeroBlock';
import CurrentNeeds from './CurrentNeeds';
import HowYouCanHelp from './HowYouCanHelp';
import Support from './Support';
import SomeStats from './SomeStats';
import SuccessfulStories from './SuccessfulStories';

function LayoutPage() {
   // скролл вверх при переключении страницы
   window.scrollTo({
    top: 0,
    left: 0
  });
 
  return (
    <>
      <HeroBlock />
      <CurrentNeeds />
      <HowYouCanHelp />
      <Support />
      <SomeStats />
      <SuccessfulStories />
    </>
  );
}

export default LayoutPage;
