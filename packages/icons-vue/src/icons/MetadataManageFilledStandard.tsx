// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MetadataManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MetadataManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MetadataManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MetadataManageFilledStandard: MetadataManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MetadataManageFilledStandardSvg}></PfIcon>;
};

MetadataManageFilledStandard.displayName = 'MetadataManageFilledStandard';
MetadataManageFilledStandard.inheritAttrs = false;
export default MetadataManageFilledStandard;