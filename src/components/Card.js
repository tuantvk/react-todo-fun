import React from 'react';
import { useGesture } from 'react-use-gesture';
import { useSprings, a } from 'react-spring';

const { width, height } = window.screen;
const widthCard = 250;
const heightCard = 150;

const _checkWidth = x => {
  if (x > 0 && x < width) {
    return x;
  }
  if (x <= 0) {
    return 0;
  } return width - widthCard;
}

const _checkHeight = x => {
  if (x > 0 && x < height) {
    return x;
  }
  if (x <= 0) {
    return 0;
  } return height - heightCard;
}

const Cards = props => {

  const [springs, set] = useSprings(3, i => ({
    xyz: [0, -i * 30, 0],
    config: { mass: 1 + i * 2, tension: 700 - i * 100, friction: 30 + i * 20 }
  }))

  const transform = i => springs[i].xyz.interpolate((x, y, z) =>
    `translate3d(${_checkWidth(x)}px,${_checkHeight(y)}px,0) rotateZ(${z}deg`
  )

  const bind = useGesture(({ local: [x, y], down }) => set(i => ({ xyz: [x + down * i * 20, y - i * 30 - down * i * 120, down * i * 10] })))

  return new Array(1).fill().map((_, index) => (
    <a.div className="card" key={index} {...bind()} style={{ transform: transform(3 - index - 1) }}>
      <p>{props.title}</p>
    </a.div>
  ))
  
}

export default Cards;