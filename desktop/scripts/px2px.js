function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'px2px-controls';

  let controlsPanel;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);
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
