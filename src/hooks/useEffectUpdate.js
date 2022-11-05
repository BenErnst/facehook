import { useRef, useEffect } from "react";

export const useEffectUpdate = (cb, dependencies) => {
    const isMounting = useRef(true);
    useEffect(() => {
        if (isMounting.current) {
            isMounting.current = false;
            return;
        }
        cb();
    }, dependencies);
}
