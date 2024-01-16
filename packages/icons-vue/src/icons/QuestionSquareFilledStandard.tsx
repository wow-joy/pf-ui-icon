// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionSquareFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/QuestionSquareFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface QuestionSquareFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const QuestionSquareFilledStandard: QuestionSquareFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={QuestionSquareFilledStandardSvg}></PfIcon>;
};

QuestionSquareFilledStandard.displayName = 'QuestionSquareFilledStandard';
QuestionSquareFilledStandard.inheritAttrs = false;
export default QuestionSquareFilledStandard;