// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenFilledSvg from '@pf-ui/pf-icon-svg/es/asn/FolderOpenFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FolderOpenFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FolderOpenFilled: FolderOpenFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FolderOpenFilledSvg}></PfIcon>;
};

FolderOpenFilled.displayName = 'FolderOpenFilled';
FolderOpenFilled.inheritAttrs = false;
export default FolderOpenFilled;