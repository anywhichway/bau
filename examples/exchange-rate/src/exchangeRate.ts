import { type Context } from "@grucloud/bau-ui/context";

export default function (context: Context) {
  const { bau, css } = context;
  const { h1, p, body, img, div, select, option, input, button } = bau.tags;

  const className = css``;

  /**
 *  <body>

    <div class="container">
      <div class="currency">
        <select id="currency-one">
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="ZAR">ZAR</option>
        </select>
        <input type="number" id="amount-one" placeholder="0" value="1" />
      </div>

      <div class="swap-rate-container">
        <button class="btn" id="swap">
          Swap
        </button>
        <div class="rate" id="rate"></div>
      </div>

      <div class="currency">
        <select id="currency-two">
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="BSD">BSD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="DOP">DOP</option>
          <option value="EGP">EGP</option>
          <option value="EUR" selected>EUR</option>
          <option value="FJD">FJD</option>
          <option value="GBP">GBP</option>
          <option value="GTQ">GTQ</option>
          <option value="HKD">HKD</option>
          <option value="HRK">HRK</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="KZT">KZT</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PAB">PAB</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="PYG">PYG</option>
          <option value="RON">RON</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="UYU">UYU</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
        </select>
        <input type="number" id="amount-two" placeholder="0" />
      </div>
    </div>

  </body>
 */

  const currencies = ["USD", "EUR", "GBP", "BRL", "COP"];

  const SelectCurrency = ({ currencies, ...props }: any) =>
    select(
      props,
      currencies.map((currency: any) => option({ value: currency }, currency))
    );

  return function ExchangeRate() {
    return body(
      { class: className },
      img({ src: "img/money.png", class: "money-img", alt: "money" }),
      h1("Exchange Rate Calculator"),
      p("Choose the currency and the amounts to get the exchange rate"),
      div(
        { class: "container" },
        div(
          { class: "currency" },
          SelectCurrency({ id: "currency-one", currencies }),
          input({
            type: "number",
            id: "amount-one",
            placeholder: "0",
            value: "1",
          })
        ),
        div(
          { class: "swap-rate-container" },
          button({ class: "btn", id: "swap" }, "Swap")
        ),
        div(
          { class: "currency" },
          SelectCurrency({ id: "currency-two", currencies }),
          input({
            type: "number",
            id: "amount-two",
            placeholder: "0",
          })
        )
      )
    );
  };
}
