// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MessageManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MessageManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MessageManageFilledStandard: MessageManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MessageManageFilledStandardSvg}></PfIcon>;
};

MessageManageFilledStandard.displayName = 'MessageManageFilledStandard';
MessageManageFilledStandard.inheritAttrs = false;
export default MessageManageFilledStandard;