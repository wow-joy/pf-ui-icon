// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PageDesignFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PageDesignFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PageDesignFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PageDesignFilledStandard: PageDesignFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PageDesignFilledStandardSvg}></PfIcon>;
};

PageDesignFilledStandard.displayName = 'PageDesignFilledStandard';
PageDesignFilledStandard.inheritAttrs = false;
export default PageDesignFilledStandard;