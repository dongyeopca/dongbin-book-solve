function solution(m, musicinfos) {
  const timecalculator = (time) => {
    let [hour, minute] = time.split(':');
    return parseInt(hour) * 60 + parseInt(minute);
  };
  let temp = [];
  m = m.replaceAll('C#', 'c').replaceAll('D#', 'd').replaceAll('F#', 'f').replaceAll('G#', 'g').replaceAll('A#', 'a');

  for (let music of musicinfos) {
    let [start, end, title, melody] = music.split(',');
    let playedtime = timecalculator(end) - timecalculator(start);
    melody = melody.replaceAll('C#', 'c').replaceAll('D#', 'd').replaceAll('F#', 'f').replaceAll('G#', 'g').replaceAll('A#', 'a');
    melody = melody.repeat(Math.floor(playedtime / melody.length)) + melody.slice(0, playedtime % melody.length);
    let reg = new RegExp(`${m}`, 'g');
    if (melody.match(reg)) {
      temp.push([playedtime, title]);
    }
  }
  if (temp.length) {
    temp.sort((a, b) => b[0] - a[0]);
    return temp[0][1];
  }
  return '(None)';
}
