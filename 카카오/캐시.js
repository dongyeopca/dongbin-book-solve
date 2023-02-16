function solution(cacheSize, cities) {
  var answer = 0;
  const cache = [];
  if (cacheSize == 0) {
    return cities.length * 5;
  }
  for (let city of cities) {
    city = city.toUpperCase();
    let index = cache.indexOf(city);
    if (index != -1) {
      //캐시 히트
      const remove = cache.splice(index, 1);
      cache.push(...remove);
      answer += 1;
    } else {
      //캐시 미스
      if (cache.length == cacheSize) {
        cache.shift(); //lru
      }
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}
