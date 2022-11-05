import { useEffect, useRef } from 'react';


export const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const txt = 'Search Facehook';
    const txtWithEmoji = `🔍 ${txt}`;
    const placeholderByEvent = {
        focus: txt,
        blur: txtWithEmoji
    };

    useEffect(() => {
        const input = searchRef.current;
        const events = Object.keys(placeholderByEvent) as string[];
        events.forEach((ev): void => {
            input?.addEventListener(ev, () => {
                input.placeholder = placeholderByEvent[ev];
            });
        });
    }, [])

    return <input type="text" placeholder={txtWithEmoji} ref={searchRef} />
}

