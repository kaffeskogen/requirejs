# InputManager and a Singleton-example
A simple singleton input-manager in JavaScript, using requireJS.

## How-to

Put the InputManager.js beside your main.js.

In the *bottom* of InputManager.js, add your wanted keys to 

```javascript
InputManager.KEY_CODES
```

and

```javascript
InputManager.DEFAULT_STATE
```

Include the module at the top of your main-file.
```javascript
require(['InputManager'], function(InputManager) {
  ...
```

Check if the 'w' on the keyboard is pressed with (returns either true or false).
```javascript
InputManager.isPressed('w');
```

It also remembers if a key has been pressed and returns true once if that's the case.

A singleton-example for requirejs is included under js/classes/Singleton.js.
