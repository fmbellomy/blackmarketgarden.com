import { BMGShow, parseICalToShows } from "./iCalParse";
import { XMLHttpRequest } from "xmlhttprequest";

export function checkCalendar(): BMGShow[] {
  const ICAL_URI =
    "https://calendar.google.com/calendar/ical/blackmarketgardenband%40gmail.com/public/basic.ics";

  const kill = new XMLHttpRequest();
  kill.open("GET", ICAL_URI, false);
  kill.send();
  let calendar = kill.responseText;
  return parseICalToShows(calendar);
}
