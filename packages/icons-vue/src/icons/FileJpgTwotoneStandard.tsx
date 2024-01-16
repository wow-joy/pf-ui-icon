// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileJpgTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileJpgTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileJpgTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileJpgTwotoneStandard: FileJpgTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileJpgTwotoneStandardSvg}></PfIcon>;
};

FileJpgTwotoneStandard.displayName = 'FileJpgTwotoneStandard';
FileJpgTwotoneStandard.inheritAttrs = false;
export default FileJpgTwotoneStandard;