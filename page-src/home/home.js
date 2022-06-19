import LangToggel from '../../components/common/lang-toggel/lang-toggel.vue';
import ToggelTheme from '../../components/common/toggel-theme/toggel-theme.vue'
import axios from 'axios'

export default {
  components: {
    LangToggel,
    ToggelTheme
  },

  data() {
    return {
      email: null,
      success: null,
      screenWidth:'',
      checkEmail:null
    }
  },

  methods: {
    notifyMe() {
      try {
        axios.post('https://web.marsworkers.com/mail', {
          "email": this.email,
        }).then((response) => {
          this.success = response.data
          this.checkEmail =  response.data?.email[0]
          console.log(response, this.success,"response")

        })


      } catch (e) {
        console.log(e, "error")
      }
    }
  },
  mounted() {
    this.screenWidth = screen.width
  },
  watch:{
    success:function(){
      this.notifyMe()
    },
    checkEmail:function(){
      this.notifyMe()
    },
  }
}
