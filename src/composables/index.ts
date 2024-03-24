import { format, closestTo, isToday } from 'date-fns'
import shoppingSundays from '@/utils/sundaysList'

function useDates(dateFormat: string): string | boolean | unknown {
  if (dateFormat == 'todayFormatted') {
    return format(new Date(), 'PPP')
  } else if (dateFormat == 'nextWorkingSundayFormatted') {
    return format(
      closestTo(
        new Date(),
        useDates('isTodayWorkingSunday') ? shoppingSundays.toSpliced(0, 1) : shoppingSundays
      ) ?? 'error',
      'PPP'
    )
  } else if (dateFormat == 'upcommingWorkingSundaysFormatted') {
    return shoppingSundays
      .toSpliced(0, useDates('isTodayWorkingSunday') ? 2 : 1)
      .slice(0, 10)
      .map((sunday) => format(sunday, 'PPP'))
  } else if (dateFormat == 'isTodayWorkingSunday') {
    return shoppingSundays.some((d) => isToday(new Date(d)))
  } else if (dateFormat == 'isTodaySunday') {
    return format(new Date(), 'iiii') === 'niedziela'
  } else if (dateFormat == 'todayWeekday') {
    return format(new Date(), 'cccc')
  }
}

export { useDates }
