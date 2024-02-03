import React from 'react'
import './profile-tabs.css';

export const ProfileTabs = () => {
    return (
        <div className='profile-tabs flex items-center gap-4'>
            <div className='profile-tab'>
                Followers
            </div>
            <div className='profile-tab'>
                Followings
            </div>
            <div className='profile-tab active'>
                Posts
            </div>
        </div>
    )
}
