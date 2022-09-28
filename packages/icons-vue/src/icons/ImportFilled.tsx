// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportFilledSvg from '@pf-ui/pf-icon-svg/es/asn/ImportFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ImportFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ImportFilled: ImportFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ImportFilledSvg}></PfIcon>;
};

ImportFilled.displayName = 'ImportFilled';
ImportFilled.inheritAttrs = false;
export default ImportFilled;