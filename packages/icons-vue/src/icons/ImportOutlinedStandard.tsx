// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ImportOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ImportOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ImportOutlinedStandard: ImportOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ImportOutlinedStandardSvg}></PfIcon>;
};

ImportOutlinedStandard.displayName = 'ImportOutlinedStandard';
ImportOutlinedStandard.inheritAttrs = false;
export default ImportOutlinedStandard;