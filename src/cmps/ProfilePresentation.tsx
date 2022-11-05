import React, { useContext } from "react";
import { ProfileContext } from "../pages/Profile.tsx";
import { ProfileContextValue } from "../types/Context";
import { PresentationDetails } from './PresentationDetails.tsx';
import { ProfileNavigation } from './ProfileNavigation.tsx';

export interface Props {
    isOwnProfile: boolean,
    isAFriend: boolean,
    handleFriendship: () => void
}

export const ProfilePresentation = (props: Props) => {
    const { isOwnProfile, isAFriend, handleFriendship } = props;
    const { currUser } = useContext<ProfileContextValue>(ProfileContext);
    const { media: { coverPhotoUrl } } = currUser;

    return (
        <section className='presentation-container'>
            <div className="cover-photo-container">
                {coverPhotoUrl && <img src={coverPhotoUrl} />}
            </div>
            <main className="profile-layout">
                <div>
                    <PresentationDetails />
                    <div>
                        <button onClick={handleFriendship} disabled={isOwnProfile}>
                            {isOwnProfile ? 'Myself' : isAFriend ? 'Unfriend' : 'Add Friend'}
                        </button>
                    </div>
                </div>
                <ProfileNavigation />
            </main>
        </section>
    )
}