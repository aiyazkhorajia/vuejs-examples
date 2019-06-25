new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Aiyaz Khorajia',
    city: 'Ahmedabad',
    cityImage: 'https://bit.ly/2SKJPqJ'
  },
  methods: {
    changeCity() {
      if (this.city === 'Ahmedabad') {
        this.city = 'Lagos';
        this.cityImage = 'https://bit.ly/2Rd4gQ3';
      } else {
      	this.city = 'Ahmedabad';
        this.cityImage = 'https://bit.ly/2SKJPqJ';
      }
    }
  }
});
