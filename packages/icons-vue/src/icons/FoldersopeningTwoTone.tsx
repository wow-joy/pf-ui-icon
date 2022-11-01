// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FoldersopeningTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/FoldersopeningTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FoldersopeningTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FoldersopeningTwoTone: FoldersopeningTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FoldersopeningTwoToneSvg}></PfIcon>;
};

FoldersopeningTwoTone.displayName = 'FoldersopeningTwoTone';
FoldersopeningTwoTone.inheritAttrs = false;
export default FoldersopeningTwoTone;