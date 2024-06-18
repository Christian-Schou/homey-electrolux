'use strict';

import Homey from 'homey';

class Electrolux extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Electrolux has been initialized');
  }

}

module.exports = Electrolux;
