// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/FolderTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FolderTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FolderTwoTone: FolderTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FolderTwoToneSvg}></PfIcon>;
};

FolderTwoTone.displayName = 'FolderTwoTone';
FolderTwoTone.inheritAttrs = false;
export default FolderTwoTone;