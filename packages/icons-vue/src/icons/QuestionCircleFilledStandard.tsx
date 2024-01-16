// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionCircleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/QuestionCircleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface QuestionCircleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const QuestionCircleFilledStandard: QuestionCircleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={QuestionCircleFilledStandardSvg}></PfIcon>;
};

QuestionCircleFilledStandard.displayName = 'QuestionCircleFilledStandard';
QuestionCircleFilledStandard.inheritAttrs = false;
export default QuestionCircleFilledStandard;