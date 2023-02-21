function solution(n, build_frame) {
  var answer = [[]];
  const frames = [];
  for (const build of build_frame) {
    const [x, y, struct, type] = build;
    if (!type) {
      //삭제
      del(x, y, struct);
    } else {
      //설치
      if (add(x, y, struct, frames)) {
        frames.push([x, y, struct]);
      }
    }
  }

  function add(x, y, struct, frames) {
    //0이 기둥 1이 보
    if (struct) {
      if (
        frames.find(([nx, ny, nstruct]) => {
          return !nstruct && y - 1 == ny && (x == nx || x + 1 == nx);
        })
      )
        return true;
      if (
        frames.find(([nx, ny, nstruct]) => {
          return nstruct && y == ny && x - 1 == nx;
        }) &&
        frames.find(([nx, ny, nstruct]) => nstruct && y == ny && x + 1 == nx)
      )
        return true;
    } else {
      if (y == 0) return true;
      if (
        frames.find(([nx, ny, nstruct]) => {
          return nstruct && y == ny && (nx == x - 1 || nx == x);
        })
      )
        return true;
      if (
        frames.find(([nx, ny, nstruct]) => {
          return !nstruct && ny == y - 1 && nx == x;
        })
      )
        return true;
    }
    return false;
  }

  function del(x, y, struct) {
    const copy = [...frames];
    const delIndex = copy.findIndex(([nx, ny, nstruct]) => nstruct == struct && x == nx && y == ny);
    copy.splice(delIndex, 1);

    for (const frame of copy) {
      const [nx, ny, nstruct] = frame;
      if (!add(nx, ny, nstruct, copy)) return;
    }

    frames.splice(delIndex, 1);
  }

  frames.sort((a, b) => {
    if (a[0] == b[0]) {
      if (a[1] == b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  return frames;
}
