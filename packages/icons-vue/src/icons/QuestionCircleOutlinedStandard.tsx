// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/QuestionCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface QuestionCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const QuestionCircleOutlinedStandard: QuestionCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={QuestionCircleOutlinedStandardSvg}></PfIcon>;
};

QuestionCircleOutlinedStandard.displayName = 'QuestionCircleOutlinedStandard';
QuestionCircleOutlinedStandard.inheritAttrs = false;
export default QuestionCircleOutlinedStandard;