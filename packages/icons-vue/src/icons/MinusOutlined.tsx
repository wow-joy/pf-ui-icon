// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/MinusOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MinusOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MinusOutlined: MinusOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MinusOutlinedSvg}></PfIcon>;
};

MinusOutlined.displayName = 'MinusOutlined';
MinusOutlined.inheritAttrs = false;
export default MinusOutlined;