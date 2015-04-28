define([], function() {
    var instance = null;

    var InputManager = function() {
        var _this = this;
        this.state = InputManager.DEFAULT_STATE;
        this.keyCodes = InputManager.KEY_CODES;

        window.addEventListener('keydown', onkeydown);
        window.addEventListener('keyup', onkeyup);

        function onkeydown(e) {
            var key = _this.getKeyFromKeyCode(e.keyCode);
            if (typeof(key) !== 'undefined') _this.setState(key, 'down');
        }
        
        function onkeyup(e) {
            var key = _this.getKeyFromKeyCode(e.keyCode);
            if (typeof(key) !== 'undefined') _this.setState(key, 'up');
        }
    }

    InputManager.prototype = {
        getState: function(key) {
            if (typeof(key) === 'undefined' || key === null) return this.state;
            return this.state[key.toLowerCase()];
        },

        getAvailableStateTypes: function() {
            return InputManager.AVAILABLE_STATE_TYPES;
        },

        getDefaultKeyStateType: function() {
            return InputManager.DEFAULT_KEY_STATE_TYPE;
        },

        getKeyFromKeyCode: function(keyCode) {
            var kc = this.keyCodes;
            for (var k in kc) {
                if (kc.hasOwnProperty(k) && kc[k] === keyCode) {
                    return k;
                }
            }
            return undefined;
        },

        isPressed: function(key) {
            key = key.toLowerCase();

            var state = this.getState(key);
            var stateTypes = this.getAvailableStateTypes();
            var keyState;

            keyState = this.getState(key);

            switch (keyState) {
                case stateTypes.up:
                    return false;
                    break;
                case stateTypes.down:
                    return true;
                    break;
                case stateTypes.pressed:
                    this.resetKey(key);
                    return true;
                    break;
                default:
                    console.error('Keystate "' + keyState + '" does not exist.');
                    return false;
                    break;
            }
        },

        resetKey: function(key) {
            var defaultKeyStateType = this.getDefaultKeyStateType();
            this.setState(key, defaultKeyStateType);
        },

        setState: function(key, state) {
            var stateTypes = this.getAvailableStateTypes();
            this.state[key.toLowerCase()] = stateTypes[state.toLowerCase()];
        }
    }

    InputManager.getInstance = function() {

        if (instance === null) {
            instance = new InputManager();
        }

        return instance;
    };

    InputManager.KEY_CODES = {
        left:  37,
        right: 39,
        up:    38,
        down:  40,
        enter: 13,

        w:     87,
        a:     65,
        s:     83,
        d:     68
    };

    InputManager.AVAILABLE_STATE_TYPES = {
        up:      0,
        down:    1,
        pressed: 2 
    };

    InputManager.DEFAULT_KEY_STATE_TYPE = 'up';

    InputManager.DEFAULT_STATE = {
        right: InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        left:  InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        up:    InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        down:  InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        enter: InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        w:     InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        a:     InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        s:     InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE],
        d:     InputManager.AVAILABLE_STATE_TYPES[InputManager.DEFAULT_KEY_STATE_TYPE]
    };


    return InputManager.getInstance();
});