const colors = [{
    hex: '#0260E8',
    rgb: '2,96,232'
  }, {
    hex: '#51EAFF',
    rgb: '81,234,255'
  },
  {
    hex: '#7AB1FF',
    rgb: '122,177,255'
  },
  {
    hex: '#00CF91',
    rgb: '0,207,145'
  },
  {
    hex: '#004156',
    rgb: '0,65,86'
  },
  {
    hex: '#4D8802',
    rgb: '77,136,2'
  },
  {
    hex: '#FFD600',
    rgb: '255,214,0'
  },
  {
    hex: '#FFE9A0',
    rgb: '255,233,160'
  },
  {
    hex: '#FE9E76',
    rgb: '254,158,118'
  },
  {
    hex: '#FF6B00',
    rgb: '255,107,0'
  },
  {
    hex: '#E85668',
    rgb: '232,86,104'
  },
  {
    hex: '#F59BAF',
    rgb: '245,155,175'
  },
  {
    hex: '#460000',
    rgb: '70,0,0'
  },
  {
    hex: '#DC3790',
    rgb: '220,55,144'
  },
  {
    hex: '#380438',
    rgb: '56,4,56'
  },
  {
    hex: '#761CEA',
    rgb: '118,28,234'
  },
  {
    hex: '#58595B',
    rgb: '88,89,91'
  },
  {
    hex: '#BBC9DD',
    rgb: '187,201,221'
  },
  {
    hex: '#F6522E',
    rgb: '246,82,46'
  },
  {
    hex: '#1E3C00',
    rgb: '30,60,0'
  }
]


const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onPaletteBoxClick)

function createColorCardMarkup(array) {
  return array.map(({
    hex,
    rgb
  }) => {
    return ` 
      <div class="color__card">
        <div class="color__view" 
        data-hex="${hex}" 
        data-rgb="${rgb}"
        style = "background-color: ${hex}" >
        </div> 
        <div class="color__info">
        HEX: ${hex}
        RGB: ${rgb}
        </div>
      </div>
  `
  }).join('');
}

function onPaletteBoxClick(evt) {
  const colorEl = evt.target;
  const colorParentEl = evt.target.closest('.color__card');

  if (!colorEl.classList.contains('color__view')) {
    return
  }

  removeActiveColorCard();
  addActiveClassCard(colorParentEl);
  setBodyBgColor(colorEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveColorCard() {
  const currentActiveCard = document.querySelector('.color__card.is-active')

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveClassCard(card) {
  card.classList.add('is-active');

}