// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatisticsFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/StatisticsFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface StatisticsFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const StatisticsFilledStandard: StatisticsFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={StatisticsFilledStandardSvg}></PfIcon>;
};

StatisticsFilledStandard.displayName = 'StatisticsFilledStandard';
StatisticsFilledStandard.inheritAttrs = false;
export default StatisticsFilledStandard;