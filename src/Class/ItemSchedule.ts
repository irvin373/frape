export default class ItemSchedule {
  name: string = '';
  color: string = 'white';
  day: string = '';
  hour: string = '';
  constructor(name: string, color: string, day: string, hour: string) {
    this.name = name;
    this.color = color;
    this.day = day;
    this.hour = hour;
  }
}
