import { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import OpenSourceRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IOpenSource.Payload;

export const OpenSource = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="기타 소규모 및 상시 작업 업무">
      <OpenSourceRow payload={payload} />
    </CommonSection>
  );
}
