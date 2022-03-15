import React from 'react'
import { useIntl } from 'react-intl'
import { getNumberOfWeeksFromToday } from './util'
import _format from 'date-fns/format';
import _parseISO from 'date-fns/parseISO';

export const Data = () => {
  const { formatRelativeTime } = useIntl()
  const data = '2019-04-12T11:42:51+0200'


  console.log('===================');
  console.log(data);
  console.log(getNumberOfWeeksFromToday(data));
  console.log(formatRelativeTime(getNumberOfWeeksFromToday(data)));
  console.log('===================');
  console.log(_format(_parseISO(data), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"));
  console.log('===================');

  // const weeks = -153

  return (
    <h1>{formatRelativeTime(getNumberOfWeeksFromToday(data), 'week', {
      style: 'long',
    })}</h1>
  )
}
