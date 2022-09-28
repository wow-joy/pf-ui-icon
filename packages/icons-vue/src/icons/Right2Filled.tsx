// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Right2FilledSvg from '@pf-ui/pf-icon-svg/es/asn/Right2Filled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface Right2FilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const Right2Filled: Right2FilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={Right2FilledSvg}></PfIcon>;
};

Right2Filled.displayName = 'Right2Filled';
Right2Filled.inheritAttrs = false;
export default Right2Filled;