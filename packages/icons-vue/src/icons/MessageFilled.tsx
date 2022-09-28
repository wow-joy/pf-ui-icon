// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFilledSvg from '@pf-ui/pf-icon-svg/es/asn/MessageFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MessageFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MessageFilled: MessageFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MessageFilledSvg}></PfIcon>;
};

MessageFilled.displayName = 'MessageFilled';
MessageFilled.inheritAttrs = false;
export default MessageFilled;