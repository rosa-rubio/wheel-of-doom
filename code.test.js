const logobutton  = require('./javascript/select-gamers.js');

    
test('Al hacer click, el botón del logo nos redirige a la página 1', () => {
    const button =  document.createElement('button');

    document.body.appendChild(button);

    logobutton.click(button);
    expect(console.log).toHaveBeenCalledWith('¡Click!');
});
