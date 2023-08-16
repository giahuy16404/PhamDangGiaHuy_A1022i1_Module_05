import React from "react";

function SignUp(props) {
    console.log("A")
    return (
        <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <form>
                    <img className="mb-4"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                         alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Đăng ký</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control email" id="floatingInput"
                               placeholder="name@example.com"/>
                        <label>Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control email" id="floatingInput"
                               placeholder="name@example.com"/>
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control email" id="floatingInput"
                               placeholder="name@example.com"/>
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control email" id="floatingInput"
                               placeholder="name@example.com"/>
                        <label>Email address</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={props.onClick}>Đăng nhập
                    </button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
