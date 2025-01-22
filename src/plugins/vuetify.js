import '@mdi/font/css/materialdesignicons.css';  // استيراد الأيقونات
import 'vuetify/styles'; // استيراد الأنماط الأساسية لVuetify

import { createVuetify } from 'vuetify'; // استيراد Vuetify

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
        }
      },
      dark: {
        colors: {
          background: '#121212',
          surface: '#121212',
        }
      }
    }
  },
  defaults: {
    VBtn: {
      style: {
        fontFamily: 'Tajawal, serif',
      },
    },
  },
 
});
