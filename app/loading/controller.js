import { later } from '@ember/runloop';
import Controller, { inject as controller } from '@ember/controller';

const DANK_MEMES = ['Spewing Pedantry', 'Reading Sudowoodo Monthly', 'Spreadsheet Panic', 'Exterminating Grimers', 'Being Scientifically Accurate', "Lighting Crab's Cigarettes", 'Reading Bulbapedia', 'Waking Up Inside', 'Neglecting Editing', 'Skipping Pre-Production', 'Screaming into the Void', 'Weighing Porygons', 'Redrawing Maps', 'Warring Over Sticks', 'Getting Tinitus', 'Misattributing Units', 'Being the Tyrannical Majority', 'Elongating the Laws Nipples', 'Editing Spreadsheets', 'Talking Over Each Other', 'Hating On Co-Hosts', 'Forgetting Episode Releases', 'Making the Hard Sell', 'Not Speaking Weeab', 'Dying In Fake Japan', 'Eating Well Done Berries', 'SAVAGE', 'Taking Skullbreakers', 'Browsing Hot Topic', 'Experiencing Ennui'];

export default Controller.extend({
    application: controller(),
    currentMeme: null,
    init(){
        this.memeCallback();
    },

    memeCallback(){
        this.set('currentMeme', DANK_MEMES[getRandomIntInclusive(0, DANK_MEMES.length - 1)]);
        let id = later(() => {
          this.memeCallback();
        }, 1000);
        this.get('application').set('memeCallback', id);
    }
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
