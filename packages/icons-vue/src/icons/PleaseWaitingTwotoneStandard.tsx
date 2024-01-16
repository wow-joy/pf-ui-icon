// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PleaseWaitingTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PleaseWaitingTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PleaseWaitingTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PleaseWaitingTwotoneStandard: PleaseWaitingTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PleaseWaitingTwotoneStandardSvg}></PfIcon>;
};

PleaseWaitingTwotoneStandard.displayName = 'PleaseWaitingTwotoneStandard';
PleaseWaitingTwotoneStandard.inheritAttrs = false;
export default PleaseWaitingTwotoneStandard;