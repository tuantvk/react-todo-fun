import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { clamp } from './utils';
import checkIcon from '../assets/checked.png';
import xIcon from '../assets/x-button.png';

const Card = ({ title, zIndex, color, id }) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useGesture(({ delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    set({ xy: delta, config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
  });

  return <animated.div
    className={`card card-${id}`} {...bind()}
    style={{
      backgroundColor: color,
      transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
      top: `${150 + (zIndex * 25)}px`,
      left: `${40 + (zIndex * 12)}px`
    }}>
    <span>{title}</span>
  </animated.div>
}

export default Card;