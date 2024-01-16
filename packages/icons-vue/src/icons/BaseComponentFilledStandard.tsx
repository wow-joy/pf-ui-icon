// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BaseComponentFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/BaseComponentFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface BaseComponentFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const BaseComponentFilledStandard: BaseComponentFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={BaseComponentFilledStandardSvg}></PfIcon>;
};

BaseComponentFilledStandard.displayName = 'BaseComponentFilledStandard';
BaseComponentFilledStandard.inheritAttrs = false;
export default BaseComponentFilledStandard;