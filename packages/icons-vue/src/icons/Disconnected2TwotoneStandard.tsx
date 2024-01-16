// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Disconnected2TwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/Disconnected2TwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface Disconnected2TwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const Disconnected2TwotoneStandard: Disconnected2TwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={Disconnected2TwotoneStandardSvg}></PfIcon>;
};

Disconnected2TwotoneStandard.displayName = 'Disconnected2TwotoneStandard';
Disconnected2TwotoneStandard.inheritAttrs = false;
export default Disconnected2TwotoneStandard;