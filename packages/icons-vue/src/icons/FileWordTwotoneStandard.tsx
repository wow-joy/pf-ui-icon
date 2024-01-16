// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileWordTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileWordTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileWordTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileWordTwotoneStandard: FileWordTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileWordTwotoneStandardSvg}></PfIcon>;
};

FileWordTwotoneStandard.displayName = 'FileWordTwotoneStandard';
FileWordTwotoneStandard.inheritAttrs = false;
export default FileWordTwotoneStandard;