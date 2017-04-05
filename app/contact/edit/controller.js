import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async saveContact(changeset) {
      await changeset.save();

      this.transitionToRoute('contact');
    }
  }
});
