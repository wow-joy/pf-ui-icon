// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MetadataFilledSvg from '@pf-ui/pf-icon-svg/es/asn/MetadataFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MetadataFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MetadataFilled: MetadataFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MetadataFilledSvg}></PfIcon>;
};

MetadataFilled.displayName = 'MetadataFilled';
MetadataFilled.inheritAttrs = false;
export default MetadataFilled;