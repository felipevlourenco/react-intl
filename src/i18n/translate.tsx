import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl'

const translate = (id: string, values: { [key: string]: string | ReactElement } = {}) =>
  <FormattedMessage id={id} values={{ ...values }} />

export default translate