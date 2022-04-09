import React, {useContext} from "react"
import {AuthContext} from "../../firebase/AuthContext";
import {useNavigate} from "react-router-dom";
import {SignupForm} from "../../components/SignupForm";

const RegisterPage: React.FC = () => {
    const user = useContext(AuthContext);
    const nav = useNavigate();
    if (user) {
        nav('/', {replace: true});
    }
    return (
        <SignupForm/>
    )
}

export default RegisterPage
