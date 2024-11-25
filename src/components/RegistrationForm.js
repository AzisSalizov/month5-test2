import React, {useState} from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setError('');
        setSuccess('')
    }

    const handleRegister = () => {
        const {username, password, confirmPassword} = formData;
        if (!username || !password || !confirmPassword) {
            setError('Все поля обязательны!');
            return;
        }
        if (password !== confirmPassword) {
            setError('Пароли не совпадают!')
            return;
        }
        if (users.find(user => user.username === username)) {
            setError('Данный пользователь уже зарегистрирован!')
            return;
        }
        setUsers([...users, {username, password}]);
        setSuccess('Пользователь успешно зарегистрирован!');
        setFormData({username: "", password: "", confirmPassword: ""});

    }
    return (
        <div >
            <h2>Registration Form</h2>
            <div className="registration-block">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                <button onClick={handleRegister}>Register</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </div>


        </div>
    );
};
export default RegistrationForm;