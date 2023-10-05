import day01 from './day01.module.css';

export default function Day01() {
    return (
        <>

            <div className={day01.bgday01}>

            </div>
            <div className={day01.box}>
                <h2>Agent Sign Up</h2>
                <p className={day01.description}>Hey, Enter your details to Sign Up</p>
                <form className={day01.formstyle} action="">
                    <input className={day01.emailinput} type="email" placeholder="enter email address" />
                    <input className={day01.passwordinput} type="password" placeholder="enter password" />
                    <input className={day01.passwordinput} type="password" placeholder="confirm password" />
                    <button className={day01.signupbtn}> Sign Up </button>
                </form>
                <div className={day01.textinbetween}>
                    <hr />
                    <p>or Sign In With</p>
                    <hr />
                </div>
                <div>
                    <button className={day01.buttons}>
                        {/* <i className={faBrands faGoogle}></i>  */}
                        Google</button>
                    <button className={day01.buttons}>
                        {/* <i className={faBrands faFacebook}></i>  */}
                        Facebook</button>
                    <button className={day01.buttons}>
                        {/* <i className={faBrands faGithub}></i>  */}
                        GitHub</button>
                </div>
            </div >
        </>
    )
}