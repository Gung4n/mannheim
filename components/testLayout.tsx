import styles from "../styles/TestLayout.module.sass";
import useSound from "use-sound";
import Image from "next/image";
import prayer1 from "../public/prayer1.mp3";
import bottomLeft from "../public/bottomLeft.png";
import bottomRight from "../public/bottomRight.png";
import bottomMiddle from "../public/bottomMiddle.png";
import topLeft from "../public/topLeft.png";
import middleLeft from "../public/middleLeft.png";
import middleRight from "../public/middleRight.png";
import topRight from "../public/topRight.png";
import topMiddle from "../public/topMiddle.png";
import { useState } from "react";

export function TestLayout() {
  const [playPrayer1, exposedPrayer1] = useSound(prayer1, { interrupt: false });
  const [playing, setPlaying] = useState(false);
  return (
    <div className={styles.wrapper}>
      {/* top */}
      <div className={styles.topLeftWrapper}>
        <Image src={topLeft} alt="" />
      </div>
      <div className={styles.topMiddleWrapper}>
        <Image src={topMiddle} layout="fill" />
      </div>
      <div className={styles.topRightWrapper}>
        <Image src={topRight} />
      </div>
      {/* middle */}
      <div className={styles.middleLeftWrapper}>
        <Image src={middleLeft} alt="" layout="fill" />
      </div>
      <div className={styles.contentWrapper}>
        <Image src={"https://placekitten.com/350/300"} layout="fill" />
      </div>
      <div className={styles.middleRightWrapper}>
        <Image src={middleRight} alt="" layout="fill" />
      </div>
      {/* bottom  */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomLeftWrapper}>
          <Image src={bottomLeft} alt="" layout="fixed" />
        </div>
        <div className={styles.bottomMiddleWrapper}>
          <Image src={bottomMiddle} alt="" layout="fill" />
        </div>
        <div className={styles.bottomRightWrapper}>
          <Image src={bottomRight} alt="" layout="fixed" />
        </div>
        {/* <div className={styles.buttonsWrapper}>
          {playing ? (
            <button
              className={styles.pauseButton}
              onClick={() => {
                setPlaying(false);
                exposedPrayer1.pause();
              }}
            ></button>
          ) : (
            <button
              className={styles.playButton}
              onClick={() => {
                setPlaying(true);
                playPrayer1();
              }}
            ></button>
          )}

          <button
            className={styles.stopButton}
            onClick={() => {
              setPlaying(false);
              exposedPrayer1.stop();
            }}
          ></button>
        </div> */}
      </div>
    </div>
  );
}
