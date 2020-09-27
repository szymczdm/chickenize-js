const CONFIG = {
    imgSourceDir: './chickens/',
    imageFilenames: ['chicken1.png', 'chicken2.png'],
    replacementText: ['Chicken', 'Bok'],
    target: document.body, 
    delay: 1000,
    delayModifier: 10,
    randomizeNodes: true
}

const chickenRegEx = new RegExp(/[^\s]+/g);

function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function injectChickens(nodeValue) {
    if (typeof CONFIG.replacementText === 'string') {
        return nodeValue.replace(chickenRegEx, CONFIG.replacementText);
    }
    else {
        return nodeValue.replace(chickenRegEx, CONFIG.replacementText[getRandomIndex(CONFIG.replacementText.length)]);
    }
}

function chickenize(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = injectChickens(node.nodeValue);
    }
    else if (node instanceof HTMLImageElement || node instanceof HTMLIFrameElement) {
        let imageFilenameToUse = CONFIG.imageFilenames[getRandomIndex(CONFIG.imageFilenames.length)];
        node.src = CONFIG.imgSourceDir + imageFilenameToUse;
    }
    else if (window.getComputedStyle(node).getPropertyValue('background-image') !== 'none') {
        let imageFilenameToUse = CONFIG.imageFilenames[getRandomIndex(CONFIG.imageFilenames.length)];
        node.style.backgroundImage = `url("${CONFIG.imgSourceDir + imageFilenameToUse}")`;
    }
}

function getChickenizeableNodes(target){
    let result = [];
    if (target.nodeType !== Node.COMMENT_NODE && target.nodeName !== 'script' && (target.nodeType === Node.TEXT_NODE || target instanceof HTMLImageElement || 
            target instanceof HTMLIFrameElement || window.getComputedStyle(target).getPropertyValue('background-image') !== 'none')) {
        result.push(target);
    }
    let childResult = [];
    target.childNodes.forEach(node => {
        let tempResult = getChickenizeableNodes(node);
        if (tempResult.length > 0) {
            childResult = childResult.concat(tempResult);
        }
    })
    return result.concat(childResult);
}

function delayedChickenization(soonToBeChickens, delay, delayModifier, randomize) {
    let index;
    let newDelay = delay - delayModifier;
    if (newDelay < 0) {
        newDelay = 0;
    }
    if (randomize) { 
        index = getRandomIndex(soonToBeChickens.length);
    }
    else {
        index = 0;
    }
    setTimeout(() => {
        chickenize(soonToBeChickens[index]);
        soonToBeChickens.splice(index, 1);
        if (soonToBeChickens.length > 0) {
            delayedChickenization(soonToBeChickens, newDelay, delayModifier, randomize)
        } else {
            console.log('BOK BOK BOK')
        }
    }, newDelay);
}

function releaseTheChickens (target, delay, delayModifier, randomize) {
    let soonToBeChickens = getChickenizeableNodes(target);
    if (soonToBeChickens.length > 0) {
        if (delay > 0) {
            delayedChickenization(soonToBeChickens, delay + delayModifier, delayModifier, randomize);
        }
        else {
            soonToBeChickens.forEach(chickenize);
        }
    }
    console.log('Chickens incoming');
}

window.onload = () => document.getElementById('egg').addEventListener('click', () => 
    releaseTheChickens(CONFIG.target, CONFIG.delay, CONFIG.delayModifier, CONFIG.randomizeNodes));