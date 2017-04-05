import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async submitForm() {
      const contact = this.store.createRecord('contacts', this.formValues);

      await contact.save()

      this.set('formValues', {});
      this.transitionToRoute('contact')
    }
  }
});
