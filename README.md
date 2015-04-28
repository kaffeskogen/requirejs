# InputManager and a Singleton-example
A simple singleton input-manager in JavaScript, using requireJS.

## How-to

Put the InputManager.js beside your main.js.

In the *bottom* of InputManager.js, add your wanted keys to 
>InputManager.KEY_CODES
and
>InputManager.DEFAULT_STATE

Check if the 'w' on the keyboard is pressed with
>InputManager.isPressed('w');

A singleton-example for requirejs is included under js/classes/Singleton.js.
