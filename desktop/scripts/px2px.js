function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'px2px-controls';
  let panelClassWrap = 'px2px-controls_inner';

  let controlsPanel;
  let controlsPanelWrap;
  let elemento;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];


  function CheckForm(){
    var checked=false;
    var elements = document.querySelector('input[id="checkbe"]');
    for(var i=0; i < elements.length; i++){
      if(elements[i].checked) {
        checked = true;
      }
    }
    if (checked) {
      console.log('fsdfsdf');
      px2pxBlock.classList.add('lol');
    }
    return checked;
  }

  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);

    controlsPanelWrap = doc.createElement('div');
    controlsPanelWrap.classList.add(panelClassWrap);

    controlsPanel.appendChild(controlsPanelWrap);

    let checkbox = doc.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "gdfgg";
    checkbox.value = "gdfggd";
    checkbox.id = "checkbe";

    controlsPanel.appendChild(checkbox);
  }

  if (px2pxBlock) {
    console.log('существует');
    createContolsPanel();
    CheckForm();
  } else {
    console.log('не существует');
  }
}

window.onload = function () {
  px2px();
};
