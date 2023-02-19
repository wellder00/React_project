import React from 'react';

function OurTeams() {
  // скролл вверх при переключении страницы
  window.scrollTo({
    top: 0,
    left: 0,
  });
  return (
    <div className="ourTeams">
      <div className="ourTeams__wrapper">
        <h2 className="ourTeams__title">Наша команда</h2>
        <div className="ourTeams__first-foto">
          <img src="/assets/image/ourTeams1.jpg" alt="Роман Грибков" />
        </div>
        <span className="ourTeams__boss-name">Роман Грибков</span>
        <span className="ourTeams__job-title">Засновник фонду</span>
        <span className="ourTeams__boss-content">
          Засновник та людина, котра зібрала та надихнула усю нашу команду. До війни Роман мав
          успішний бізнес у сфері дитячої освіти. Але з перших днів війни він разом зі своїми
          партнерами організував на базі дитячого центру «Арбуз» - хаб гуманітарної допомоги,
          Благодійний фонд «A-HELP UKRAINE».
        </span>
        <div className="ourTeams__people-block__wrapper">
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src="/assets/image/ourTeams2.jpg" alt="Водомєрова Ірина Володимирівна" />
            </div>
            <span>
              <strong>
                Водомєрова <br /> Ірина <br /> Володимирівна
              </strong>
            </span>
            <br />
            <span>Cпівзасновник, керівник фонду</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src="/assets/image/ourTeams3.jpg" alt="Пушай Ірина Анатоліївна" />
            </div>
            <span>
              <strong>
                Пушай <br /> Ірина <br /> Анатоліївна
              </strong>
            </span>{' '}
            <br />
            <span>Cпівзасновник, менеджер проектів</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src="/assets/image/ourTeams4.jpg" alt="Шамайко Наталія Олександрівна" />
            </div>
            <span>
              <strong>
                Шамайко <br /> Наталія <br /> Олександрівна
              </strong>
            </span>{' '}
            <br />
            <span>Волонтер</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src="/assets/image/ourTeams5.jpg" alt="Попова Юлія Олександрівна" />
            </div>
            <span>
              <strong>
                Попова <br /> Юлія <br /> Олександрівна
              </strong>
            </span>{' '}
            <br />
            <span>Волонтер</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src="/assets/image/ourTeams6.jpg" alt="Долгов Сергій Єлізаровичв" />
            </div>
            <span>
              <strong>
                Долгов <br /> Сергій <br /> Єлізарович
              </strong>
            </span>{' '}
            <br />
            <span>Водій-волонтер</span>
          </div>
        </div>
        <h2 className="ourTeams__title-pertners">Наша команда</h2>

        <div className="ourTeams__partners-block__wrapper">
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners1.png" alt="World Food Programme" />
            </div>
            <span>World Food Programme</span>
            <span>Гумінатарна організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners2.png" alt="Голоси дітей" />
            </div>
            <span>Голоси дітей</span>
            <span>Благодійний фонд</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners3.png" alt="Сила берегині" />
            </div>
            <span>Сила берегині</span>
            <span>Громадська організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners4.png" alt="World Central Kitchen" />
            </div>
            <span>World Central Kitchen</span>
            <span>Благодійна організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners5.png" alt="Інфочат Харків" />
            </div>
            <span>Інфочат Харків</span>
            <span>Громадська організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners6.png" alt="Роман Грибков" />
            </div>
            <span>Good bread</span>
            <span>Соціальна пекарня</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners7.png" alt="Япошка" />
            </div>
            <span>Япошка</span>
            <span>Мережа ресторанів японської та італійської кухні</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src="/assets/image/partners8.png" alt="GLOBAL 2000" />
            </div>
            <span>GLOBAL 2000</span>
            <span>Організація з охорони навколишнього середовища</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeams;
