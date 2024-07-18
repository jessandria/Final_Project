import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) console.error('Error signing up:', error);
    else console.log('User signed up:', user);
    };

    return (
    <div>
        <h2>Sign Up</h2>
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
        <button onClick={handleSignUp}>Sign Up</button>
    </div>
    );
};

export default SignUp;
