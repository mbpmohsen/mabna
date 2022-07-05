import {useLayoutEffect, useState} from "react";

export const useScroll = (id: string) => {
    const [state, setState] = useState<boolean>(false);

    function trackScrolling () {
        const wrappedElement: HTMLElement| null = document.getElementById(id);

        if (!wrappedElement) return;

        try {
            if (isBottom(wrappedElement)) {
                setState(true);
                document.removeEventListener('scroll', trackScrolling);
                return;
            }

            return setState(false)
        } catch (e) {
            console.error(e);
        }

    }

    function isBottom(el: HTMLElement) {
        return el?.getBoundingClientRect()?.bottom <= window?.innerHeight;
    }

    useLayoutEffect(() => {
        document.addEventListener('scroll', trackScrolling, true);

        return () => document.removeEventListener('scroll', trackScrolling);
    },[]);

    return [state];
}