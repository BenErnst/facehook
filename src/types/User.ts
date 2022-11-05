export interface User {
    _id?: string | undefined,
    name: UserName,
    password: string,
    media: UserMedia,
    postsData: UserPostsData,
    info: UserInfo,
    friendsIds: UserId[],
    checkIns: UserCheckIn[],
    likedPagesIds: string[],
}

export type UserId = User['_id'];

interface UserName {
    first: string,
    last: string
}

export interface UserMedia {
    profilePictureUrl: string,
    coverPhotoUrl: string
}

interface UserPostsData {
    uploadedPostsIds: string[],
    taggedPostsIds: string[]
}

interface UserInfo {
    workPlaces: UserWorkPlace[],
    educations: UserEducation[],
    residence: UserResidence,
    relationship: UserRelationship
}

interface UserWorkPlace {
    id: string,
    company: string,
    position: string,
    isCurrent: boolean
}

interface UserEducation {
    id: string,
    school: string,
    subject: string,
    degree: string,
    isGraduated: boolean
}

interface UserResidence {
    current: string,
    origin: string
}

interface UserRelationship {
    type: string
}

interface UserCheckIn {
    address: string,
    coords: CheckInCoords,
    visitedAt: number
}

interface CheckInCoords {
    lat: number,
    lng: number
}