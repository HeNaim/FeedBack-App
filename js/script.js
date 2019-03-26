

Vue.component('bad',{
 
  template: `
  <div class="bad">

                <div class="bad-image">
                <img :src=".\assets\smiles\bad.png"/>
                </div>

                <div class="bad-info" align="center">
                        <h1>{{ name1 }}</h1>
                        <h1>{{ name2 }}</h1>
                        <button v-on:click="goToSecPage">בחר</button>   

                </div>

    </div>
                
  `,
  data(){
    return {
      nameInHeb:"לא טוב",
      nameInEn: "Bad"
    }
  },
  methods: {
    goToSecPage() {
      location.replace("https://www.w3schools.com")
  },
  
  computed: {
    name1(){
      return this.nameInHeb
    },
    name2(){
      return this.nameInEn
    }
  }
}
})




var app = new Vue({
    el: '#app',
    data: {
      choice: 1
    },
    methods: {
      updateCart() {
        
      }
    }

  })

  function GoToChooseWhyPage() {
    location.replace("\ChooseWhyPage.html")
  }

  function GoToWelcomePage() {
    location.replace("\WelcomePage.html")
  }

  function GoToThankYouPage() {
    location.replace("\ThankYouPage.html")
  }