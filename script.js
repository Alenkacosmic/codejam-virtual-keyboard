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
        value: '',
        capsLock: false
    },

    langChar: {
        'Backquote': ['\`', '~'],
        'Digit1': ['1', '1', '!'], 
        'Digit2': ['2', '2', '@'], 
        'Digit3': ['3', '3', '#'], 
        'Digit4': ['4', '4', '$'], 
        'Digit5': ['5', '5', '%'], 
        'Digit6': ['6', '6', '^'], 
        'Digit7': ['7', '7', '&'], 
        'Digit8': ['8', '8', '*'], 
        'Digit9': ['9', '9', '('], 
        'Digit0': ['0', '0', ')'], 
        'Minus': ['-', '-', '_'], 
        'Equal': ['=', '=', '+'], 
        'Backspace': ['Backspace', 'Backspace'],
        'Tab': ['Tab', 'Tab'], 
        'KeyQ': ['q', 'й'], 
        'KeyW': ['w', 'ц'], 
        'KeyE': ['e', 'у'], 
        'KeyR': ['r', 'к'], 
        'KeyT': ['t', 'е'], 
        'KeyY': ['y', 'н'], 
        'KeyU': ['u', 'г'], 
        'KeyI': ['i', 'ш'], 
        'KeyO': ['o', 'щ'], 
        'KeyP': ['p', 'з'], 
        'BracketLeft': ['[', 'х', '{'], 
        'BracketRight': [']', 'ъ', '}'], 
        'BackSlash': ['\\', '\\', '|'],
        'CapsLock': ['Caps Lock', 'Caps Lock'], 
        'KeyA': ['a', 'ф'], 
        'KeyS': ['s', 'ы'], 
        'KeyD': ['d', 'в'], 
        'KeyF': ['f', 'а'], 
        'KeyG': ['g', 'п'], 
        'KeyH': ['h', 'р'], 
        'KeyJ': ['j', 'о'], 
        'KeyK': ['k', 'л'], 
        'KeyL': ['l', 'д'], 
        'Semicolon': [';', 'ж', ':'], 
        'Quote': ['\'', 'э', '"'], 
        'Enter': ['Enter', 'Enter'],
        'ShiftLeft': ['Shift', 'Shift'], 
        'KeyZ': ['z', 'я'], 
        'KeyX': ['x', 'ч'], 
        'KeyC': ['c', 'с'], 
        'KeyV': ['v', 'м'], 
        'KeyB': ['b', 'и'], 
        'KeyN': ['n', 'т'], 
        'KeyM': ['m', 'ь'], 
        'Comma': [',', 'б', '<'], 
        'Period': ['.', 'ю', '>'], 
        'Slash': ['/', '/', '?'], 
        'ShiftRight': ['Shift', 'Shift'],
        'ControlLeft': ['Ctrl', 'Ctrl'], 
        'AltLeft': ['Alt', 'Alt'], 
        'Delete': ['Delete', 'Delete'], 
        'PageUp': ['PgUp', 'PgUp'], 
        'PageDown': ['PgDn', 'PgDn'], 
        'Space': [' ', ' '], 
        'AltRight': ['Alt', 'Alt'], 
        'ControlRight': ['Ctrl', 'Ctrl'], 
        'ArrowLeft': ['Left', 'Left'], 
        'ArrowUp': ['Up', 'Up'],
        'ArrowRight': ['Right', 'Right'], 
        'ArrowDown': ['Down', 'Down']
    },

    start() {
        this.elements.text = document.createElement('textarea');
        this.elements.main = document.createElement('div');
        this.elements.itemsContainer = document.createElement('div');

        this.elements.text.classList.add('write_me');
        this.elements.main.classList.add('keyboard');
        this.elements.itemsContainer.classList.add('keyboard_items');

        this.elements.main.append(this.elements.itemsContainer);
        document.body.prepend(this.elements.main);
        document.body.prepend(this.elements.text);
    },

    addItems() {
        
        const itemPosition = [
            ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
            ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'BackSlash'],
            ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
            ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
            ['ControlLeft', 'AltLeft', 'Delete', 'PageUp', 'PageDown', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
        ];

        itemPosition.forEach((line, index, box) => {

            const lineElement = document.createElement('div');
            lineElement.classList.add('row');
            this.elements.itemsContainer.append(lineElement);

            box[index].forEach(item => {
                const itemElement = document.createElement('button');
                itemElement.append(this.langChar[item][0]);
                itemElement.classList.add('keyboard_item');
                lineElement.append(itemElement);
            });
        });

    },

    triggerEvent(handlerName) {

    },

    toggleCapsLock() {

    },

    writing(initialValue, oninput) {
        
        console.log(initialValue);


    },

    lighthning() {
        
    }

    toggleShift() {
        
    }
}
window.addEventListener('DOMContentLoaded', function() {
    KeyBoard.start();
    KeyBoard.addItems();
    document.addEventListener('keydown', KeyBoard.writing);
    document.addEventListener('mouseup', KeyBoard.writing);
});


    


  
    //                     // switch (item) {

                //     case 'Backspace':
                //         itemElement.classList.add('keyboard_item--big');
                //         itemElement.addEventListener('click', () => {
                //             this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                //             this._triggerEvent('oninput');
                //         });
                //         break;

                //     case 'CapsLock':
                //         itemElement.classList.add('keyboard_item--big');
                //         itemElement.addEventListener('click', () => {
                //             this._toggleCapsLock();
                //             itemElement.classList.toggle('keyboard_item:active', this.properties.capsLock);
                //         });
                //         break;

                //     case 'Enter':
                //         itemElement.classList.add('keyboard_item--big');
                //         itemElement.addEventListener('click', () => {
                //             this.properties.value += '\n';
                //             this._triggerEvent('oninput');
                //         });
                //         break;

                //     case 'Tab':
                //         itemElement.classList.add('keyboard_item--big');
                //         itemElement.addEventListener('click', () => {
                //             this.properties.value += '    ';
                //             this._triggerEvent('oninput');
                //         });
                //         break;

                //     case 'Space':
                //         itemElement.classList.add('keyboard_item--biggest');
                //         itemElement.addEventListener('click', () => {
                //             this.properties.value += ' ';
                //             this._triggerEvent('oninput');
                //         });
                //         break;

                //     default:
                //         itemElement.textContent = item.toLowerCase();
                //         itemElement.addEventListener('click', () => {
                //             this.properties.value += this.properties.capsLock ? item.toUpperCase() : item.toLowerCase();
                //             this._triggerEvent('oninput');
                //         });
                //         break;
                // }
    
    //     _triggerEvent(handlerName) {
    //         if (typeof this.eventHandlers[handlerName] == "function") {
    //             this.eventHandlers[handlerName](this.properties.value);
    //         }
    //     },
    
    //     _toggleCapsLock() {
    //         this.properties.capsLock = !this.properties.capsLock;
    
    //         for (const key of this.elements.keys) {
    //             if (key.childElementCount === 0) {
    //                 key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
    //             }
    //         }
    //     },
    
    //     open(initialValue, oninput, onclose) {
    //         this.properties.value = initialValue || "";
    //         this.eventHandlers.oninput = oninput;
    //         this.eventHandlers.onclose = onclose;
    //         this.elements.main.classList.remove("keyboard--hidden");
    //     },
    
    //     close() {
    //         this.properties.value = "";
    //         this.eventHandlers.oninput = oninput;
    //         this.eventHandlers.onclose = onclose;
    //         this.elements.main.classList.add("keyboard--hidden");
    //     }
    // };
    
    // window.addEventListener("DOMContentLoaded", function () {
    //     Keyboard.init();
    // });