import LangToggel from '../../../components/common/lang-toggel/lang-toggel.vue';

export default {
  components: {
    LangToggel
  },
  data() {
    return {
      screenWidth: ""
    }
  },
  mounted() {
    this.screenWidth = screen.width
  }
}