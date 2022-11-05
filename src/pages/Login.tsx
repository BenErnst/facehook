import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks/useStoreTypes.ts';
import { useNavigate } from "react-router-dom";
import { loadUsers } from '../store/actions/userActions.tsx';
import { userService } from '../services/userService.tsx';
import { User } from '../types/User';
import { SubmitEvent, InputChangeEvent } from '../types/Form';


export const Login = () => {

    const { users } = useAppSelector(state => state.userModule);
    const [userName, setUserName] = useState<string>('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadUsers());
    }, [])

    const handleChange = (ev: InputChangeEvent) => {
        setUserName(ev.target.value);
    }

    const login = (ev: SubmitEvent) => {
        ev.preventDefault();
        const user: User = users.find(user => {
            const nameLower = user.name.first.toLowerCase();
            const inputLower = userName.toLowerCase();
            return (nameLower === inputLower);
        });
        if (user) {
            userService.setLoggedInUser(user);
            navigate('/home');
        };
    }

    return (
        <section>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    value={userName}
                    onChange={handleChange}
                    id="name"
                    name="name"
                    placeholder="Type here..."
                />
                <button style={{ background: 'lightblue' }}>LOGIN</button>
            </form>
            <h4 style={{ color: 'wheat', marginLeft: '25px' }}>Try: Ben</h4>
        </section>
    )
}

