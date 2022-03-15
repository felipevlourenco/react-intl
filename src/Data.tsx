import React, { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { getNumberOfWeeksFromToday, isSafari, formatDateSafari } from './util'
import _parseISO from 'date-fns/parseISO';

export const Data = () => {
  const { formatRelativeTime } = useIntl()
  const data = '2019-04-12T11:42:51+0200'
  const parse = _parseISO(data).toUTCString()

  console.log('===================');
  console.log(data);
  console.log(getNumberOfWeeksFromToday(data));
  console.log(formatRelativeTime(getNumberOfWeeksFromToday(data), 'week', {
    style: 'long',
  }));
  console.log('===================');
  console.log(parse);
  console.log(getNumberOfWeeksFromToday(parse));
  console.log(formatRelativeTime(getNumberOfWeeksFromToday(parse), 'week', {
    style: 'long',
  }));
  console.log('===================');

  const formattedDate = useMemo(() => {
    return formatRelativeTime(getNumberOfWeeksFromToday(
      isSafari() ? formatDateSafari(data) : data
    ), 'week', {
      style: 'long',
    })
  }, [formatRelativeTime]);

  return (
    <h1>{formattedDate}</h1>
  )
}
