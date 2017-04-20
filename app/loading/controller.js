import Ember from 'ember';

const DANK_MEMES = ['Spewing Pedantry', 'Being Scientifically Accurate', 'Lighting Crab Cigarettes', 'Hating Cats', 'Reading Bulbapedia', 'Waking Up Inside', 'Neglecting Editing', 'Skipping Pre-Production', 'Screaming into the Void', 'Weighing Porygons', 'Fragging Hikers', 'Warring Over Sticks', 'Fucking Fish', 'Misattributing Units', 'Ignoring Tier Names', 'Gitting Gud', 'Figuratively Hating Literally', 'Elongating the Laws Nipples', 'Editing Spreadsheets', 'Talking Over Each Other', 'Forgetting to Release Episodes', 'Making the Hard Sell'];

export default Ember.Controller.extend({
    currentMeme: null,
    init(){
        this.memeCallback();
    },

    memeCallback(){
        this.set('currentMeme', DANK_MEMES[getRandomIntInclusive(0, DANK_MEMES.length - 1)]);
        Ember.run.later(() => {
          this.memeCallback();
        }, 1000);
    }
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
