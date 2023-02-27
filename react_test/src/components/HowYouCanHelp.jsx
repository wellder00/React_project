import React, { useState, useEffect } from 'react';
import ButtonFunc from './ButtonFunc';

function CurrencyButton(props) {
  return (
    <input
      type="radio"
      name="can-help-button"
      value={props.valueName}
      id={props.idName}
      onChange={props.onChangeFunction}
      checked={props.checked}
    />
  );
}

function submitFunction() {
  console.log('Fine');
}

const clipboard = {
  1: 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””',
  2: 'UA643515330000026009005902082',
  3: 'АТ КБ "ПриватБанк"',
  4: 'Україна, м. Київ, вулиця Грушевського, будинок 1Д',
  5: '44773154',
  6: 'PBANUA2',
  7: 'Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33',
  8: 'CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””',
  9: 'UA193515330000026000005903392',
  10: 'SC CB "PRIVATBANK"',
  11: 'Ukraine, Kyiv, Hrushevsky Street, building 1D',
  12: '44773154',
  13: 'PBANUA2',
  14: 'Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33',
  15: 'Commerzbank AG',
  16: 'Frankfurt am Main, Germany',
  17: '400886700401',
  18: 'COBADEFF',
  19: 'CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””',
  20: 'UA433515330000026001035904638',
  21: 'SC CB "PRIVATBANK"',
  22: 'Ukraine, Kyiv, Hrushevsky Street, building 1D',
  23: '44773154',
  24: 'PBANUA2',
  25: 'Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33',
  26: 'JP Morgan Chase Bank',
  27: 'New York ,USA',
  28: '001-1-000080',
  29: 'CHASUS33',
  30: 'Назва компанії: БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””; IBAN код: UA643515330000026009005902082; Назва банку: АТ КБ "ПриватБанк", Адреса банку: Україна, м. Київ, вулиця Грушевського, будинок 1Д; Код ЄДРПОУ: 44773154; SWIFT код: PBANUA2; Адреса компанії: Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33',
  31: 'Назва компанії: CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””; IBAN код: UA193515330000026000005903392; Назва банку: SC CB "PRIVATBANK"; Адреса банку: Ukraine, Kyiv, Hrushevsky Street, building 1D; Код ЄДРПОУ: 44773154; SWIFT код: PBANUA2; Адреса компанії: Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33; Банк кореспондент: Commerzbank AG; Адреса банку кореспондента: Frankfurt am Main, Germany; Рахунок в банку кореспонденті: 400886700401; SWIFT код банку кореспондента: COBADEFF',
  32: 'Назва компанії: CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””; IBAN код: UA433515330000026001035904638; Назва банку: SC CB "PRIVATBANK"; Адреса банку: Ukraine, Kyiv, Hrushevsky Street, building 1D; Код ЄДРПОУ: 44773154; SWIFT код: PBANUA2; Адреса компанії: Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33; Банк кореспондент: JP Morgan Chase Bank; Адреса банку кореспондента: New York, USA; Рахунок в банку кореспонденті: 001-1-000080; SWIFT код банку кореспондента: CHASUS33',
};

const money = {
  UAH: [100, 200, 500],
  USD: [50, 100, 200],
  EUR: [50, 100, 200],
};

