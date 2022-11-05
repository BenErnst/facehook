import React, { useContext, useEffect, useState } from "react";
import { ProfilePic } from './ProfilePic.tsx';
import { FriendsCount } from './FriendsCount.tsx';
import { FriendsAvatars } from './FriendsAvatars.tsx';
import { ProfileContext } from "../pages/Profile.tsx";
import { ProfileContextValue } from "../types/Context";

export const PresentationDetails = () => {
    const { currUser, friends } = useContext<ProfileContextValue>(ProfileContext);
    const {
        name: {
            first: firstName,
            last: lastName
        },
        media: { profilePictureUrl }
    } = currUser;

    const profilePicStyle = {
        width: 168,
        height: 168,
        border: '3px solid #2d2d2d'
    };

    return (
        <section className="presentation-details-container">
            <ProfilePic
                picUrl={profilePictureUrl}
                style={profilePicStyle}
            />
            <aside>
                <h1>{`${firstName} ${lastName}`}</h1>
                {friends.length ? <FriendsCount /> : null}
                <FriendsAvatars />
            </aside>
        </section>
    )
}