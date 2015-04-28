require.config({
    baseUrl: 'js/'
});

require(['classes/InputManager'], function(InputManager) {

    setInterval(function() {
        if (InputManager.isPressed('w')) {
            document.body.innerHTML = 'The key \'W\' is pressed.';
        } else {
            document.body.innerHTML = 'The key \'W\' is not pressed.';
        }
    }, 1000/60);

});
