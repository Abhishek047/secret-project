import { useRef, useState, useEffect } from "react";

export const useOnScreen = ({ threshold }) => {
    const elementRef = useRef();
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        // observing function
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                threshold,
            }
        );

        // if ref hold an element
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // cleanup to stop observing
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, threshold]);

    return [elementRef, visible];
};
