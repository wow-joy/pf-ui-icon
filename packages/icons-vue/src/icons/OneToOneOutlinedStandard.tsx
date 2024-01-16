// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OneToOneOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/OneToOneOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface OneToOneOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const OneToOneOutlinedStandard: OneToOneOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={OneToOneOutlinedStandardSvg}></PfIcon>;
};

OneToOneOutlinedStandard.displayName = 'OneToOneOutlinedStandard';
OneToOneOutlinedStandard.inheritAttrs = false;
export default OneToOneOutlinedStandard;