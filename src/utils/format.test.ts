import { formatDate, formatPlayerTime, formatRunTime } from './format.ts';
import { DateFormats } from '../const/date.ts';

describe('Utils: Formats', () => {
  it('should format player time', () => {
    const mockTime = 1000;
    const mockDuration = 10000;
    expect(formatPlayerTime(mockTime, mockDuration)).toEqual('-02:30:00');
    expect(formatPlayerTime(mockTime, mockTime)).toEqual('-00:00');
  });

  it('should format dates', () => {
    const mockDate = 'Sun October 11 1994';
    expect(formatDate(mockDate, DateFormats.Standard)).toEqual('October 11, 1994');
    expect(formatDate(mockDate, DateFormats.Short)).toEqual('1994-10-11');
  });

  it('should format run time', () => {
    const mockMinutes = 100;
    expect(formatRunTime(mockMinutes)).toEqual('1h 40m');
  });
});
