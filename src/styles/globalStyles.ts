import { StyleSheet } from 'react-native';
import colors from './colors';
import typography from './typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: typography.fontFamily,
    fontSize: typography.medium,
    color: colors.text,
  },
});
