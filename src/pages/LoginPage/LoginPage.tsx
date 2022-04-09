import React, {useContext} from "react"
import {AuthContext} from "../../firebase/AuthContext";
import {useNavigate} from "react-router-dom";
import {LoginForm} from "../../components/LoginForm";

const LoginPage: React.FC = () => {
    const user = useContext(AuthContext);
    const nav = useNavigate();
    if (user) {
        nav('/', {replace: true});
    }
    return (
       <LoginForm/>
    )
}

export default LoginPage
