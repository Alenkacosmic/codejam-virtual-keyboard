const KeyBoard = {

    elements: {
        text: null,
        main: null,
        itemsContainer: null,
        currentState: 'en',
    },

    properties: {
        value: '',
        capsLock: false,
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
        
        const itemPosition = 
            [
                ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
                ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'BackSlash'],
                ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
                ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
                ['ControlLeft', 'AltLeft', 'Delete', 'PageUp', 'PageDown', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
            ]

            if (this.elements.currentState === 'en') { 

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
            } else { 

                itemPosition.forEach((line, index, box) => {

                    const lineElement = document.createElement('div');
                    lineElement.classList.add('row');
                    this.elements.itemsContainer.append(lineElement);

                    box[index].forEach(item => {
                        const itemElement = document.createElement('button');
                        itemElement.append(this.langChar[item][1]);
                        itemElement.classList.add('keyboard_item');
                        lineElement.append(itemElement);
                    });
                });
            }

    },

    
    backlight() {

        document.addEventListener('keydown', () => {

            let color = document.querySelector('.keyboard_item');
            color.classList.add('.keyboard_item--pressed');
        });

        // } else if(initialValue.type === 'mousedown') {
        //     let color = document.querySelector('.keyboard_item');
        //     color.classList.add('.keyboard_item:active');
        // }
       
    }
};


window.addEventListener('DOMContentLoaded', function() {
    
    KeyBoard.start();
    KeyBoard.addItems();
    KeyBoard.writing();
    KeyBoard.backlight();
    document.addEventListener('keyup', KeyBoard.writing);
    document.addEventListener('mouseup', KeyBoard.writing);
    document.addEventListener('keydown', KeyBoard.backlight);
    document.addEventListener('mousedown', KeyBoard.backlight);

});      