import React, { useEffect, useState } from 'react';
import { AppHeader } from '../cmps/AppHeader.tsx';
import { useAppSelector } from '../hooks/useStoreTypes.ts';
import { UserList } from '../cmps/UserList.tsx';


export const Home = () => {

    const { users } = useAppSelector(state => state.userModule);

    // const loadingGIF = <img src={require(`../assets/img/loading.gif`)} className="loading-gif" />;

    return (
        <React.Fragment>
            <AppHeader />
            <section>
                <h1>Home</h1>
                <hr />

                {(users.length) ?
                    <>
                        <h1>{users.length}</h1>
                        <UserList users={users} />
                    </> : null}
            </section>
        </React.Fragment>
    );
};
