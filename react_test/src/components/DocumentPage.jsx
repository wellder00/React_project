import ButtonFunc from './ButtonFunc';
import { HashLink } from 'react-router-hash-link';

function DocumentPage() {
  // скролл вверх при переключении страницы
  window.scrollTo({
    top: 0,
    left: 0,
  });

  return (
    <div className="document-page">
      <div className="document-page__wrapper _container">
        <h2>Документація та звітність</h2>
        <div className="first-section">
          <div>Статут</div>
          <div>Структура власності</div>
        </div>
        <div className="second-section">
          <div className="second-section__diplom">
            <img src="assets/image/diplom.jpg" alt="diplom" />
          </div>
          <div className="second-section__right-block">
            <div>Довідка про відкриття рахунку</div>
            <div>Довідка присвоєння ознаки неприбутковості</div>
          </div>
        </div>
        <section>Виписка з державного реєстру</section>
        <p>
          Звіт за 2022 рік
          <br /> Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea
          in, cu justo suscipiantur mel. 20 січня 2023
        </p>
        <div className="last-section_document">
          <div className="last-section__left-block">
            Не знайшли потрібну <br /> інформацію?
          </div>
          <div className="last-section__right-block">
            <HashLink to="/Contacts#form" className="link_contacts">
              <ButtonFunc class="document-button"> Запит на додаткову інформацію</ButtonFunc>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
