import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
    fetchProfile();
    }, []);

    const fetchProfile = async () => {
    const user = supabase.auth.user();
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    if (error) console.error('Error fetching profile:', error);
    else setProfile(data);
    };

    const updateProfile = async () => {
    const user = supabase.auth.user();
    const { error } = await supabase
        .from('profiles')
        .update(profile)
        .eq('id', user.id);
    if (error) console.error('Error updating profile:', error);
    };

    return (
    <div>
        <h2>Profile</h2>
        <input
        type="text"
        value={profile.username || ''}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        placeholder="Username"
        />
        <input
        type="text"
        value={profile.bio || ''}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        placeholder="Bio"
        />
        <button onClick={updateProfile}>Update Profile</button>
    </div>
    );
};

export default Profile;
