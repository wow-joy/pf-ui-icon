// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DocumentManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DocumentManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DocumentManageFilledStandard: DocumentManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DocumentManageFilledStandardSvg}></PfIcon>;
};

DocumentManageFilledStandard.displayName = 'DocumentManageFilledStandard';
DocumentManageFilledStandard.inheritAttrs = false;
export default DocumentManageFilledStandard;