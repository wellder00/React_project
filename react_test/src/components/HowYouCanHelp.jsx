import React, { useState, useEffect } from 'react';

import ButtonFunc from './ButtonFunc';

function CurrencyButton(props) {
  return (
    <input
      type="radio"
      name="can-help-button"
      value={props.valueName}
      id={props.idName}
      onClick={props.onClickFunction}
    />
  );
}

const clipboard = {
  1: "БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””",
  2: "UA643515330000026009005902082",
  3: "АТ КБ \"ПриватБанк\"",
  4: "Україна, м. Київ, вулиця Грушевського, будинок 1Д",
  5: "44773154",
  6: "PBANUA2",
  7: "Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33",
  8: "CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””",
  9: "UA193515330000026000005903392",
  10: "SC CB \"PRIVATBANK\"",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "HELLO",
  31: "",
  32: "",
}

const money = {
  UAH: [100, 200, 500],
  USD: [50, 100, 200],
  EUR: [50, 100, 200],
};

function But() {
  const [pageState, setPageState] = useState(['UAH', false, false, false]);
  const [timerId, setTimerId] = useState(null);
  const [number, setNumber] = useState('');
  const [choice, setChoice] = useState('');
  const [currencyChoice, setCurrencyChoice] = useState('');
  const [numberError, setNumberError] = useState('*Це поле є обов’язковим до заповнення');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if ((numberError && (choice === "")) || (currencyChoice === "")) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [numberError, choice, currencyChoice]);

  const numberHandler = (e) => {
    setNumber(e.target.value);
    if (e.target.value.length === 0) {
      setNumberError('*Це поле є обов’язковим до заповнення');
    }
  };

  const moneyCounts = money[pageState[0]];

  function clipboardCopying(number) {
    navigator.clipboard.writeText(clipboard[number]);
   if (number > 29){
      togglePopup(number);
   }
  }

  function setCurrency(currencyName) {
    let newPageState = pageState;
    newPageState[0] = currencyName;
    setPageState(pageState => [...pageState, ...newPageState]);
  }

  function togglePopup(number){
    if (timerId) {
      clearTimeout(timerId);
    }
    let popupNumber = number % 29;
    let newPageState = pageState;
    newPageState[popupNumber] = true;
    setPageState(pageState => [...pageState, ...newPageState]);
    let secondNewPageState = newPageState;
    const newTimerId = setTimeout(() => {
      secondNewPageState[1] = false;
      secondNewPageState[2] = false;
      secondNewPageState[3] = false;
      setPageState(() => secondNewPageState);
    }, 1000);
    setTimerId(newTimerId);
  };

  return (
    <div className="can-help">
      <div className="can-help_wrapper _container">
        <div className="title-block">
          <a href="#!" name="button_help">
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
                  onClickFunction={() => setCurrency('UAH')}
                  checked={currencyChoice === 'first-currency'} onChange={(e) => setCurrencyChoice(e.target.value)}
                ></CurrencyButton>
                <label for="first-currency" id="first-currency-label">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>UAH</div>
                </label>
                <CurrencyButton
                  valueName="second-currency"
                  idName="second-currency"
                  onClickFunction={() => setCurrency('USD')}
                  checked={currencyChoice === 'second-currency'} onChange={(e) => setCurrencyChoice(e.target.value)}
                ></CurrencyButton>
                <label for="second-currency" id="second-currency-label">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>USD</div>
                </label>
                <CurrencyButton
                  valueName="third-currency"
                  idName="third-currency"
                  onClickFunction={() => setCurrency('EUR')}
                  checked={currencyChoice === 'third-currency'} onChange={(e) => setCurrencyChoice(e.target.value)}
                ></CurrencyButton>
                <label for="third-currency" id="third-currency-label">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>EUR</div>
                </label>
              </div>
              <div className="donat-block__second-button-block">
                <input
                  type="radio"
                  name="can-help-button2"
                  value="first-number"
                  id="first-number"
                  checked={choice === 'first-number'} onChange={(e) => setChoice(e.target.value)}
                />
                <label for="first-number">
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
                  checked={choice === 'second-number'} onChange={(e) => setChoice(e.target.value)}
                />
                <label for="second-number">
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
                  checked={choice === 'third-number'} onChange={(e) => setChoice(e.target.value)}
                />
                <label for="third-number">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>{moneyCounts[2]}</div>
                </label>
              </div>
              <input type="number" className={numberError ? 'active-error' : 'right-block-name'} placeholder="Запропонувати іншу сумму"  onChange={(e) => numberHandler(e)}
                value={number}
                name="number"/>
              {numberError && <div className="input-error">{numberError}</div>}
              <div className="donat-block__third-button-block">
                <ButtonFunc class="donat-button1" type="submit" disabled={!formValid}>
                  Донат за допомогою картки
                  <img src="/assets/icons/help1.svg" alt="button-img"></img>
                </ButtonFunc>
              </div>
            </form>
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
              <div className="table-block__name">БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(1)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN код</div>
              <div className="table-block__name">
              UA643515330000026009005902082
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(2)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
              АТ КБ "ПриватБанк"
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(3)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку</div>
              <div className="table-block__name">Україна, м. Київ, вулиця Грушевського, будинок 1Д</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(4)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">44773154</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(5)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код</div>
              <div className="table-block__name">PBANUA2</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(6)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(7)} alt="copy_active"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button" onClick={() => clipboardCopying(30)}>
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
            </ButtonFunc>
            {pageState[1] && <div className='table-block__pop-up'><div>Дані скопійовано в буфер обміну</div><div className='pop-up-icon'><img src="/assets/icons/button_check.svg" alt="copy_active"></img></div></div>}
        </div>
        </div>
        <div className="bank-information-block">
        <section>EUR</section>
          <div className="table-block">
            <div className="table-block__name-company">
              <div className="table-block__title">Назва компанії</div>
              <div className="table-block__name">CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(8)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN код</div>
              <div className="table-block__name">
              UA193515330000026000005903392
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(9)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
              SC CB "PRIVATBANK"
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(10)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку</div>
              <div className="table-block__name">Ukraine, Kyiv, Hrushevsky Street, building 1D</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(11)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">44773154</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(12)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код</div>
              <div className="table-block__name">PBANUA2</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(13)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(14)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Банк кореспондент</div>
              <div className="table-block__name">Commerzbank AG</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(15)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку кореспондента</div>
              <div className="table-block__name">Frankfurt am Main, Germany</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(16)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Рахунок в банку кореспонденті</div>
              <div className="table-block__name">400886700401</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(17)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код банку кореспондента</div>
              <div className="table-block__name">COBADEFF</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(18)} alt="copy_active"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button" onClick={() => clipboardCopying(31)}>
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
            </ButtonFunc>
            {pageState[2] && <div className='table-block__pop-up'><div>Дані скопійовано в буфер обміну</div><div className='pop-up-icon'><img src="/assets/icons/button_check.svg" alt="copy_active"></img></div></div>}
            </div>
            </div>
            <div className="bank-information-block">
            <section>USD</section>
          <div className="table-block">
            <div className="table-block__name-company">
              <div className="table-block__title">Назва компанії</div>
              <div className="table-block__name">БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(19)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN код</div>
              <div className="table-block__name">
              UA643515330000026009005902082
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(20)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
              АТ КБ "ПриватБанк"
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(21)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку</div>
              <div className="table-block__name">Україна, м. Київ, вулиця Грушевського, будинок 1Д</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(22)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">44773154</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(23)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код</div>
              <div className="table-block__name">PBANUA2</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(24)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(25)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Банк кореспондент</div>
              <div className="table-block__name">JP Morgan Chase Bank</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(26)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку кореспондента</div>
              <div className="table-block__name">New York ,USA</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(27)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Рахунок в банку кореспонденті</div>
              <div className="table-block__name">001-1-000080</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(28)} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код банку кореспондента</div>
              <div className="table-block__name">CHASUS33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={() => clipboardCopying(29)} alt="copy_active"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button" onClick={() => clipboardCopying(32)}>
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
            </ButtonFunc>
            {pageState[3] && <div className='table-block__pop-up'><div>Дані скопійовано в буфер обміну</div><div className='pop-up-icon'><img src="/assets/icons/button_check.svg" alt="copy_active"></img></div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default But;
