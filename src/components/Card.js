import React from 'react';
import { useGesture } from 'react-use-gesture';
import { useSprings, a } from 'react-spring';

const Cards = () => {
  // Set up 3 springs, each carries x/y coords and z-rotation
  // We add up mass and friction to make the later springs heavier
  const [springs, set] = useSprings(3, i => ({
    xyz: [0, -i * 30, 0],
    config: { mass: 1 + i * 2, tension: 700 - i * 100, friction: 30 + i * 20 }
  }))
  // Prepare a function that casts a spring into a css-transform
  const transform = i => springs[i].xyz.interpolate((x, y, z) => `translate3d(${x}px,${y}px,0) scale(${1 - i * 0.05}) rotateZ(${z}deg)`)
  // Tie a drag gesture to the view, this gives us local coordinates and pointer-down state
  // This gesture updates the springs without re-rendering the view
  const bind = useGesture(({ local: [x, y], down }) => set(i => ({ xyz: [x + down * i * 20, y - i * 30 - down * i * 120, down * i * 10] })))
  // Render 3 divs and wire up the springss
  return new Array(3).fill().map((_, index) => <a.div key={index} {...bind()} style={{ transform: transform(3 - index - 1) }} />)
}

export default Cards;