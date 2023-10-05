import "./day02.css";

export default function Day02() {
  return (
    <>
      <div className="bodybackground"></div>
      <div className=" checkoutcard">
        <h1>card Checkout</h1>
        <form action="">
          <label for="method">Payment Method</label>
          <br />
          <div className="dropdownbox">
            <select className="dropdown" name="method" id="">
              <option value="visa">VISA</option>
              <option value="rupay">RuPay</option>
              <option value="amex">AmEx</option>
            </select>
            <span className="customarrow"></span>
          </div>
          <label className="cardinputlabel" for="card--number">
            card number
          </label>
          <input
            type="text"
            name="card--number"
            className="cardinput"
            placeholder="card number"
          />
          <label for="exp" className="explabel">
            expires on
          </label>
          <br />
          <input
            className="expinp"
            type="text"
            name="exp"
            id=""
            placeholder="mm"
          />
          <span className="customslash">/</span>
          <input className="expinp" type="text" placeholder="yyyy" />
          <br />
          <label for="cvv">cvc/cvv code</label>
          <br />
          <input
            className="cvvinp"
            type="text"
            name="cvv"
            placeholder="cvc/cvv"
          />
          <br />
          <div className="rememberbox">
            <input name="remember" type="checkbox" />
            <label for="remember">Remember this card for later use.</label>
          </div>
          <div className="lastbox">
            <div className="price">
              <p>Total Price:</p>
              <h1>$249.99</h1>
            </div>
            <button className="buynow">Buy Now</button>
          </div>
        </form>
      </div>
    </>
  );
}
