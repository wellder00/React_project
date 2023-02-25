import React, { useState, useEffect } from 'react';

function Contacts() {


  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [textDirty, setTextDirty] = useState(false);
  const [nameError, setNameError] = useState('*Це поле є обов’язковим до заповнення');
  const [emeilError, setEmeilError] = useState('*Це поле є обов’язковим до заповнення');
  const [textError, setTextError] = useState('*Це поле є обов’язковим до заповнення');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emeilError || textError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emeilError, textError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length >= 1) {
      setNameError('');
    } else {
      setNameError('*Це поле є обов’язковим до заповнення');
    }
  };

 
  const emailHandler = (e) => {
    setEmail(e.target.value);
    let result =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!result.test(String(e.target.value))) {
      setEmeilError('*Невірний формат email');
    }
    if (result.test(String(e.target.value))) {
      setEmeilError('');
    }
    if (e.target.value.length < 0) {
      setEmeilError('*Це поле є обов’язковим до заповнення');
    }
  };

  const textHandler = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 500) {
      setTextError('*Ви ввели більше 500 символів');
    } else if (e.target.value.length === 0) {
      setTextError('*Це поле є обов’язковим до заповнення');
    } else if (e.target.value.length > 0 && e.target.value.length < 500) {
      setTextError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;     
      case 'text':
        setTextDirty(true);
        break;
      default:
      // unknown type! based on the language,
      // there should probably be some error-handling
      // here, maybe an exception
    }
  };

  return (
    <div className="contacts">
      <div className="contacts__wrapper _container">
        <div className="contacts__title">Контакти</div>
        <div className="first-contacts-block">
          <div className="first-contacts-block__left">
            <div className="first-contacts-block__left_img">
              <img src="/assets/image/contacts1.jpg" alt="adress" />
            </div>
            <div className="first-contacts-block__left_description">
              <p>Адреса</p>
              <div>м. Харків, вул. Повздовжня, 4</div>
              <p>Контактний номер</p>
              <div>+380 (96) 052 72 91</div>
              <p>Email</p>
              <div>3232605@gmail.com</div>
              <section className="contacts-socials-icon">
                <div className="footer-socials-icon-contacts">
                  <a href="https://www.facebook.com/A-help-Ukraine-107200221938176/">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5 15H28.504C30.987 15 33 17.013 33 19.496V28.505C33 30.987 30.987 33 28.504 33H19.496C17.013 33 15 30.987 15 28.504V19.5C15 17.015 17.015 15 19.5 15V15Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.0996 24.9001H28.4996"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.5004 20.3999H27.5554C26.0894 20.3999 24.9004 21.5889 24.9004 23.0549V23.9999V32.9999"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="footer-socials-icon-contacts">
                  <a href="https://www.instagram.com/a_help_ukraine/">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4331_24329)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.496 15H28.505C30.987 15 33 17.012 33 19.496V28.505C33 30.987 30.988 33 28.504 33H19.496C17.013 33 15 30.988 15 28.504V19.496C15 17.013 17.012 15 19.496 15V15Z"
                          fill="black"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.9477 18.7133C28.7617 18.7143 28.6107 18.8653 28.6107 19.0513C28.6107 19.2373 28.7627 19.3883 28.9487 19.3883C29.1347 19.3883 29.2857 19.2373 29.2857 19.0513C29.2867 18.8643 29.1347 18.7133 28.9477 18.7133Z"
                          fill="black"
                        />
                        <path
                          d="M28.9477 18.7133C28.7617 18.7143 28.6107 18.8653 28.6107 19.0513C28.6107 19.2373 28.7627 19.3883 28.9487 19.3883C29.1347 19.3883 29.2857 19.2373 29.2857 19.0513C29.2867 18.8643 29.1347 18.7133 28.9477 18.7133"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.546 21.4543C27.9519 22.8602 27.9519 25.1396 26.546 26.5455C25.1401 27.9514 22.8607 27.9514 21.4548 26.5455C20.0489 25.1396 20.0489 22.8602 21.4548 21.4543C22.8607 20.0484 25.1401 20.0484 26.546 21.4543Z"
                          fill="black"
                        />
                        <path
                          d="M26.546 21.4543C27.9519 22.8602 27.9519 25.1396 26.546 26.5455C25.1401 27.9514 22.8607 27.9514 21.4548 26.5455C20.0489 25.1396 20.0489 22.8602 21.4548 21.4543C22.8607 20.0484 25.1401 20.0484 26.546 21.4543"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4331_24329">
                          <rect width="48" height="48" rx="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="footer-socials-icon-contacts">
                  <a href="https://t.me/+iYP6EAe1wKc0MjM6">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5806_79)">
                        <path
                          d="M31.4803 17.5017L31.4799 17.5019L15.5093 23.5663C15.5055 23.5677 15.5032 23.5689 15.502 23.5696L15.5014 23.57C15.5008 23.5715 15.4999 23.5747 15.5 23.5798C15.5001 23.5847 15.5011 23.5879 15.5017 23.5894C15.503 23.5901 15.5055 23.5913 15.5097 23.5927L15.5097 23.5928L19.2126 24.8433L19.4077 24.9091L19.4083 24.9103L19.6655 24.7559L28.5896 19.399L29.1763 20.2038L22.2099 26.3041L27.5035 30.3186L31.4803 17.5017ZM31.4803 17.5017C31.4829 17.5007 31.4847 17.5003 31.4855 17.5002M31.4803 17.5017L31.4855 17.5002M31.4855 17.5002L31.4869 17.5M31.4855 17.5002L31.4869 17.5M31.4869 17.5L31.4869 17.5L31.4872 17.5C31.4875 17.5001 31.4883 17.5003 31.4894 17.5009C31.4921 17.5023 31.4952 17.5046 31.4976 17.5076C31.4987 17.509 31.4994 17.5101 31.4998 17.5108L31.5001 17.5116L31.5002 17.5118L31.5002 17.5119L31.5002 17.5124C31.5002 17.5129 31.5002 17.515 31.4992 17.5189L28.3734 30.0132C28.3734 30.0133 28.3734 30.0133 28.3734 30.0133C28.3088 30.2711 28.0807 30.4317 27.8344 30.4317C27.7223 30.4317 27.6076 30.3974 27.5036 30.3187L31.4869 17.5ZM21.5042 29.1021L21.3626 28.819L22.1004 28.6193L22.0049 27.4037L22.9559 28.125L21.5959 29.2774L21.5084 29.0997L21.5042 29.1021Z"
                          fill="black"
                          stroke="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5806_79">
                          <rect width="48" height="48" rx="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="footer-socials-icon-contacts">
                  <a href="https://invite.viber.com/?g2=AQBLElfynNLHV094mpq21X4%2FlgNGxrb4Bymfpxtgo7dfBSK5SbPwvqkvpW9MWYpT&lang=uk">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4331_24331)">
                        <path
                          d="M19.9629 32.6329L19.5543 30.1926C18.0681 29.7808 16.9079 28.6031 16.5259 27.0978M19.9629 32.6329L20.1727 15.9516C22.8673 15.3495 25.6615 15.3495 28.3559 15.9516L28.6538 16.0183L28.6541 16.0184C30.0568 16.3319 31.1642 17.4079 31.5179 18.8011C32.1986 21.483 32.1986 24.2926 31.5179 26.9748C31.1642 28.3677 30.0568 29.4437 28.6541 29.7572L28.6538 29.7573L28.3559 29.824C28.3558 29.824 28.3557 29.824 28.3557 29.824C26.6343 30.2087 24.8719 30.3477 23.121 30.2408L22.9127 30.2281L22.7572 30.3673L20.4379 32.4421L20.0475 30.11L19.9949 29.7958L19.6878 29.7107C18.3739 29.3467 17.3483 28.3054 17.0105 26.9748M19.9629 32.6329C19.9892 32.791 20.0997 32.9221 20.2508 32.9752L19.9629 32.6329ZM16.5259 27.0978L17.0105 26.9748M16.5259 27.0978L17.0105 26.9748M16.5259 27.0978C15.8247 24.3349 15.8247 21.4407 16.5259 18.6781M17.0105 26.9748C16.3298 24.2926 16.3298 21.483 17.0105 18.8011M16.5259 18.6781L17.0105 18.8011M16.5259 18.6781L17.0105 18.8011M16.5259 18.6781C16.9259 17.1021 18.1785 15.8851 19.7653 15.5304L20.0635 15.4636M17.0105 18.8011C17.3642 17.4079 18.4715 16.3319 19.8743 16.0184L19.8745 16.0183L20.1725 15.9516L20.0635 15.4636M20.0635 15.4636C22.8299 14.8455 25.6987 14.8455 28.4649 15.4636H20.0635ZM30.1242 22.4249L30.1242 22.4249C30.1021 22.9433 29.6642 23.3458 29.1455 23.3237C28.8518 23.3112 28.5954 23.1652 28.4322 22.9468C28.2552 23.1651 27.9826 23.302 27.68 23.295C27.3944 23.2884 27.1416 23.155 26.974 22.9498C26.8125 23.1528 26.5682 23.2884 26.2889 23.3034L26.2889 23.3034C25.7707 23.3313 25.3279 22.934 25.2999 22.4157C25.2844 22.1267 25.2047 22.0162 25.165 21.9762L25.1648 21.9759C25.126 21.9369 25.0214 21.8593 24.7435 21.8447L24.7433 21.8447C24.2253 21.8173 23.8272 21.3751 23.8546 20.8568M30.1242 22.4249L26.7624 22.3339C26.7755 21.7631 26.602 21.3296 26.2762 20.9777C26.2597 20.9601 26.2428 20.9427 26.2254 20.9256C26.2254 20.9256 26.2254 20.9256 26.2254 20.9256C25.923 20.6284 25.4846 20.4235 24.8286 20.3744C24.8261 20.3744 24.8235 20.3744 24.8209 20.3744C24.8209 20.3744 24.8209 20.3744 24.8209 20.3744C24.5955 20.3716 24.3893 20.2895 24.2288 20.1548M30.1242 22.4249C30.1548 21.7048 30.0353 20.9862 29.7738 20.3136L29.7737 20.3135C29.512 19.6409 29.114 19.0287 28.6046 18.5136L28.599 18.5079L28.5932 18.5024L28.5858 18.4954C28.5855 18.4952 28.5853 18.4949 28.585 18.4947C27.5797 17.534 26.3057 17.0496 24.8626 17.0496C24.3436 17.0496 23.923 17.4703 23.923 17.9893C23.923 18.273 24.0488 18.5273 24.2476 18.6995C24.0315 18.8717 23.8931 19.1372 23.8931 19.4348C23.8931 19.7239 24.0235 19.9824 24.2288 20.1548M30.1242 22.4249L24.8403 19.9678C24.8378 19.9677 24.8352 19.9675 24.8327 19.9674C24.6073 19.9579 24.3966 20.0288 24.2288 20.1548M23.8546 20.8568L24.3539 20.8832L23.8546 20.8573C23.8546 20.8571 23.8546 20.857 23.8546 20.8568ZM23.8546 20.8568C23.8698 20.5675 24.0142 20.316 24.2288 20.1548M26.6423 20.6372L26.5588 20.7151L27.2868 20.039C27.869 20.6671 28.1625 21.4537 28.1413 22.3659C28.1357 22.6085 27.9342 22.8008 27.6916 22.7952C27.4489 22.7895 27.2567 22.588 27.2623 22.3454C27.2783 21.6507 27.0612 21.0892 26.6423 20.6372ZM26.6423 20.6372C26.233 20.1982 25.6492 19.9309 24.8469 19.8744V19.9681C25.4597 20.0012 26.052 20.2012 26.5 20.6534L26.5002 20.6535C26.5201 20.6737 26.5396 20.6941 26.5585 20.7148L26.6423 20.6372ZM19.3017 17.8102L19.878 18.3863C19.5779 18.5847 19.3048 18.8219 19.0659 19.0917L19.0659 19.0916L19.062 19.0961C18.8012 19.3979 18.6345 19.7331 18.5894 20.0871L18.5894 20.0878C18.5628 20.2989 18.5809 20.5121 18.6445 20.7165L18.7004 20.8962L18.7238 20.9105C18.9626 21.576 19.2653 22.2175 19.6289 22.8248C20.1301 23.7346 20.7448 24.577 21.4586 25.3318L21.5045 25.3982L21.559 25.4385L21.5679 25.4488L21.5963 25.4732L21.611 25.4859C22.3755 26.211 23.229 26.8363 24.1511 27.3462L24.154 27.3478C24.9241 27.7669 25.4847 28.0302 25.8947 28.1877V28.2081L26.25 28.3156C26.4006 28.3611 26.5479 28.3848 26.7012 28.3848H26.7196L26.7379 28.3835C27.1632 28.3522 27.5665 28.1798 27.8829 27.8934C28.2079 27.6039 28.4833 27.2637 28.6988 26.8857L28.7643 26.7706V26.7436C28.8532 26.5314 28.8891 26.3027 28.8504 26.0729C28.804 25.7975 28.6577 25.564 28.451 25.3898C27.916 24.9229 27.338 24.5081 26.7243 24.1508L26.7177 24.147L26.711 24.1434C26.122 23.8241 25.4479 23.9813 25.122 24.4086L24.791 24.8258C24.7862 24.8278 24.7771 24.8309 24.762 24.8337C24.7448 24.837 24.7282 24.8381 24.7167 24.8383C24.715 24.8384 24.7136 24.8384 24.7123 24.8384C24.7122 24.8384 24.7121 24.8384 24.7119 24.8384C23.7081 24.559 23.0617 23.9135 22.6569 23.3116C22.4495 23.0033 22.3094 22.7115 22.2217 22.498C22.178 22.3916 22.1478 22.3057 22.1289 22.2484C22.1265 22.2409 22.1242 22.2338 22.1221 22.2273C22.1228 22.2211 22.1238 22.2146 22.1251 22.2081C22.1271 22.198 22.129 22.191 22.1306 22.1864L22.56 21.8408L22.56 21.8408L22.5623 21.839C22.9506 21.5228 23.1577 20.8584 22.8112 20.2439L22.8112 20.2439L22.8087 20.2396C22.6255 19.922 22.4264 19.614 22.2122 19.3169L22.2252 19.3187L22.1833 19.2769C21.9916 19.0134 21.788 18.7585 21.5731 18.513C21.4011 18.305 21.1619 18.1641 20.8974 18.1138L19.3017 17.8102Z"
                          fill="black"
                          stroke="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4331_24331">
                          <rect width="48" height="48" rx="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div className="first-contacts-block__right_description">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.977115062345!2d36.288341800000005!3d50.04926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a6fdc42942d3%3A0x461820e85ec748e9!2z0J_RgNC-0LTQvtC70YzQvdCw0Y8g0YPQuy4sIDQsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjEwMDA!5e0!3m2!1sru!2sjo!4v1676920292014!5m2!1sru!2sjo" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <div className="second-contacts-block">
          <div className="second-contacts-block__left-block">
            <h2>Запит на додаткову інформацію</h2>
            <section>
              Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь ласка, форму
              праворуч. Ми надішлемо відповідь на вашу електронну пошту.
            </section>
          </div>
          <div className="right-block">
          <form>
            <div className="right-block__input-content">
              <input
                onChange={(e) => nameHandler(e)}
                value={name}
                onBlur={(e) => blurHandler(e)}
                name="name"
                className={nameError && nameDirty ? 'active-error' : 'right-block-name'}
                type="text"
                placeholder="Ваше ім’я"
                required
              />
              {nameError && nameDirty && <div className="input-error">{nameError}</div>}
            </div>
            <div className="right-block__input-content">
              <input
                onChange={(e) => emailHandler(e)}
                value={email}
                className={emeilError && emailDirty ? 'active-error' : 'right-block-name'}
                onBlur={(e) => blurHandler(e)}
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              {emeilError && emailDirty && <div className="input-error">{emeilError}</div>}
            </div>
         
            <div className="right-block__input-content">
              <textarea
                onChange={(e) => textHandler(e)}
                value={text}
                onBlur={(e) => blurHandler(e)}
                className={
                  textError && textDirty ? 'right-block-name3__active-error' : 'right-block-name3'
                }
                name="text"
                placeholder="Повідомлення"
                required
              ></textarea>
              <div className="right-block__input-content">
                {textError && textDirty && <div className="input-error-currency">{textError}</div>}
              </div>
            </div>
            <div className="right-block-checkbox">
              <input type="checkbox" required />
              <label className={'right-block-check'}>
                Я погоджуюся з політикою конфіденційності
              </label>
            </div>
            <button
              disabled={!formValid}
              className={formValid ? 'support-button' : 'support-button__disabled'}
            >
              Відправити форму
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
