// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MinusCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MinusCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MinusCircleOutlinedStandard: MinusCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MinusCircleOutlinedStandardSvg}></PfIcon>;
};

MinusCircleOutlinedStandard.displayName = 'MinusCircleOutlinedStandard';
MinusCircleOutlinedStandard.inheritAttrs = false;
export default MinusCircleOutlinedStandard;