function But() {
  const [formChange, setFormChanged] = useState(false);
  const [pageState, setPageState] = useState(['UAH', false, false, false]);
  const [timerId, setTimerId] = useState(null);
  const [option1, setOption1] = useState('1');
  const [option2, setOption2] = useState('');
  const [textInput, setTextInput] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    function validateForm(){
      setFormChanged((prevChanged) => true);
    if (option1 === '' || (option2 === '' && textInput === '')) {
      setIsFormValid((prevValidated) => false);
    } else {
      setIsFormValid((prevValidated) => true);
    }
    }
    if (formChange) {
      validateForm();
    }
  }, [option1, option2, textInput, formChange]);
  

  const handleOption1Change = (parameter) => {
    setOption1((prevParameter) => parameter);
  };

  const handleOption2Change = (parameter) => {
    setOption2((prevParameter) => parameter);
  };

  const handleTextInputChange = (e) => {
    setTextInput((prevParameter) => e.target.value);
    setFormChanged((prevChanged) => true);
  };

  const validateFormButtonFunc = () => {
    setFormChanged((prevChanged) => true);
    if (option1 === '' || (option2 === '' && textInput === '')) {
      setIsFormValid((prevValidated) => false);
    } else {
      setIsFormValid((prevValidated) => true);
    }
  };

  const moneyCounts = money[pageState[0]];

  function clipboardCopying(number) {
    navigator.clipboard.writeText(clipboard[number]);
    if (number > 29) {
      togglePopup(number);
    }
  }

  function setCurrency(currencyName) {
    let newPageState = pageState;
    newPageState[0] = currencyName;
    setPageState((pageState) => newPageState);
  }

  function togglePopup(number) {
    if (timerId) {
      clearTimeout(timerId);
    }
    let popupNumber = number % 29;
    let newPageState = pageState;
    newPageState[popupNumber] = true;
    setPageState((pageState) => [...pageState, ...newPageState]);
    let secondNewPageState = newPageState;
    const newTimerId = setTimeout(() => {
      secondNewPageState[1] = false;
      secondNewPageState[2] = false;
      secondNewPageState[3] = false;
      setPageState(() => secondNewPageState);
    }, 1000);
    setTimerId(newTimerId);
  }

  return (
    <div className="can-help">
      <div className="can-help_wrapper _container">
        <div className="title-block">

           {/* <NavHashLink  to="/#button_help">
            <h2>Як ви можете допомогти?</h2>
          </NavHashLink> */}

          <a href="#!" id='donate' name="button_help">
            <h2>Як ви можете допомогти?</h2>
          </a>
          <div>
            Підтримати нас можна кількома способами, ми будемо вдячні за будь-яку допомогу. Це
            зробить нашу роботу кращою та ефективною.
          </div>
        </div>
        <div className="can-help__first-block">
          <div className="donat-block">
            <h3>Ви можете зробити донат</h3>
            <div className="donat-block__description">
              <div>Ви врятуєте майбутнє.</div>
              Обстріли над головою, руйнування житла, втрата роботи, зачинені магазини та аптеки.
              Зруйновані плани на майбутнє та маленькі діти на руках. Старі люди, які не можуть
              поїхати та неймовірна кількість тварин, що опинилася на вулиці.
              <div>Ви можете допомогти їм зробивши донат:</div>
            </div>
            <form>
              <div className="donat-block__first-button-block">
                <CurrencyButton
                  valueName="first-currency"
                  idName="first-currency"
                  onChangeFunction={() => {
                    setCurrency('UAH');
                    handleOption1Change('1');
                  }}
                  checked={option1 === '1'}
                ></CurrencyButton>
                <label htmlFor="first-currency" id="first-currency-label">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>UAH</div>
                </label>
                <CurrencyButton
                  valueName="second-currency"
                  idName="second-currency"
                  onChangeFunction={() => {
                    setCurrency('USD');
                    handleOption1Change('2');
                  }}
                ></CurrencyButton>
                <label htmlFor="second-currency" id="second-currency-label">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>USD</div>
                </label>
                <CurrencyButton
                  valueName="third-currency"
                  idName="third-currency"
                  onChangeFunction={() => {
                    setCurrency('EUR');
                    handleOption1Change('3');
                  }}
                ></CurrencyButton>
                <label htmlFor="third-currency" id="third-currency-label">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>EUR</div>
                </label>
              </div>
              <div
                className={
                  !isFormValid && formChange && option2 === '' && textInput === ''
                    ? 'donat-block__second-button-block__disabled'
                    : 'donat-block__second-button-block'
                }
              >
                <input
                  type="radio"
                  name="can-help-button2"
                  value="first-number"
                  id="first-number"
                  onChange={() => handleOption2Change('1')}
                />
                <label htmlFor="first-number">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>{moneyCounts[0]}</div>
                </label>
                <input
                  type="radio"
                  name="can-help-button2"
                  value="second-number"
                  id="second-number"
                  onChange={() => handleOption2Change('2')}
                />
                <label htmlFor="second-number">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>{moneyCounts[1]}</div>
                </label>
                <input
                  type="radio"
                  name="can-help-button2"
                  value="third-number"
                  id="third-number"
                  onChange={() => handleOption2Change('3')}
                />
                <label htmlFor="third-number">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>{moneyCounts[2]}</div>
                </label>
              </div>
              <input
                type="number"
                className={
                  !isFormValid && formChange && option2 === '' && textInput === ''
                    ? 'text_input__disabled'
                    : 'text_input'
                }
                placeholder="Запропонувати іншу сумму"
                onChange={handleTextInputChange}
                name="number"
              />
              <div
                className={
                  !isFormValid && formChange && option2 === '' && textInput === ''
                    ? 'input-error-currency'
                    : 'input-error-currency__hidden'
                }
              >
                * Це поле є обов'язковим для заповнення
              </div>
            </form>
            <div className="donat-block__third-button-block">
              <button
                className="donat-button1"
                onClick={() => {
                  if (isFormValid && (option2 !== '' || textInput !== '')) {
                    submitFunction();
                  } else {
                    validateFormButtonFunc();
                  }
                }}
              >
                Донат за допомогою картки
                <img src="/assets/icons/help1.svg" alt="button-img"></img>
              </button>
            </div>
            <div className="donat-block__fourth-button-block">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=2K9ZZ8GQGYMFQ"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonFunc class="donat-button2">
                  Донат за допомогою картки
                  <img src="/assets/icons/help2.svg" alt="button-img"></img>
                </ButtonFunc>
              </a>
            </div>
          </div>
          <div className="img-block">
            <img src="/assets/image/help1.jpg" alt="woman and child" />
          </div>
        </div>
        <div className="can-help__second-block">
          <h3>Банківський платіж за реквізитами</h3>
          <div className="bank-information-section">
            <div className="bank-information-block">
              <section>UAH</section>
              <div className="table-block">
                <div className="table-block__name-company">
                  <div className="table-block__title">Назва компанії</div>
                  <div className="table-block__name">
                    БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(1)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">IBAN код</div>
                  <div className="table-block__name">UA643515330000026009005902082</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(2)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Назва банку</div>
                  <div className="table-block__name">АТ КБ "ПриватБанк"</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(3)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса банку</div>
                  <div className="table-block__name">
                    Україна, м. Київ, вулиця Грушевського, будинок 1Д
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(4)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Код ЄДРПОУ</div>
                  <div className="table-block__name">44773154</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(5)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">SWIFT код</div>
                  <div className="table-block__name">PBANUA2</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(6)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса компанії</div>
                  <div className="table-block__name">
                    Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(7)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <ButtonFunc class="table-block__button" onClick={() => clipboardCopying(30)}>
                  Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </ButtonFunc>
                {pageState[1] && (
                  <div className="table-block__pop-up">
                    <div>Дані скопійовано в буфер обміну</div>
                    <div className="pop-up-icon">
                      <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bank-information-block">
              <section>EUR</section>
              <div className="table-block">
                <div className="table-block__name-company">
                  <div className="table-block__title">Назва компанії</div>
                  <div className="table-block__name">
                    CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(8)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">IBAN код</div>
                  <div className="table-block__name">UA193515330000026000005903392</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(9)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Назва банку</div>
                  <div className="table-block__name">SC CB "PRIVATBANK"</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(10)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса банку</div>
                  <div className="table-block__name">
                    Ukraine, Kyiv, Hrushevsky Street, building 1D
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(11)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Код ЄДРПОУ</div>
                  <div className="table-block__name">44773154</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(12)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">SWIFT код</div>
                  <div className="table-block__name">PBANUA2</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(13)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса компанії</div>
                  <div className="table-block__name">
                    Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(14)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Банк кореспондент</div>
                  <div className="table-block__name">Commerzbank AG</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(15)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса банку кореспондента</div>
                  <div className="table-block__name">Frankfurt am Main, Germany</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(16)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Рахунок в банку кореспонденті</div>
                  <div className="table-block__name">400886700401</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(17)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">SWIFT код банку кореспондента</div>
                  <div className="table-block__name">COBADEFF</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(18)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <ButtonFunc class="table-block__button" onClick={() => clipboardCopying(31)}>
                  Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </ButtonFunc>
                {pageState[2] && (
                  <div className="table-block__pop-up">
                    <div>Дані скопійовано в буфер обміну</div>
                    <div className="pop-up-icon">
                      <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bank-information-block">
              <section>USD</section>
              <div className="table-block">
                <div className="table-block__name-company">
                  <div className="table-block__title">Назва компанії</div>
                  <div className="table-block__name">
                    БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(19)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">IBAN код</div>
                  <div className="table-block__name">UA643515330000026009005902082</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(20)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Назва банку</div>
                  <div className="table-block__name">АТ КБ "ПриватБанк"</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(21)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса банку</div>
                  <div className="table-block__name">
                    Україна, м. Київ, вулиця Грушевського, будинок 1Д
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(22)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Код ЄДРПОУ</div>
                  <div className="table-block__name">44773154</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(23)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">SWIFT код</div>
                  <div className="table-block__name">PBANUA2</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(24)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса компанії</div>
                  <div className="table-block__name">
                    Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33
                  </div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(25)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Банк кореспондент</div>
                  <div className="table-block__name">JP Morgan Chase Bank</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(26)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Адреса банку кореспондента</div>
                  <div className="table-block__name">New York ,USA</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(27)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">Рахунок в банку кореспонденті</div>
                  <div className="table-block__name">001-1-000080</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(28)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <div className="table-block__name-company">
                  <div className="table-block__title">SWIFT код банку кореспондента</div>
                  <div className="table-block__name">CHASUS33</div>
                  <div className="table-block__image">
                    <img
                      src="/assets/icons/copy_active.svg"
                      onClick={() => clipboardCopying(29)}
                      alt="copy_active"
                    ></img>
                  </div>
                </div>
                <ButtonFunc class="table-block__button" onClick={() => clipboardCopying(32)}>
                  Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </ButtonFunc>
                {pageState[3] && (
                  <div className="table-block__pop-up">
                    <div>Дані скопійовано в буфер обміну</div>
                    <div className="pop-up-icon">
                      <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default But;
