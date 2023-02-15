import { useState } from 'react';
import ButtonFunc from './ButtonFunc';
import CurrentSwiper from './CurrentSwiper';
import SuccessfulStoriesPopap from './SuccessfulStoriesPopap';

let description = `Знаєте, іноді наші волонтери стають справжніми чарівниками. Ці дівчата з 
деокупованої території Харківської області, що на фото, просто прийшли у
місцевий магазин і ... отримали від наших волонтерів чудові подаруночки з
нагоди новорічних свят. Їдучи повз магазин, волонтери побачили на вулиці дітей
і вирішили їх порадувати. Зупинили авто, зайшли слідом за дітьми до магазину і
на здивування всіх присутніх вручили дівчаткам подарункові коробочки, в яких
лежали солодощі із Польщі і Німеччини, канцтовари,іграшки з різних міст
України. Діти були дуже задоволені і довго дякували. Чарівниками бути просто!
Особливо, коли є справжні друзі! Ми щиро вдячні кожному, хто допомагає нашій
команді робити дітей з деокупації трохи щасливіше!`

function SuccessfulStories() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const setModalState = (state, index) => {
    setModalOpen(state);
    setSelectedItemIndex(index);
  };
  const stories = [{
    id: 227,
    title: 'Подарунки до дітей на новорічні свята',
    description: `Наш фонд зібрав подарунки до новорічних свят для дітей - солодощі із Польщі та
    Німеччини, канцтовари,іграшки з різних міст України.`,
    date: 'Nov 22, 2022',
    longDesc: description
  },
  {
    id: 228,
    title: 'Видачу корму для родин, що прихистили безпритульних тварин',
    description: `Ми регулярно закуповуємо корм і віддаємо його родинам, які дали прихисток
    безпритульним тваринам.`,
    date: 'Nov 22, 2022',
    longDesc: description
  },
  {
    id: 229,
    title: 'Допомога малобільним людям',
    description: `Наш команда разом із ГО “Фенікс” придбали ходунки для Тамари - літньої мешканки міста
    Куп’янську. Це місто та його жителі дуже постраждали внаслідок російської військової
    агресії.`,
    date: 'Nov 22, 2022',
    longDesc: description
  }];

  return (
    <div className="successful-stories">
      <div className="successful-stories-wrapper _container">
        <h2>Успішні історії</h2>
        <p>Зараз для нас є важливим закриття 4 найважливіших потреб:</p>

        <div className="card-block-stories-wrapper">
          {
            stories.map((item, index)=>{
              return(
                <div className="card-block-stories" key={item.id}>
                <div className="card-block-stories-img">
                  <CurrentSwiper
                    index={index}
                    handleClick={setModalState}
                  />
                </div>
                <div onClick={() => setModalState(true, index)}>
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                  <section>{item.date}</section>
                </div>
              </div>
              )
            })
          }
        </div>

        <div className="button-single-story">
          <ButtonFunc class="card-block__singl-button">
            Всі успішні історії
            <img className="card-block__singl-button-arrow" src="/assets/icons/3.svg" alt="arrow" />
          </ButtonFunc>
          
          <SuccessfulStoriesPopap
            selectedItem={stories[selectedItemIndex]}
            isModalOpen={isModalOpen}
            setModalState={setModalState}
          />
        </div>
      </div>
    </div>
  );
}

export default SuccessfulStories;
