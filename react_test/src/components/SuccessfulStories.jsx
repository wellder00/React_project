import { useState } from 'react';
import ButtonFunc from './ButtonFunc';
import CurrentSwiper1 from './CurrentSwiper1';
import CurrentSwiper2 from './CurrentSwiper2';
import CurrentSwiper3 from './CurrentSwiper3';
import SuccessfulStoriesPopap from './SuccessfulStoriesPopap';
import { Link } from 'react-router-dom';

function SuccessfulStories() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const setModalState = (state, index) => {
    setModalOpen(state);
    setSelectedItemIndex(index);
  };
  const stories = [
    {
      id: 227,
      title: 'Подарунки до дітей на новорічні свята',
      description: `Наш фонд зібрав подарунки до новорічних свят для дітей - солодощі із Польщі та
    Німеччини, канцтовари,іграшки з різних міст України.`,
      date: 'Nov 22, 2022',
      longDesc: `Знаєте, іноді наші волонтери стають справжніми чарівниками. Ці дівчата з 
    деокупованої території Харківської області, що на фото, просто прийшли у
    місцевий магазин і ... отримали від наших волонтерів чудові подаруночки з
    нагоди новорічних свят. Їдучи повз магазин, волонтери побачили на вулиці дітей
    і вирішили їх порадувати. Зупинили авто, зайшли слідом за дітьми до магазину і
    на здивування всіх присутніх вручили дівчаткам подарункові коробочки, в яких
    лежали солодощі із Польщі і Німеччини, канцтовари,іграшки з різних міст
    України. Діти були дуже задоволені і довго дякували. Чарівниками бути просто!
    Особливо, коли є справжні друзі! Ми щиро вдячні кожному, хто допомагає нашій
    команді робити дітей з деокупації трохи щасливіше!`,
    swiper: <CurrentSwiper1 index={selectedItemIndex} handleClick={setModalState}/>,
    imgArr: [
      {src: '/assets/image/cur1(1).jpg'},
      {src: '/assets/image/cur4.jpg'},
      {src: '/assets/image/cur2.jpg'},
      {src: '/assets/image/cur3.jpg'},
      {src: '/assets/image/help1.jpg'},
    ]
    },
    
    {
      id: 228,
      title: 'Видачу корму для родин, що прихистили безпритульних тварин',
      description: `Ми регулярно закуповуємо корм і віддаємо його родинам, які дали прихисток
    безпритульним тваринам.`,
      date: 'Nov 22, 2022',
      longDesc: `Наша команда має на меті допомогти тваринам, що залишилися без дому внаслідок війни.
    Тому ми регулярно закуповуємо корм і віддаємо його родинам, які дали прихисток безпритульним тваринам.
    На цьому фото - Григорій, Грицько, Гриць.
    Він прибіг до сільради Нижнього Бурлука разом із своїм малим чотирилапим другом і відразу привернув до себе нашу увагу. Він з радістю дозволив себе погладити і почухати.
    Мешканка села поділилася з нами його історією:
    “Ой, цей пес прийшов у наше село із українськими солдатами, жив у них, бо якось до них прибився. Може загубився, а може його залишили хазяї, не знаю. Потім солдати поїхали, а він знову залишився. Худий був страшне.”
    Ця історія має гарний кінець. Пес знайшов добру родину, що його прихистила. Але  таких покинутих тварин зараз багато, вони мерзнуть та голодують.
    Ми щиро вдячні нашим партнерам, які допомагають нам кормами для тварин. Це дуже важливо. Особливо взимку.
    `,
    swiper: <CurrentSwiper2 index={selectedItemIndex} handleClick={setModalState}/>,
    imgArr: [
      {src: '/assets/image/cur2(2).jpg'},
      {src: '/assets/image/cur2(3).jpg'},
      {src: '/assets/image/cur2(4).jpg'},
      {src: '/assets/image/cur2(5).jpg'},
      {src: '/assets/image/cur2(6).jpg'},
      {src: '/assets/image/cur2(1).jpg'},
    ]
    },
    {
      id: 229,
      title: 'Допомога малобільним людям',
      description: `Наш команда разом із ГО “Фенікс” придбали ходунки для Тамари - літньої мешканки міста
    Куп’янську. Це місто та його жителі дуже постраждали внаслідок російської військової
    агресії.`,
      date: 'Nov 22, 2022',
      longDesc: `Коли ми вперше поїхали до Купянська, ми познайомилися з старенькою жіночкою Тамарою.
    Усе своє життя вона провела на сцені, їздила з концертами разом із своїм колективом. І раптом, ця дієва творча людина опинилася у полоні жахливих обставин - війна, окупація, інвалідний візок...
    Тамара дуже мріяла знову ходити. І озвучила своє бажання так:
    “Дівчатка, може ви ходунки якісь мені знайдете? Так хочеться на вулицю виходити, свіжим повітрям подихати!”
    Наша команда звернулася по допомогу і керівниця ГО “Фенікс13” Наталія Меркулова передала нам ходунки. Вже у наступну поїздку ми привезли їх Тамарі.
    Для Тамари це було справжнє диво.
    Ми були щасливі, що змогли допомогти їй.`,
    swiper: <CurrentSwiper3 index={selectedItemIndex} handleClick={setModalState }/>,
    imgArr: [
      {src: '/assets/image/cur3(1).jpg'},
      {src: '/assets/image/cur3(2).jpg'},
    ]
    },
  ];

  return (
    <div className="successful-stories">
      <div className="successful-stories-wrapper _container">
        <h2>Успішні історії</h2>
        <p>Зараз для нас є важливим закриття 4 найважливіших потреб:</p>

        <div className="card-block-stories-wrapper">
          {stories.map((item, index) => {
            return (
              <div className="card-block-stories" key={item.id}>
                <div className="card-block-stories-img">
                 {item.swiper}
                </div>
                <div onClick={() => setModalState(true, index)}>
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                  <section>{item.date}</section>
                </div>
              </div>
            );
          })}
        </div>

        <div className="button-single-story">
          <Link to="/SuccessfulStoriesPage">
            <ButtonFunc class="card-block__singl-button">
              Всі успішні історії
              <img
                className="card-block__singl-button-arrow"
                src="/assets/icons/3.svg"
                alt="arrow"
              />
            </ButtonFunc>
          </Link>

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
