import { selector } from 'recoil'
import { fontSizeState } from "../atoms/fontSizeState";

export const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});