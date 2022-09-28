// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SetOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/SetOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SetOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SetOutlined: SetOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SetOutlinedSvg}></PfIcon>;
};

SetOutlined.displayName = 'SetOutlined';
SetOutlined.inheritAttrs = false;
export default SetOutlined;