import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
type Props = {
  text: string;
};
export const ChangeColorText = ({ text }: Props) => {
  const parts = text.split(/(<color>.*?<\/color>)/);

  return (
    <Typography size="0.8rem" color="black" lineHeight={1.5}>
      {parts.map((data, index) => {
        if (data.includes('<color>')) {
          const temp = data.match(/<color>(.*?)<\/color>/);
          if (!temp || !temp[1]) return;
          const notTagText = temp[1];
          return (
            <span style={{ color: customColor.purple }} key={index}>
              {notTagText}
            </span>
          );
        } else return <span key={index}>{data}</span>;
      })}
    </Typography>
  );
};

// import React from 'react';
// import { Typography } from 'src/components';
// type Props = {
//   text: string;
// };
// export const ChangeColorText = ({ text }: Props) => {

// const coloredString = text
//   .replace(/<color>/g, '<span className="blue-text">')
//   .replace(/<\/color>/g, '</span>');

//   return (
//     <Typography size="0.8rem" fontWeight="bold" color="white" lineHeight={1.2}>
//       {coloredString}
//     </Typography>
//   );
// };

// import React from 'react';
// import { Typography } from 'src/components';
// type Props = {
//   text: string;
// };
// export const ChangeColorText = ({ text }: Props) => {
//   const start = '<color>';
//   const end = '</color>';

//   const parts = text.split(start);

//   const coloredString = parts.map(part => {
//     if (part.includes(end)) {
//       const [content, rest] = part.split(end);
//       return (
//         <>
//           <span className="blue-text">{content}</span>
//           {rest}
//         </>
//       );
//     } else {
//       return <>part</>;
//     }
//   });

//   return (
//     <Typography size="0.8rem" fontWeight="bold" color="white" lineHeight={1.2}>
//       {coloredString}
//     </Typography>
//   );
// };

////////////////////////////////

// import React from 'react';

// export const changeColorText = (text: string) => {
//   const parts = text.split(/(<color>.*?<\/color>)/);
//   const coloredString = parts.map((part, index) => {
//     if (part.match(/<color>.*?<\/color>/)) {
//       return (
//         <span key={index} className="blue-text">
//           {part.replace(/(<color>|<\/color>)/g, '')}
//         </span>
//       );
//     } else {
//       return part;
//     }
//   });

//   return <>{coloredString}</>
// };

// changeColorText.displayName = 'changeColorText';
