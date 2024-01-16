// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FeedbackFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FeedbackFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FeedbackFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FeedbackFilledStandard: FeedbackFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FeedbackFilledStandardSvg}></PfIcon>;
};

FeedbackFilledStandard.displayName = 'FeedbackFilledStandard';
FeedbackFilledStandard.inheritAttrs = false;
export default FeedbackFilledStandard;