function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'px2px-controls';
  let panelClassWrap = 'px2px-controls_inner';

  let controlsPanel;
  let controlsPanelWrap;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);

    controlsPanelWrap = doc.createElement('div');
    controlsPanelWrap.classList.add(panelClassWrap);

    controlsPanel.appendChild(controlsPanelWrap);
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
