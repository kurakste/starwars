function collides(x, y, r, b, x2, y2, r2, b2) {
  const res = !(r <= x2 || x > r2 ||
    b <= y2 || y > b2);
  return res;
}

function boxCollides(pos, size, pos2, size2) {
  console.log('pos: ', pos,)
  console.log('pos2: ', pos2,)
  return collides(pos[0], pos[1],
    pos[0] + size, pos[1] + size,
    pos2[0], pos2[1],
    pos2[0] + size2, pos2[1] + size2);
}

export default boxCollides;