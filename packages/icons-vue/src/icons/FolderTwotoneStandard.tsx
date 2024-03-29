// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FolderTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FolderTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FolderTwotoneStandard: FolderTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FolderTwotoneStandardSvg}></PfIcon>;
};

FolderTwotoneStandard.displayName = 'FolderTwotoneStandard';
FolderTwotoneStandard.inheritAttrs = false;
export default FolderTwotoneStandard;