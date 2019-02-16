import ItemSchedule from './ItemSchedule'
import HashDays from './HashDays'

export default class Row {
  HourSchedule: Array<ItemSchedule>;
  constructor(hourRate: string, day: string = '/')  {
    this.HourSchedule = new Array<ItemSchedule>(7);
    this.HourSchedule[0] = new ItemSchedule(hourRate, '', '/', hourRate)
  }

  insertElement(scheduleItem: ItemSchedule): void {
    let day: string = scheduleItem.day
    let positionDay: number = HashDays[day]
    this.HourSchedule[positionDay] = scheduleItem
  }

  getDayName (): string {
    return this.HourSchedule[0].day
  }
}