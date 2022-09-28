// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FemaleOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/FemaleOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FemaleOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FemaleOutlined: FemaleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FemaleOutlinedSvg}></PfIcon>;
};

FemaleOutlined.displayName = 'FemaleOutlined';
FemaleOutlined.inheritAttrs = false;
export default FemaleOutlined;