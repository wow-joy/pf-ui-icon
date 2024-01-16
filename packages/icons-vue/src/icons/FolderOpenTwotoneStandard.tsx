// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FolderOpenTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FolderOpenTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FolderOpenTwotoneStandard: FolderOpenTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FolderOpenTwotoneStandardSvg}></PfIcon>;
};

FolderOpenTwotoneStandard.displayName = 'FolderOpenTwotoneStandard';
FolderOpenTwotoneStandard.inheritAttrs = false;
export default FolderOpenTwotoneStandard;