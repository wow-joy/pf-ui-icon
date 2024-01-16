// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DisconnectedTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DisconnectedTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DisconnectedTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DisconnectedTwotoneStandard: DisconnectedTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DisconnectedTwotoneStandardSvg}></PfIcon>;
};

DisconnectedTwotoneStandard.displayName = 'DisconnectedTwotoneStandard';
DisconnectedTwotoneStandard.inheritAttrs = false;
export default DisconnectedTwotoneStandard;