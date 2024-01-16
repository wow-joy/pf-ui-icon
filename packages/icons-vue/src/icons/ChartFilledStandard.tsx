// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ChartFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ChartFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ChartFilledStandard: ChartFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ChartFilledStandardSvg}></PfIcon>;
};

ChartFilledStandard.displayName = 'ChartFilledStandard';
ChartFilledStandard.inheritAttrs = false;
export default ChartFilledStandard;