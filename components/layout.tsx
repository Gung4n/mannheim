import React, { useCallback, useRef, useState } from "react";
import styles from "../styles/Layout.module.sass";

export function Layout() {
  const startPosition = useRef({ x: 0, y: 0 });
  const [offsetPosition, setOffsetPosition] = useState({ x: 0, y: 0 });
  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      startPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    },
    [startPosition]
  );
  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const newPosition = { x: event.clientX, y: event.clientY };
      setOffsetPosition(newPosition);
    },
    []
  );

  return (
    <div className={styles.wrapper}>
      <div>
        {offsetPosition.x} {offsetPosition.y}
      </div>
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        className={styles.hello}
        style={
          {
            "--OffsetPositionX": `${offsetPosition.x}`,
            "--OffsetPositionY": `${offsetPosition.y}`,
          } as React.CSSProperties
        }
      >
        hello
      </div>
    </div>
  );
}
