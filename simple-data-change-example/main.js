new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Aiyaz Khorajia',
    city: 'Ahmedabad'
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
       'What is up!' :
       'Hello World!';
    }
  }
});
