// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero({ boomerang: this.boomerang });
    this.enemy = new Enemy({ position: this.trackLength - 1 });
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (
      this.enemy.isDead === false &&
      this.boomerang.position < this.enemy.position - 1
    ) {
      this.boomerang.moveRight();
    } else if (
      this.enemy.isDead === false &&
      this.boomerang.position === this.enemy.position - 1
    ) {
      this.enemy.isDead = true;
      this.enemy.die();
    } else if (
      this.enemy.isDead === true &&
      this.boomerang.position > this.hero.position + 1
    ) {
      this.boomerang.moveLeft();
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    const gameTime = setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      if (this.hero.position + 1 === this.boomerang.position) {
        this.track[this.boomerang.position + 1] = ' ';
        this.view.render(this.track);
        console.log('\nYou win!\n');
        clearInterval(gameTime);
      }
    }, 50);
  }
}

module.exports = Game;
