function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'px2px-controls';
  let panelClassInner = 'px2px-controls_inner';

  let controlsPanel;
  let controlsPanelInner;

  let marginLeftInput;
  let onOff;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);

    controlsPanelInner = doc.createElement('div');
    controlsPanelInner.classList.add(panelClassInner);
    controlsPanel.appendChild(controlsPanelInner);

    marginLeftInput = doc.createElement('input');
    marginLeftInput.type = "text";
    marginLeftInput.name = "marginleft";
    marginLeftInput.value = "";
    marginLeftInput.id = "marginleft";
    marginLeftInput.placeholder = "marginLeftControl";

    controlsPanelInner.appendChild(marginLeftInput);

    onOff = doc.createElement('input');
    onOff.type = "checkbox";
    onOff.name = "onOff";
    onOff.value = "on";
    onOff.id = "onOffControl";

    controlsPanelInner.appendChild(onOff);

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
