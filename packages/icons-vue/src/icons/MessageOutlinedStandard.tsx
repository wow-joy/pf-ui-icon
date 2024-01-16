// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MessageOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MessageOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MessageOutlinedStandard: MessageOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MessageOutlinedStandardSvg}></PfIcon>;
};

MessageOutlinedStandard.displayName = 'MessageOutlinedStandard';
MessageOutlinedStandard.inheritAttrs = false;
export default MessageOutlinedStandard;