import { FontWeight } from '@enums/font';
import { getFontFamily } from '@utils/font';

export const textVariants = {
  'body-reg': {
    fontSize: 18,
    color: 'black87',
    fontFamily: getFontFamily(FontWeight.Regular),
  },
  'body-reg-italic': {
    fontSize: 18,
    color: 'black87',
    fontFamily: getFontFamily(FontWeight.Italic),
  },
  'body-bold': {
    fontSize: 18,
    color: 'black87',
    fontFamily: getFontFamily(FontWeight.Bold),
  },
  'body-bold-italic': {
    fontSize: 18,
    color: 'black87',
    fontFamily: getFontFamily(FontWeight.Bold, true),
  },
  'title-reg': {
    fontSize: 24,
    color: 'black',
    fontFamily: getFontFamily(FontWeight.Bold),
  },
};
