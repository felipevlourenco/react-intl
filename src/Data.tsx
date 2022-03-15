import React from 'react'
import { useIntl } from 'react-intl'

export const Data = () => {
  const { formatRelativeTime } = useIntl()
  // const data = '2019-04-12T11:42:51+0200'
  const weeks = -153

  return (
    <h1>{formatRelativeTime(weeks, 'week', {
      style: 'long',
    })}</h1>
  )
}
