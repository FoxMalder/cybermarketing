function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'px2px-controls';
  let panelClassInner = 'px2px-controls_inner';

  let controlsPanel;
  let controlsPanelInner;

  let marginLeftInput;

  let onOffWrap;
  let onOff;
  let onOffLabel;
  let onOffСontrol;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);

    controlsPanelInner = doc.createElement('div');
    controlsPanelInner.classList.add(panelClassInner);
    controlsPanel.appendChild(controlsPanelInner);

    initControls();
  }

  function initControls() {
    marginLeftInput = doc.createElement('input');
    marginLeftInput.type = "text";
    marginLeftInput.name = "marginleft";
    marginLeftInput.value = "";
    marginLeftInput.id = "marginleft";
    marginLeftInput.placeholder = "marginLeftControl";

    controlsPanelInner.appendChild(marginLeftInput);

    onOffWrap = doc.createElement('div');
    onOffWrap.classList.add('form-check');
    controlsPanelInner.appendChild(onOffWrap);

    onOff = doc.createElement('input');
    onOff.type = "checkbox";
    onOff.name = "onofctrl";
    onOff.id = "onOffControl";
    onOff.checked = true;

    onOffWrap.appendChild(onOff);

    onOffLabel = doc.createElement('label');
    onOffLabel.setAttribute("for", 'onOffControl');
    onOffWrap.appendChild(onOffLabel);

    onOffСontrol = doc.createElement('span');
    onOffСontrol.classList.add('form-check-control');
    onOffСontrol.innerHTML = "вкл/выкл";
    onOffLabel.appendChild(onOffСontrol);
  }

  if (px2pxBlock) {
    createContolsPanel();
  }

}

window.onload = function () {
  px2px();

  document.getElementById('onOffControl').onchange = function() {
    document.getElementsByClassName('px2px')[0].style.display = this.checked ? 'block' : 'none';
  };
};
