// let textMe = document.createElement('textarea');
// let body = document.querySelector('body');
// body.prepend(textMe);

const KeyBoard = {

    elements: {
        text: null,
        main: null,
        itemsContainer: null,
        items: []
    },

    eventHandlers: {
        oninput: null,
    },

    properties: {
        value: "",
        capsLock: false
    },

    start() {
        this.elements.text = document.createElement('textarea');
        this.elements.main = document.createElement('div');
        this.elements.itemsContainer = document.createElement('div');
    },

    _addItems() {

    },

    _triggerEvents(handlerName) {

    },

    _toggleCapsLock() {

    },

    writing(initialValue, oninput) {

    }
}    
    
window.onload(function() {
    KeyBoard.start();
});
    

// document.createElement('div');
// let texting = document.createElement('textarea');
// let body = document.querySelector('body');
// body.prepend(keyboard);
// body.prepend(texting);
    