import React from 'react'
import { useIntl } from 'react-intl'
import { getNumberOfWeeksFromToday } from './util'

export const Data = () => {
  const { formatRelativeTime } = useIntl()
  const data = '2019-04-12T11:42:51+0200'


  console.log('===================');
  console.log(data);
  console.log(getNumberOfWeeksFromToday(data));
  console.log(formatRelativeTime(getNumberOfWeeksFromToday(data)));
  console.log('===================');

  // const weeks = -153

  return (
    <h1>{formatRelativeTime(getNumberOfWeeksFromToday(data), 'week', {
      style: 'long',
    })}</h1>
  )
}
