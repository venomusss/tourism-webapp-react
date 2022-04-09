import React, {useContext} from "react"
import {AuthContext} from "../../firebase/AuthContext";
import {useNavigate} from "react-router-dom";
import {SignupForm} from "../../components/SignupForm";

const RegisterPage: React.FC = () => {
    const user = useContext(AuthContext);
    const nav = useNavigate();
    return (
        <SignupForm/>
    )
}

export default RegisterPage
