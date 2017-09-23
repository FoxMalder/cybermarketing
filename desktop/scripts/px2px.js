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
  let onOffFormСontrol;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  // создаём контрольную панель
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

  // создаём контрольные элементы
  function initControls() {
    marginLeftInput = doc.createElement('input');
    marginLeftInput.type = "text";
    marginLeftInput.name = "marginleft";
    marginLeftInput.value = "";
    marginLeftInput.id = "marginleft";
    marginLeftInput.placeholder = "marginLeftControl";

    controlsPanelInner.appendChild(marginLeftInput);

    createOnOff();
  }

  // контрольный элемент: чекбокс вкл/выкл слоя
  function createOnOff() {

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

    onOffFormСontrol = doc.createElement('span');
    onOffFormСontrol.classList.add('form-check-control');
    onOffFormСontrol.innerHTML = "вкл/выкл";
    onOffLabel.appendChild(onOffFormСontrol);
  }

  // если есть нужный элемент на странице
  if (px2pxBlock) {

    // , то создаём контрольную панель
    createContolsPanel();

    // следим за положением чекбокса
    doc.getElementById('onOffControl').onchange = function() {
      px2pxBlock.style.display = this.checked ? 'block' : 'none';
    };

  }

}

window.onload = function () {
  px2px();
};
