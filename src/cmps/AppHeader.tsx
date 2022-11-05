import React, { useEffect } from 'react';
import { SearchInput } from './SearchInput.tsx';
import { ProfilePic } from './ProfilePic.tsx';
import { useAppSelector, useAppDispatch } from '../hooks/useStoreTypes.ts';
import { loadLoggedInUser } from '../store/actions/userActions.tsx';
import { useNavigate } from "react-router-dom";
import { NavButton } from './NavButton.tsx';

interface Props {
    isOwnProfile: boolean
}

export const AppHeader = (props: Props) => {
    const { isOwnProfile } = props;

    const { loggedInUser } = useAppSelector(state => state.userModule);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const profilePicStyle = { width: 30, height: 30 };

    useEffect(() => {
        dispatch(loadLoggedInUser());
    }, []);

    const navToHome = () => {
        navigate('/home');
    }

    const navToProfile = () => {
        navigate(`/profile/${loggedInUser._id}`);
    }

    return (
        <div className='app-header-container'>

            <main className='app-header'>
                <section className='leftContainer'>
                    <button onClick={() => navigate('/')}>⬅ Login</button>
                    <img
                        src={require(`../assets/img/icons/mainIcon.png`)}
                        onClick={navToHome}
                    />
                    <SearchInput />
                </section>

                <NavButton content={'HOME'} navTo={navToHome} />

                <section className={'rightContainer'}>
                    {loggedInUser &&
                        <div
                            className={`loggedInUserPreview ${isOwnProfile && 'isOwnProfile'}`}
                            onClick={navToProfile}
                        >
                            <ProfilePic
                                picUrl={loggedInUser.media.profilePictureUrl}
                                style={profilePicStyle}
                            />
                            <strong>{loggedInUser.name.first}</strong>
                        </div>}
                </section>
            </main >

        </div>
    )
};


