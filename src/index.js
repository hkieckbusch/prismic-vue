import prismic from 'prismic-javascript'

import EditButton from './components/EditButton.vue'
import Embed from './components/Embed.vue'
import Image from './components/Image.vue'
import Link from './components/Link.vue'
import RichText from './components/RichText.vue'

const PrismicVue = {
  install: function (Vue, options = {}) {
    Vue.prototype.$prismic = prismic
    Vue.prototype.$prismic.endpoint = options.endpoint
    Vue.prototype.$prismic.linkResolver = options.linkResolver
    Vue.prototype.$prismic.htmlSerializer = options.htmlSerializer

    Vue.component('PrismicEditButton', EditButton)
    Vue.component('PrismicEmbed', Embed)
    Vue.component('PrismicImage', Image)
    Vue.component('PrismicLink', Link)
    Vue.component('PrismicRichText', RichText)
  }
}

export default PrismicVue