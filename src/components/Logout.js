import React from 'react';
import { supabase } from './supabaseClient';

const LogOut = () => {
    const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error);
    else console.log('User logged out');
    };

    return (
    <button onClick={handleLogOut}>Log Out</button>
    );
};

export default LogOut;
