import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { deep } from '@theme-ui/presets'
export default ({ element }) => (
  <ThemeProvider theme={deep}>{element}</ThemeProvider>
)
