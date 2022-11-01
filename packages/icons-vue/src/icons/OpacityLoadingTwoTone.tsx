// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OpacityLoadingTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/OpacityLoadingTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface OpacityLoadingTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const OpacityLoadingTwoTone: OpacityLoadingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={OpacityLoadingTwoToneSvg}></PfIcon>;
};

OpacityLoadingTwoTone.displayName = 'OpacityLoadingTwoTone';
OpacityLoadingTwoTone.inheritAttrs = false;
export default OpacityLoadingTwoTone;