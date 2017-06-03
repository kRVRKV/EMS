document.addEventListener('click', function(e) {
    var elementText = e.target.innerText;
    var elementType = e.target.nodeName;

    if (elementType === 'BUTTON') {
        switch(elementText) {
            case 'Prototype': //  had to change the name
                var hiddenDiv = document.querySelector('#RevealProjectButton');
                if (hiddenDiv.style.display === 'none') {
                    $(hiddenDiv).show();
                } else {
                    $(hiddenDiv).hide();
                }
                break;
<<<<<<< HEAD
            //case 'New Project':
            //    alert('I have made you a new project!');
            //    break;
            case 'Home':
                var homeSubMenu = document.querySelector('.homeSubMenu');
                if (homeSubMenu.style.display === 'none') {
                    $(homeSubMenu).show();
=======
          //  case 'New Project':
          //      alert('I have made you a new project!');
          //      break;
            case 'Projects':
                var projSubMenu = document.querySelector('.projSubMenu');
                if (projSubMenu.style.display === 'none') {
                    $(projSubMenu).show();
                } else {
                    $(projSubMenu).hide();
                }
                break;

            case 'New Project':
                var newProjSubMenu = document.querySelector('.newProjSubMenu');
                if (newProjSubMenu.style.display === 'none') {
                    $(newProjSubMenu).show();
                } else {
                    $(newProjSubMenu).hide();
                }
                break;

            case 'Start a new session':
                var startNewSeshSubMenu = document.querySelector('.startNewSeshSubMenu');
                if (startNewSeshSubMenu.style.display === 'none') {
                    $(startNewSeshSubMenu).show();
                } else {
                    $(startNewSeshSubMenu).hide();
                }
                break;

            case 'Review existing session':
                var reviewExistSeshSubMenu = document.querySelector('.reviewExistSeshSubMenu');
                if (reviewExistSeshSubMenu.style.display === 'none') {
                    $(reviewExistSeshSubMenu).show();
>>>>>>> master
                } else {
                    $(reviewExistSeshSubMenu).hide();
                }
                break;

            case 'Import a model':
                var importModSubMenu = document.querySelector('.importModSubMenu');
                if (importModSubMenu.style.display === 'none') {
                    $(importModSubMenu).show();
                } else {
                    $(importModSubMenu).hide();
                }
                break;

            case 'Reports':
                var reportSubMenu = document.querySelector('.reportSubMenu');
                if (reportSubMenu.style.display === 'none') {
                    $(reportSubMenu).show();
                } else {
                    $(reportSubMenu).hide();
                }
                break;

            default:
                // Do nothing
                break;
        }
    }
});
