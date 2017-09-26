function px2px() {

  'use strict';

  let doc = document;
  let panelClass = 'p_panel';

  let controlsPanel;
  let controlsPanelHeader;
  let controlsPanelBody;

  let marginLeftInput;

  let onOffWrap;
  let onOff;
  let onOffLabel;
  let onOffFormControl;

  let px2pxBlock = doc.getElementsByClassName('px2px')[0];

  // создаём контрольную панель
  function createContolsPanel() {
    let targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);

    controlsPanelHeader = doc.createElement('div');
    controlsPanelHeader.classList.add('p_panel_header');
    controlsPanelHeader.innerHTML = '<div class="p_dragndrop">\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      </div>';
    controlsPanel.appendChild(controlsPanelHeader);

    controlsPanelBody = doc.createElement('div');
    controlsPanelBody.classList.add('p_panel_body');
    controlsPanelBody.innerHTML = '<div class="p_form-group">\
      <label for="">Слой с макетом</label>\
    <div class="p_input-group">\
      <input type="number" class="p_form-control p_form-control--mini" placeholder="0.7">\
      <input type="number" class="p_form-control p_form-control--mini" placeholder="0.7">\
      <button class="p_btn" type="submit">Выкл</button>\
      </div>\
      <small id="emailHelp" class="form-text text-muted">Прозрачность и фильтр</small>\
    </div>\
    <div class="p_form-group">\
      <label for="">Отступы (margin)</label>\
      <div class="p_input-group">\
      <input type="number" class="p_form-control" placeholder="0">\
      <input type="number" class="p_form-control" placeholder="0">\
      <input type="number" class="p_form-control" placeholder="0">\
      <input type="number" class="p_form-control" placeholder="0">\
      </div>\
      <small id="emailHelp" class="form-text text-muted">Значения в px</small>\
    </div>';
    controlsPanel.appendChild(controlsPanelBody);

    initControls();
  }

  // создаём контрольные элементы
  function initControls() {
    createOnOff();
    marginLeft();
  }

  // контрольный элемент: чекбокс вкл/выкл слоя
  function createOnOff() {

    onOffWrap = doc.createElement('div');
    onOffWrap.classList.add('form-check');
    // controlsPanelInner.appendChild(onOffWrap);

    onOff = doc.createElement('input');
    onOff.type = "checkbox";
    onOff.name = "onofctrl";
    onOff.id = "onOffControl";
    onOff.checked = true;

    onOffWrap.appendChild(onOff);

    onOffLabel = doc.createElement('label');
    onOffLabel.setAttribute("for", 'onOffControl');
    onOffWrap.appendChild(onOffLabel);

    onOffFormControl = doc.createElement('span');
    onOffFormControl.classList.add('form-check-control');
    onOffFormControl.innerHTML = "вкл/выкл";
    onOffLabel.appendChild(onOffFormControl);
  }

  function marginLeft() {
    marginLeftInput = doc.createElement('input');
    marginLeftInput.type = "text";
    marginLeftInput.name = "marginleft";
    marginLeftInput.value = "";
    marginLeftInput.id = "marginleft";
    marginLeftInput.placeholder = "marginLeftControl";

    // controlsPanelInner.appendChild(marginLeftInput);
  }

  // если есть нужный элемент на странице
  if (px2pxBlock) {

    // , то создаём контрольную панель
    createContolsPanel();

    document.body.className = "something";

    // и следим за положением чекбокса
    // doc.getElementById('onOffControl').onchange = function() {
    //   px2pxBlock.style.display = this.checked ? 'block' : 'none';
    // };

    // var p = document.getElementById("target");
    // var style = p.currentStyle || window.getComputedStyle(p);
    //
    // display("Current marginTop: " + style.marginTop);
  }
}

window.onload = function () {
  px2px();
};
