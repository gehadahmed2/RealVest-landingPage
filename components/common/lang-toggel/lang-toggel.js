export default {
    data() {
        return {
            toggle: false
        }
    },
    methods: {
        openDropdown() {
            this.toggle = !this.toggle
        },
        toggleLanguage() {
            let newLang;
            if (this.$i18n.locale == 'ar') {
                newLang = 'en';
            } else if (this.$i18n.locale == 'en') {
                newLang = 'ar';
            }

            this.$i18n.locale = newLang;

            // if (this.isNode) {
            //     if (this.$cookies) { // check for handling storybook mode
            //         this.$cookies.set('lang-cookie', newLang, {
            //             path: "/",
            //             maxAge: 60 * 60 * 24
            //         });
            //     }
            // } else {
            //     this.$i18n.setLocale(newLang)
            //     // window.location = 
            //     this.$router.push(this.switchLocalePath(newLang))
            //     // this.$router.replace(this.switchLocalePath(newLang));
            // }

        }
    },
}