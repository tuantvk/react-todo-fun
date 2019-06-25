import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import cancel from '../cancel.svg';
import checked from '../checked.svg';

const Card = ({ title, zIndex, color, id, removeTodo, doneTodo, disabled, done }) => {

  const [{ local }, set] = useSpring(() => ({ local: [0, 0] }))
  const bind = useGesture({
    onDrag: ({ local }) => set({ local })
  })

  return <animated.div
    className={`card card-${id}`} {...bind()}
    style={{
      pointerEvents: disabled ? "none" : "visible",
      opacity: disabled ? 0.08 : 1,
      backgroundColor: color,
      top: `${150 + (zIndex * 25)}px`,
      left: done ? 0 : `${40 + (zIndex * 12)}px`,
      zIndex: zIndex,
      height: `${done ? 0 : 120}px`,
      transform: local.interpolate((x, y) => `translate3d(${done ? -250 : x}px,${y}px,0)`)
    }}
  >
    {
      done || disabled ?
        null
        :
        <>
          <img onClick={() => doneTodo(id)} src={checked} className="icon checked" alt="checked" />
          <img onClick={() => removeTodo(id)} src={cancel} className="icon cancel" alt="cancel" />
        </>
    }
    <span>{title}</span>
  </animated.div>
}

export default Card;