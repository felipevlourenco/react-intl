import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import { LOCALES } from './locales'
import messages from './messages'

interface ProviderProp {
  children: React.ReactElement
  locale: string
}

const Provider = ({ children, locale = LOCALES.ENGLISH }: ProviderProp) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}

export default Provider