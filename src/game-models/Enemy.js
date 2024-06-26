// Враг.

class Enemy {
  constructor(args = {}) {
    this.generateSkin();
    this.position = args.position;
    this.isDead = false;
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.skin = '💀';
    // this.position = '?';
    // console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
