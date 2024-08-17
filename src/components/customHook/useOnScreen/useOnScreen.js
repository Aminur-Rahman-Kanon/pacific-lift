import { useState, useEffect } from "react";

const useOnScreen = (refs, currentPath, setCurrentPath) => {
    //state to set cuurent status of the target element intersection
    const [intersectingEl, setIntersectingEl] = useState('');

    useEffect(() => {
        if (!refs) return;

        Object.keys(refs).forEach(el => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting){
                    setIntersectingEl(el);
                    currentPath && setCurrentPath('');
                }
            }, {
                threshold: 0.15
            })

            observer.observe(refs[el].current);
        })
    }, [currentPath]);
    
    return intersectingEl;
}

export default useOnScreen;
