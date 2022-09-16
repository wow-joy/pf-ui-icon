// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionOutlinedSvg from 'pf-icon-svg/es/asn/QuestionOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface QuestionOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const QuestionOutlined: QuestionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={QuestionOutlinedSvg}></PfIcon>;
};

QuestionOutlined.displayName = 'QuestionOutlined';
QuestionOutlined.inheritAttrs = false;
export default QuestionOutlined;