import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../pages/Profile.tsx";
import { NavButton } from './NavButton.tsx';
import { ProfileContextValue } from "../types/Context";

export const ProfileNavigation = () => {
    const { currUser } = useContext<ProfileContextValue>(ProfileContext);
    const navigate = useNavigate();

    const paths = [
        `/profile/${currUser?._id}`,
        `about`,
        `friends`,
        `photos`,
        `videos`,
        `check-ins`,
        `likes`
    ];

    return (
        <nav className="profile-navigation-container">
            <hr />
            <div>
                {paths.map((path, idx) => {
                    const firstLetterUpper = path[0].toUpperCase();
                    const restOfStr = path.substring(1);
                    const content = (idx) ? `${firstLetterUpper}${restOfStr}` : 'Posts';
                    const navTo = () => navigate(path);
                    return <NavButton
                        content={content}
                        navTo={navTo}
                        key={content}
                    />;
                })}
            </div>
        </nav>
    )
}