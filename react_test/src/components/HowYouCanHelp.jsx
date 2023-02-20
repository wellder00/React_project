import React, { useState } from 'react';

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

function ClipboardCopying() {

}

const money = {
  UAH: [100, 200, 500],
  USD: [50, 100, 200],
  EUR: [50, 100, 200],
};

function But() {
  const [currency, setCurrency] = useState('UAH');
  const moneyCounts = money[currency];

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
                />
                <label for="third-number">
                  <div className="currency-button-image">
                    <img src="/assets/icons/button_check.svg" alt="copy_active"></img>
                  </div>
                  <div>{moneyCounts[2]}</div>
                </label>
              </div>
              <input type="number" placeholder="Запропонувати іншу сумму" />
              <div className="donat-block__third-button-block">
                <ButtonFunc class="donat-button1" type="submit">
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
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN код</div>
              <div className="table-block__name">
              UA643515330000026009005902082
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
              АТ КБ "ПриватБанк"
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку</div>
              <div className="table-block__name">Україна, м. Київ, вулиця Грушевського, будинок 1Д</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">44773154</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код</div>
              <div className="table-block__name">PBANUA2</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button">
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
            </ButtonFunc>
        </div>
        </div>
        <div className="bank-information-block">
        <section>EUR</section>
          <div className="table-block">
            <div className="table-block__name-company">
              <div className="table-block__title">Назва компанії</div>
              <div className="table-block__name">CHARITABLE ORGANIZATION “CHARITY FUND “A-HELP UKRAINE””</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN код</div>
              <div className="table-block__name">
              UA193515330000026000005903392
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
              SC CB "PRIVATBANK"
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку</div>
              <div className="table-block__name">Ukraine, Kyiv, Hrushevsky Street, building 1D</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">44773154</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код</div>
              <div className="table-block__name">PBANUA2</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">Ukraine, Kharkiv, str. Valentynivska, building 58A, apartment 333-33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Банк кореспондент</div>
              <div className="table-block__name">Commerzbank AG</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку кореспондента</div>
              <div className="table-block__name">Frankfurt am Main, Germany</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Рахунок в банку кореспонденті</div>
              <div className="table-block__name">400886700401</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код банку кореспондента</div>
              <div className="table-block__name">COBADEFF</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button">
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
            </ButtonFunc>
            </div>
            </div>
            <div className="bank-information-block">
            <section>USD</section>
          <div className="table-block">
            <div className="table-block__name-company">
              <div className="table-block__title">Назва компанії</div>
              <div className="table-block__name">БЛАГОДІЙНА ОРГАНІЗАЦІЯ “БЛАГОДІЙНИЙ ФОНД “А- ХЕЛП УКРАЇНА””</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN код</div>
              <div className="table-block__name">
              UA643515330000026009005902082
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
              АТ КБ "ПриватБанк"
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку</div>
              <div className="table-block__name">Україна, м. Київ, вулиця Грушевського, будинок 1Д</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">44773154</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код</div>
              <div className="table-block__name">PBANUA2</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">Україна, м. Харків, вул. Валентинiвська, будинок 58А квартира 333-33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Банк кореспондент</div>
              <div className="table-block__name">JP Morgan Chase Bank</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса банку кореспондента</div>
              <div className="table-block__name">New York ,USA</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Рахунок в банку кореспонденті</div>
              <div className="table-block__name">001-1-000080</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">SWIFT код банку кореспондента</div>
              <div className="table-block__name">CHASUS33</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" onClick={ClipboardCopying()} alt="copy_active"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button">
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
            </ButtonFunc>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default But;
