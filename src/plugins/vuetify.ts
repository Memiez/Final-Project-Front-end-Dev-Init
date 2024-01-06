import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  // คุณสามารถเพิ่มตัวเลือกเพิ่มเติมเช่น themes, icons ฯลฯ
})

export default vuetify