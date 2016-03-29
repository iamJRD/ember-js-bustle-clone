import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content')
      };
      this.sendAction('save2', params);
    }
  }
});
