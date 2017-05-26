import Ember from 'ember';

const DANK_MEMES = ['Spewing Pedantry', 'Being Scientifically Accurate', "Lighting Crab's Cigarettes", 'Reading Bulbapedia', 'Waking Up Inside', 'Neglecting Editing', 'Skipping Pre-Production', 'Screaming into the Void', 'Weighing Porygons', 'Fragging Hikers', 'Warring Over Sticks', 'Fucking Fish', 'Misattributing Units', 'Ignoring Tier Names', 'Figuratively Hating Literally', 'Elongating the Laws Nipples', 'Editing Spreadsheets', 'Talking Over Each Other', 'Hating On Co-Hosts', 'Forgetting Episode Releases', 'Making the Hard Sell', 'Not Speaking Weeab', 'Folding Japanese Steel', 'Dying In Fake Japan', 'Eating Well Done Berries', 'SAVAGE', 'Taking Skullbreakers', 'Browsing Hot Topic', 'Experiencing Ennui'];

export default Ember.Controller.extend({
    application: Ember.inject.controller(),
    currentMeme: null,
    init(){
        this.memeCallback();
    },

    memeCallback(){
        this.set('currentMeme', DANK_MEMES[getRandomIntInclusive(0, DANK_MEMES.length - 1)]);
        let id = Ember.run.later(() => {
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
