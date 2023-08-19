import {Component} from "react";

class Header extends Component {
    render() {
        return (
            <>
                <h2>{this.props.nameStudent}</h2>
                <h2>{this.props.idStudent || "Chưa đăng nhập"}</h2>
                <h1>Danh sách học sinh</h1>
            </>
        )
    }
}

export default Header;
