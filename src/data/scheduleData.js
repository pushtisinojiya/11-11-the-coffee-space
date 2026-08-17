export const SCHEDULE = {
  timezone: 'Asia/Kolkata',
  days: [
    { day: 'Monday', open: '16:00', close: '23:30', formatted: '4:00 PM – 11:30 PM' },
    { day: 'Tuesday', open: '16:00', close: '23:30', formatted: '4:00 PM – 11:30 PM' },
    { day: 'Wednesday', open: '16:00', close: '23:30', formatted: '4:00 PM – 11:30 PM' },
    { day: 'Thursday', open: '16:00', close: '23:30', formatted: '4:00 PM – 11:30 PM' },
    { day: 'Friday', open: '16:00', close: '23:30', formatted: '4:00 PM – 11:30 PM' },
    { day: 'Saturday', open: '11:00', close: '23:30', formatted: '11:00 AM – 11:30 PM' },
    { day: 'Sunday', open: '11:00', close: '23:30', formatted: '11:00 AM – 11:30 PM' }
  ]
};

export function getLiveOperatingStatus() {
  const now = new Date();
  const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: 'numeric', minute: 'numeric', weekday: 'long' };
  
  try {
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    const weekday = parts.find(p => p.type === 'weekday')?.value || 'Monday';
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);

    const currentTimeMin = hour * 60 + minute;
    const todaySchedule = SCHEDULE.days.find(d => d.day === weekday) || SCHEDULE.days[0];

    const [openH, openM] = todaySchedule.open.split(':').map(Number);
    const [closeH, closeM] = todaySchedule.close.split(':').map(Number);

    const openTimeMin = openH * 60 + openM;
    const closeTimeMin = closeH * 60 + closeM;

    const isOpen = currentTimeMin >= openTimeMin && currentTimeMin < closeTimeMin;

    return {
      isOpen,
      statusText: isOpen ? `Open Now • Rooftop Serving Until 11:30 PM` : `Closed Now • Opens at ${todaySchedule.formatted.split('–')[0].trim()}`,
      todayFormatted: todaySchedule.formatted,
      weekday
    };
  } catch (e) {
    return {
      isOpen: true,
      statusText: 'Open Now • Rooftop Serving in Jamnagar',
      todayFormatted: '4:00 PM – 11:30 PM',
      weekday: 'Today'
    };
  }
}
