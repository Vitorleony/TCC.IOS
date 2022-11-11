

function generateGamesList() { 
    var gamesContainer = document.querySelector(".GameItemGrid-module__fixedSizeGrid___RZZqw"); 
    var gamesList = gamesContainer.childNodes[0].childNodes
    var gamesArray = [];
    gamesList.forEach((game) => {
      if (game.childNodes[0].childNodes[0].childNodes[0] !== undefined) {
        gamesArray.push({
          image: 'https://'+game.childNodes[0].childNodes[0].childNodes[0].srcset.split('//')[2].split(' ')[0],
          title: game.childNodes[1].childNodes[0].innerText,
        })
      }
    });
    gamesArray.forEach((gameItem) => {
      if (!document.querySelector('.app')) {
        var body = document.querySelector('body'); var app = document.createElement('div'); app.classList.add('app');
        body.appendChild(app);
        app.style.width = '100vw';
        app.style.height = '100vh';
        app.style.backgroundColor = '#fff';
        app.style.position = 'fixed';
        app.style.left = '0';
        app.style.top = '0';
        app.style.zIndex = '999';
        app.innerHTML = `<div style="width: 100%; min-height: 94vh; padding: 2rem;"><pre>${JSON.stringify({games: gamesArray})}</pre></div>`
      }
    })
  }