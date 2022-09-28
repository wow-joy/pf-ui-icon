// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFilledSvg from '@pf-ui/pf-icon-svg/es/asn/FolderFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FolderFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FolderFilled: FolderFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FolderFilledSvg}></PfIcon>;
};

FolderFilled.displayName = 'FolderFilled';
FolderFilled.inheritAttrs = false;
export default FolderFilled;