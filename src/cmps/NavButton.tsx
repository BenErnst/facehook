import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface Props {
    content: string,
    navTo: () => void
}

export const NavButton = (props: Props) => {
    const { content, navTo } = props;

    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        const { pathname } = location;
        onSetIsActive(pathname);
    }, [location, params])

    const onSetIsActive = (pathname) => {
        const idx = pathname.lastIndexOf('/');
        const lastParam = pathname.slice(idx + 1);
        const isOnPostsCmp = ((lastParam === params.id) && (content === 'Posts'));
        setIsActive(isOnPostsCmp || (lastParam === content.toLowerCase()));
    }

    return (
        <div
            className={`nav-btn${isActive ? ' active-btn' : ''}`}
            onClick={navTo}
        >
            <h5>{content}</h5>
        </div>
    )
}
