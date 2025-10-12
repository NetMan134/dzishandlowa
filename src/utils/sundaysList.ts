import { isPast, isToday } from 'date-fns'

const listShoppingSundays = [
  '2025-12-07',
  '2025-12-14',
  '2025-12-21',
  '2026-01-25',
  '2026-03-29',
  '2026-04-26',
  '2026-06-28',
  '2026-08-30',
  '2026-12-06',
  '2026-12-13',
  '2026-12-20',
]

const shoppingSundays = listShoppingSundays
  .filter((sunday) => !isPast(sunday) || isToday(sunday))
  .map((sunday) => new Date(sunday))

export default shoppingSundays
