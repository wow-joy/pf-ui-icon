// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileFilledStandard: FileFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileFilledStandardSvg}></PfIcon>;
};

FileFilledStandard.displayName = 'FileFilledStandard';
FileFilledStandard.inheritAttrs = false;
export default FileFilledStandard;