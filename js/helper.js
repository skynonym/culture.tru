export function	createRootElement(tag, classes, attributes) {
		const rootElement = document.createElement(tag);
		if (classes) {
			for (const cssClass of classes) {
				rootElement.classList.add(cssClass);
			}
		}
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				rootElement.setAttribute(attr[0], attr[1]);
			}
		}
		return rootElement;
	}


export function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}