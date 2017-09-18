function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'controls-panel';
  let prefix = 'pg';

  let controlsPanel;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  function setClasses( elem, classes ) {
    if ( !elem ) {
      return;
    }

    if ( classes.length > 0 ) {
      classes.forEach( function ( className ) {
        elem.classList.add( className );
      });
    }
  }

  function saveLocalStorage(name, value) {
    let itemName = [prefix, name].join('-');
    localStorage[itemName] = value;
  }

  function createDragButton() {
    let input = doc.createElement('button');
    setClasses( input, [
      panelClass + '__control',
      panelClass + '__control--drag-n-drop'
    ]);
    input.setAttribute('type', 'button');
    input.innerHTML = ' ';

    controlsPanel.appendChild(input);

    input.onmousedown = function () {
      //Place it here to get real sizes after
      // external styles has been loaded
      let offsetTop = this.offsetTop;
      let offsetLeft = controlsPanel.clientWidth - this.clientWidth;
      let styles = getComputedStyle(controlsPanel);

      controlsPanel.style.top = styles.top;
      controlsPanel.style.left = styles.left;
      controlsPanel.style.right = 'auto';
      controlsPanel.style.bottom = 'auto';

      doc.onmousemove = function ( ev ) {
        let x = (ev.clientX - offsetLeft ) + 'px';
        let y = (ev.clientY) + 'px';

        controlsPanel.style.left = x;
        controlsPanel.style.top = y;
      };
    };

    input.onmouseup = function () {
      let styles = getComputedStyle(controlsPanel);
      let left = +styles.left.replace(/px/,'');
      let right = +styles.right.replace(/px/,'');
      let top = +styles.top.replace(/px/,'');
      let bottom = +styles.bottom.replace(/px/,'');

      if ( left > right ) {
        saveLocalStorage('left', 'auto');
        saveLocalStorage('right', styles.right);

        controlsPanel.style.right = styles.right;
        controlsPanel.style.left = 'auto';
      }
      else {
        saveLocalStorage('left', styles.left);
        saveLocalStorage('right', 'auto'); //'auto' needs to override default position;
      }
      if ( top > bottom ) {
        saveLocalStorage('top', 'auto');
        saveLocalStorage('bottom', styles.bottom);

        controlsPanel.style.bottom = styles.bottom;
        controlsPanel.style.top = 'auto';
      }
      else {
        saveLocalStorage('top', styles.top);
        saveLocalStorage('bottom', 'auto');
      }

      doc.onmousemove = null;
    };
  }

  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);
    let sides = ['top', 'right', 'bottom', 'left'];

    createDragButton();
  }

  if (px2pxBlock) {
    console.log('существует');
    createContolsPanel();
  } else {
    console.log('не существует');
  }
}

window.onload = function () {
  px2px();
};
