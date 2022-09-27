// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarOutlinedSvg from 'pf-icon-svg/es/asn/CalendarOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CalendarOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CalendarOutlined: CalendarOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CalendarOutlinedSvg}></PfIcon>;
};

CalendarOutlined.displayName = 'CalendarOutlined';
CalendarOutlined.inheritAttrs = false;
export default CalendarOutlined;