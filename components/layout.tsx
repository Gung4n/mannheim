import clsx from "clsx";
import React, { RefObject, useCallback, useRef, useState } from "react";
import { start } from "repl";
import styles from "../styles/Layout.module.sass";
import { WordScramble } from "./wordScramble";

export function Layout() {
  const [offsetPosition, setOffsetPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const helloRef: RefObject<HTMLDivElement> = useRef(null);

  const [displayString, setDisplayString] = useState("hello");

  const [startingPosition, setStartingPosition] = useState({ x: 0, y: 0 });
  const calculateStartingPosition = useCallback(() => {
    setStartingPosition({
      x:
        (helloRef.current?.offsetLeft ?? 0) +
        (helloRef.current?.clientWidth ?? 0) / 2,
      y:
        (helloRef.current?.offsetTop ?? 0) +
        (helloRef.current?.clientHeight ?? 0) / 2,
    });
  }, [helloRef]);
  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isMoving) {
        const newPosition = {
          x: event.clientX - startingPosition.x,
          y: event.clientY - startingPosition.y,
        };
        setDisplayString(
          WordScramble(displayString, newPosition.x, newPosition.y)
        );
        setOffsetPosition(newPosition);
      }
    },
    [isMoving, setOffsetPosition, startingPosition]
  );

  return (
    <div onPointerMove={onPointerMove} className={styles.wrapper}>
      <div
        ref={helloRef}
        onClick={() => {
          calculateStartingPosition();
          setIsMoving(!isMoving);
        }}
        className={styles.hello}
        style={
          {
            "--OffsetPositionX": `${offsetPosition.x}`,
            "--OffsetPositionY": `${offsetPosition.y}`,
          } as React.CSSProperties
        }
      >
        {displayString}
      </div>
      <div className={styles.gridWrapper}>
        <div className={clsx(styles.cell, styles.topLeft)}>a</div>
        <div className={clsx(styles.cell, styles.topRight)}>b</div>
        <div className={clsx(styles.cell, styles.bottomLeft)}>c</div>
        <div className={clsx(styles.cell, styles.bottomRight)}>d</div>
      </div>
    </div>
  );
}
