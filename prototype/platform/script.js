document.addEventListener('click', function(e) {
    var elementText = e.target.innerText;
    var elementType = e.target.nodeName;
 
    if (elementType === 'BUTTON') {
        switch(elementText) {
            case 'Projects':
                var hiddenDiv = document.querySelector('#RevealProjectButton');
                if (hiddenDiv.style.display === 'none') {
                    $(hiddenDiv).show();
                } else {
                    $(hiddenDiv).hide();
                }
                break;
            case 'New Project':
                alert('I have made you a new project!');
                break;
            case 'Home':
                var homeSubMenu = document.querySelector('.homeSubMenu');
                if (homeSubMenu.style.display === 'none') {
                    $(homeSubMenu).show();
                } else {
                    $(homeSubMenu).hide();
                }
                break;
            case 'Not Home':
                var notHomeSubMenu = document.querySelector('.notHomeSubMenu');
                if (notHomeSubMenu.style.display === 'none') {
                    $(notHomeSubMenu).show();
                } else {
                    $(notHomeSubMenu).hide();
                }
                break;
            case 'Go further':
                var furtherSubMenu = document.querySelector('.furtherSubMenu');
                if (furtherSubMenu.style.display === 'none') {
                    $(furtherSubMenu).show();
                } else {
                    $(furtherSubMenu).hide();
                }
                break;
            default:
                // Do nothing
                break;
        }
    }
});