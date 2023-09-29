import './style.css'

export default function Day01() {
    return (
        <div class="box">
            <h2>Agent Sign Up</h2>
            <p class="description">Hey, Enter your details to Sign Up</p>
            <form class="form--style" action="">
                <input class="email--input" type="email" placeholder="enter email address" />
                <input class="password--input" type="password" placeholder="enter password" />
                <input class="password--input" type="password" placeholder="confirm password" />
                <button class="signup-btn"> Sign Up </button>
            </form>
            <div class="text--in--between">
                <hr />
                <p>or Sign In With</p>
                <hr />
            </div>
            <div>
                <button class="buttons"><i class="fa-brands fa-google"></i> Google</button>
                <button class="buttons"><i class="fa-brands fa-github"></i> GitHub</button>
                <button class="buttons"><i class="fa-brands fa-facebook"></i> Facebook</button>
            </div>
        </div>
    )
}