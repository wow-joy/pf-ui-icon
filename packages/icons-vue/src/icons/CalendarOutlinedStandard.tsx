// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CalendarOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CalendarOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CalendarOutlinedStandard: CalendarOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CalendarOutlinedStandardSvg}></PfIcon>;
};

CalendarOutlinedStandard.displayName = 'CalendarOutlinedStandard';
CalendarOutlinedStandard.inheritAttrs = false;
export default CalendarOutlinedStandard;