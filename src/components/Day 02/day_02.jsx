import './style.css'

export default function Day02() {

    return (

        <div class="checkout--card">
            <h1>card Checkout</h1>
            <form action="">

                <label for="method">Payment Method</label><br />
                <div class="dropdown--box">

                    <select class="dropdown" name="method" id="">
                        <option value="visa">VISA</option>
                        <option value="rupay">RuPay</option>
                        <option value="amex">AmEx</option>
                    </select>
                    <span class="custom--arrow"></span>
                </div>
                <label class="card--input--label" for="card--number">card number</label>
                <input type="text" name="card--number" class="card--input" placeholder="card number" />
                    <label for="exp" class="exp--label">expires on</label><br />
                    <input class="exp--inp" type="text" name="exp" id="" placeholder="mm" /><span
                        class="custom--slash">/</span><input class="exp--inp" type="text" placeholder="yyyy" /><br />
                            <label for="cvv">cvc/cvv code</label><br />
                            <input class="cvv--inp" type="text" name="cvv" placeholder="cvc/cvv" /><br />
                                <div class="remember--box">
                                    <input name="remember" type="checkbox" />
                                        <label for="remember">Remember this card for later use.</label>
                                </div>
                                <div class="last--box">
                                    <div class="price">
                                        <p>Total Price:</p>
                                        <h1>$249.99</h1>
                                    </div>
                                    <button class="buy--now">Buy Now</button>
                                </div>
                            </form>
                        </div>

                        );
}