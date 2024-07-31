import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import  Form  from "../Form/Form";

const Login = () => {
    const dispatch = useDispatch()
    const navigateTo = useNavigate()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigateTo('/')
            })
            .catch(console.error)  
    }
    return (
        <div>
            <Form 
                handleClick={handleLogin}
            />
        </div>
    );
};

export default Login;