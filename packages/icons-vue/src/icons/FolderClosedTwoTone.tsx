// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderClosedTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/FolderClosedTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FolderClosedTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FolderClosedTwoTone: FolderClosedTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FolderClosedTwoToneSvg}></PfIcon>;
};

FolderClosedTwoTone.displayName = 'FolderClosedTwoTone';
FolderClosedTwoTone.inheritAttrs = false;
export default FolderClosedTwoTone;