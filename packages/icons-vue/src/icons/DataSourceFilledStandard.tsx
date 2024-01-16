// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataSourceFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DataSourceFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DataSourceFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DataSourceFilledStandard: DataSourceFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DataSourceFilledStandardSvg}></PfIcon>;
};

DataSourceFilledStandard.displayName = 'DataSourceFilledStandard';
DataSourceFilledStandard.inheritAttrs = false;
export default DataSourceFilledStandard;