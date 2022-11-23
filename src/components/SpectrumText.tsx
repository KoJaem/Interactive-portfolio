import { motion } from 'framer-motion';
import { whiteShadow } from 'src/common/fontShadow';

type Props = {
  text: string;
  duration?: number;
  delay? : number;
}
/**
 * 
 * @param text : 스펙트럼 텍스트로 만들고싶은 text
 * @param duration? : 한글자가 완전히 보이는 시간
 * @param delay? : 글자 사이사이 딜레이 시간
 * 
 */
export const SpectrumText = ({ text, duration, delay }: Props) => {
  return (
    <>
      {Array.from(text).map((data, i) => (
        <motion.p
          key={i}
          animate={{
            opacity: [0, 1],
          }}
          style={{
            display: 'inline',
            textShadow: whiteShadow,
          }}
          transition={{
            duration: duration ? duration : 3,
            delay: delay ? 0.5 + i * delay : 0.5 + i * 0.3,
          }}
        >
          {data}
        </motion.p>
      ))}
    </>
  );
};
