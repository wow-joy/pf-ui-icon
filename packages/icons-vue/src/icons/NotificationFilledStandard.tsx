// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NotificationFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NotificationFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NotificationFilledStandard: NotificationFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NotificationFilledStandardSvg}></PfIcon>;
};

NotificationFilledStandard.displayName = 'NotificationFilledStandard';
NotificationFilledStandard.inheritAttrs = false;
export default NotificationFilledStandard;