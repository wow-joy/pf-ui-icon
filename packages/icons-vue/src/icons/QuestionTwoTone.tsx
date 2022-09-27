// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionTwoToneSvg from 'pf-icon-svg/es/asn/QuestionTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface QuestionTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const QuestionTwoTone: QuestionTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={QuestionTwoToneSvg}></PfIcon>;
};

QuestionTwoTone.displayName = 'QuestionTwoTone';
QuestionTwoTone.inheritAttrs = false;
export default QuestionTwoTone;