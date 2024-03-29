import { isPast, isToday } from 'date-fns'

const listShoppingSundays = [
  '2024-03-24',
  '2024-04-28',
  '2024-06-30',
  '2024-08-25',
  '2024-12-15',
  '2024-12-22',
  '2025-01-26',
  '2025-04-13',
  '2025-04-27',
  '2025-06-29',
  '2025-08-31',
  '2025-12-14',
  '2025-12-21'
]

const shoppingSundays = listShoppingSundays
  .filter((sunday) => !isPast(sunday) || isToday(sunday))
  .map((sunday) => new Date(sunday))

export default shoppingSundays
