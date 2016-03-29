import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,

  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },

    update(story) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    },
  }
});
