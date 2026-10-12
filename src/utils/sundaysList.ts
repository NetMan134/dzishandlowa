import { isPast, isToday } from 'date-fns'

const listShoppingSundays = [
  '2026-12-06',
  '2026-12-13',
  '2026-12-20',
  '2027-01-31',
  '2027-03-21',
  '2027-04-25',
  '2027-06-27',
  '2027-08-29',
  '2027-12-05',
  '2027-12-12',
  '2027-12-19',
  '2028-01-30',
  '2028-04-09',
  '2028-04-30',
  '2028-06-25',
  '2028-08-27',
  '2028-12-03',
  '2028-12-10',
  '2028-12-17',
  '2029-01-28',
  '2029-03-25',
  '2029-04-29',
  '2029-06-24',
  '2029-08-26',
  '2029-12-09',
  '2029-12-16',
  '2029-12-24'
]

const shoppingSundays = listShoppingSundays
  .filter((sunday) => !isPast(sunday) || isToday(sunday))
  .map((sunday) => new Date(sunday))

export default shoppingSundays
