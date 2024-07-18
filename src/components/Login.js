import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
    const { user, error } = await supabase.auth.signIn({
        email,
        password,
    });
    if (error) console.error('Error logging in:', error);
    else console.log('User logged in:', user);
    };

    return (
    <div>
        <h2>Log In</h2>
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogIn}>Log In</button>
    </div>
    );
};

export default LogIn;
