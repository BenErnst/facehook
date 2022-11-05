import { User } from '../types/User';

export interface ProfileContextValue {
    currUser: User | null,
    friends: User[],
    mutualFriends: User[]
}