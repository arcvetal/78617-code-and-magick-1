'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
//
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getFullName = function (nameArr, secondNameArr) {
  return nameArr[getRandomElement(nameArr.length)] + ' ' + secondNameArr[getRandomElement(secondNameArr.length)];
};

var getRandomElement = function (max) {
  return Math.floor(Math.random() * max);
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: getFullName(WIZARD_NAMES, WIZARD_SECOND_NAMES),
    coatColor: COAT_COLORS[getRandomElement(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomElement(EYES_COLORS.length)]
  };
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;

};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// console.log(getRandomElement(8));
document.querySelector('.setup-similar').classList.remove('hidden');
