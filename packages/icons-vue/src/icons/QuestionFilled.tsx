// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionFilledSvg from 'pf-icon-svg/es/asn/QuestionFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface QuestionFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const QuestionFilled: QuestionFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={QuestionFilledSvg}></PfIcon>;
};

QuestionFilled.displayName = 'QuestionFilled';
QuestionFilled.inheritAttrs = false;
export default QuestionFilled;