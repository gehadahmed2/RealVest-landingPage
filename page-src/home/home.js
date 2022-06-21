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
      checkEmail:null,
      flag:false
    }
  },

  methods: {
    notifyMe() {
      this.flag = true

      try {
        axios.post('https://web.marsworkers.com/mail', {
          "email": this.email,
        }).then((response) => {
          if(response.data?.email){
            this.flag = false

          }
          this.success = response.data
          this.checkEmail =  response.data?.email[0]

        })


      } catch (e) {
        this.flag = false
        console.log(e, "error")
      }
    }
  },
  mounted() {
    this.screenWidth = screen.width
  },
}
