const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }

  read(str) {
    [...str].forEach(letter => {
      this.emit('letter', letter);
    });

    this.emit('end');
  }
};

