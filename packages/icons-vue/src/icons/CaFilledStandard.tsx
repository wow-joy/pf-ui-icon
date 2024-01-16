// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CaFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CaFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CaFilledStandard: CaFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CaFilledStandardSvg}></PfIcon>;
};

CaFilledStandard.displayName = 'CaFilledStandard';
CaFilledStandard.inheritAttrs = false;
export default CaFilledStandard;