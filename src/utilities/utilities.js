export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const animationHandler = (text, parent, styles) => {
    return new Promise(async (resolve, reject) => {
        try {
            const nestedNode = document.createElement('span');
            const nesdtedStrgs = document.createTextNode(text);
            nestedNode.appendChild(nesdtedStrgs);
            await parent.appendChild(nestedNode);
            nestedNode.className = `${styles.animatedStrgs} ${styles.animate}`;
            
            nestedNode.addEventListener( 'animationend', () => {
                resolve('done');
            })
        } catch (error) {
            reject('failed');
        }
    })
}

const animatedText = (text, styles, parent) => {
    if (!text) return;

    return new Promise(async (resolve) => {        
        try {
            const strs = text.split('');
            for (let i=0; i<strs.length; i++){
                await animationHandler(strs[i], parent, styles);
                resolve();
            }
        } catch (error) {
            throw Error(error);
        }
    })
}

const clearAllText = (el) => {
    return new Promise((resolve, reject) => {
        try {
            while(el.firstChild){
                el.removeChild(el.firstChild);
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

export const bannerAnimatedText = async (styles, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) return;
            const banners = [ 'secure', 'safe', 'good'];
            const parentEl = document.getElementById(id);
        
            for (let i=0; i<banners.length; i++){
                await animatedText(banners[i], styles, parentEl);
                await sleep(3000);
                await clearAllText(parentEl);
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}
