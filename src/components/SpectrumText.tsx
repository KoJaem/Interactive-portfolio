import { motion } from 'framer-motion';
import { whiteShadow } from 'src/common/fontShadow';

type Props = {
  text: string;
  duration?: number;
  delay?: number;
  shadow?: string;
  color?: string;
  initialDelay?: number;
};
/**
 * 
 * @param text : 스펙트럼 텍스트로 만들고싶은 text
 * @param duration? : 한글자가 완전히 보이는 시간
 * @param delay? : 글자 사이사이 딜레이 시간
 * @param initialDelay? : 맨 처음 컴포넌트 전체적으로 줄 딜레이 시간
 * @param shadow? : 글자 shadow 종류
 * 
 */
export const SpectrumText = ({ text, duration = 3, delay = 0.3, shadow, initialDelay = 0, color }: Props) => {
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
            textShadow: shadow ? shadow : '',
            color
          }}
          transition={{
            duration,
            delay: 0.5 + i * delay + initialDelay,
          }}
        >
          {data}
        </motion.p>
      ))}
    </>
  );
};
