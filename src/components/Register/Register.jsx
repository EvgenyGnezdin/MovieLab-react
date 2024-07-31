import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import Form from '../Form/Form'

const Register = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
                handleClick={handleRegister}
            />
        </div>
    );
};

export default Register;