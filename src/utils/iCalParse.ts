export class BMGShow {
  datetime: Date;
  title: string;
  location: string;
  constructor(dt: Date, name: string, place: string) {
    this.datetime = dt;
    this.title = name;
    this.location = place;
  }
}
function DTSTARTtoDate(dtstart: string): Date {
  let y = parseInt(dtstart.substring(0, 4));
  let m = parseInt(dtstart.substring(4, 6));
  let d = parseInt(dtstart.substring(6, 8));
  if (dtstart.includes("T")) {
    let timeStr = dtstart.split("T")[1];
    let h = parseInt(timeStr.substring(0, 2));
    let min = parseInt(timeStr.substring(2, 4));
    let s = parseInt(timeStr.substring(4, 6));
    return new Date(y, m - 1, d, h, min, s, 0);
  }
  return new Date(y, m - 1, d);
}
function veventToShow(vevent: string): BMGShow {
  let lines = vevent.split("\n");
  let summary = "";
  let datetime: Date;
  let location = "";

  lines.forEach(line => {
    let pair = line.split(":");
    if (pair[0].startsWith("SUMMARY")) {
      summary = pair[1];
    }
    if (pair[0].startsWith("LOCATION")) {
      location = pair[1].replaceAll("\\,", ",");
    }
    if (pair[0].startsWith("DTSTART")) {
      datetime = DTSTARTtoDate(pair[1]);
    }
  });
  return new BMGShow(datetime, summary, location);
}
function findAllOccurrences(str: string, substr: string): number[] {
  let result = [];

  let idx = str.indexOf(substr);

  while (idx !== -1) {
    result.push(idx);
    idx = str.indexOf(substr, idx + 1);
  }
  return result;
}
export function parseICalToShows(ical: string): BMGShow[] {
  let shows: BMGShow[] = [];
  let veventStartPoints = findAllOccurrences(ical, "BEGIN:VEVENT");
  for (let i = 0; i < veventStartPoints.length; i++) {
    shows.push(
      veventToShow(
        ical.substring(
          veventStartPoints[i],
          ical.indexOf("END:VEVENT", veventStartPoints[i])
        )
      )
    );
  }
  return shows;
}
