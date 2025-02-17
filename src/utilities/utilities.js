export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const disableScroll = () => {
    const positionTop = window.screenY || document.documentElement.scrollTop;
    const positionLeft = window.screenX || document.documentElement.scrollLeft;

    window.onscroll = () => window.scrollTo(positionLeft, positionTop);
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
                await clearAllText(parentEl);
                await animatedText(banners[i], styles, parentEl);
                await sleep(3000);
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

export const focusElement = (index, styles) => {
    const inputContainer = document.querySelectorAll(`.${styles.inputContainer}`);
    const label = inputContainer[index].children[0];
    const input = inputContainer[index].children[1];
    if (input.value === ''){
        label.className = `${styles.label} ${styles.activeLabel}`;
        input.placeholder = '';
        // input.className = `${styles.input} ${styles.activeInput}`;
    }
}

export const leaveFocus = (index, styles) => {
    const inputContainer = document.querySelectorAll(`.${styles.inputContainer}`);
    const label = inputContainer[index].children[0];
    const input = inputContainer[index].children[1];
    if (input.value === ''){
        input.placeholder = label.textContent;
        // input.className = `${styles.input}`;
        label.className = `${styles.label}`;
    }
}
