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
          <section>UAH</section>
          <div className="table-block">
            <div className="table-block__name-company">
              <div className="table-block__title">Назва компанії</div>
              <div className="table-block__name">БФ А-ХЕЛП УКРАЇНА БО</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Адреса компанії</div>
              <div className="table-block__name">
                UA 64703 Харкiвська м Харкiв вулВалентинiвська б.58А кв.333-33
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Назва банку</div>
              <div className="table-block__name">
                JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
              </div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Bank SWIFT Code</div>
              <div className="table-block__name">PBANUA2X</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_pasive.svg" alt="copy_pasive"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">IBAN</div>
              <div className="table-block__name">38805429</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">Код ЄДРПОУ</div>
              <div className="table-block__name">38805429</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_pasive.svg" alt="copy_pasive"></img>
              </div>
            </div>
            <div className="table-block__name-company">
              <div className="table-block__title">МФО</div>
              <div className="table-block__name">2392439343</div>
              <div className="table-block__image">
                <img src="/assets/icons/copy_pasive.svg" alt="copy_pasive"></img>
              </div>
            </div>
            <ButtonFunc class="table-block__button">
              Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_pasive"></img>
            </ButtonFunc>
          </div>
        </div>
        <div className="can-help__third-block">
          <section>EUR</section>
          <div className="duble-table-block">
            <div className="table-block">
              <div className="table-block__name-company">
                <div className="table-block__title">Company name</div>
                <div className="table-block__name">БФ А-ХЕЛП УКРАЇНА БО</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">Адреса компанії</div>
                <div className="table-block__name">
                  UA 64703 Харкiвська м Харкiв вулВалентинiвська б.58А кв.333-33
                </div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">Correspondent bank</div>
                <div className="table-block__name">Commerzbank AG, Frankfurt am Main, Germany</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">Account in the correspondent bank</div>
                <div className="table-block__name">400886700401</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">SWIFT Code of the correspondent bank</div>
                <div className="table-block__name">COBADEFF</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_pasive"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">IBAN</div>
                <div className="table-block__name">UA563209840000026007210322320</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_pasive.svg" alt="copy_pasive"></img>
                </div>
              </div>
              <ButtonFunc class="table-block__button">
                Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_pasive"></img>
              </ButtonFunc>
            </div>

            <div className="table-block">
              <div className="table-block__name-company">
                <div className="table-block__title">Company name</div>
                <div className="table-block__name">БФ А-ХЕЛП УКРАЇНА БО</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">Адреса компанії</div>
                <div className="table-block__name">
                  UA 64703 Харкiвська м Харкiв вулВалентинiвська б.58А кв.333-33
                </div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">Correspondent bank</div>
                <div className="table-block__name">J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">Account in the correspondent bank</div>
                <div className="table-block__name">6231605145</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_active"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">SWIFT Code of the correspondent bank</div>
                <div className="table-block__name">CHASDEFX</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_active.svg" alt="copy_pasive"></img>
                </div>
              </div>
              <div className="table-block__name-company">
                <div className="table-block__title">IBAN</div>
                <div className="table-block__name">UA563209840000026007210322320</div>
                <div className="table-block__image">
                  <img src="/assets/icons/copy_pasive.svg" alt="copy_pasive"></img>
                </div>
              </div>
              <ButtonFunc class="table-block__button">
                Copy all data<img src="/assets/icons/copy_active.svg" alt="copy_pasive"></img>
              </ButtonFunc>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default But;
