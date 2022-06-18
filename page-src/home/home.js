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
      success: null
    }
  },

  methods: {
    notifyMe() {
      try {
        axios.post('https://web.marsworkers.com/mail', {
          "email": this.email,
        }).then((response) => {
          this.success = response.data
          console.log(response, this.success,"response")

        })


      } catch (e) {
        console.log(e, "error")
      }
    }
  }
}
