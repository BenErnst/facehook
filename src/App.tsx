import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/global.scss';
import { userService } from './services/userService.tsx';
import { Login } from './pages/Login.tsx';
import { Home } from './pages/Home.tsx';
import { Profile } from './pages/Profile.tsx';
import { useAppDispatch } from './hooks/useStoreTypes.ts';
import { loadUsers } from './store/actions/userActions.tsx';
import { Posts } from './pages/profile-routes/Posts.tsx';
import { About } from './pages/profile-routes/About.tsx';
import { Friends } from './pages/profile-routes/Friends.tsx';
import { Photos } from './pages/profile-routes/Photos.tsx';
import { Videos } from './pages/profile-routes/Videos.tsx';
import { CheckIns } from './pages/profile-routes/CheckIns.tsx';
import { LikedPages } from './pages/profile-routes/LikedPages.tsx';


export function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    return (
        <BrowserRouter>
            <div>
                <main>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile/:id" element={<Profile />}>
                            <Route index element={<Posts />} />
                            <Route path='about' element={<About />} />
                            <Route path='friends' element={<Friends />} />
                            <Route path='photos' element={<Photos />} />
                            <Route path='videos' element={<Videos />} />
                            <Route path='check-ins' element={<CheckIns />} />
                            <Route path='likes' element={<LikedPages />} />
                        </Route>
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
