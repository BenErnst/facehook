import React from "react";
import { User } from '../types/User';
import { UserPreview } from './UserPreview.tsx';

interface Props {
    users: User[]
}

export const UserList = (props: Props) => {
    return (
        <section className="user-list profile-layout">
            {props.users.map(user => <UserPreview user={user} key={user._id} />)}
        </section>
    )
}