import { PropsWithChildren } from 'react';
import PersonalProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IPersonalProject } from './IPersonalProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPersonalProject.Payload;

export const PersonalProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="외주 및 토이 프로젝트">
      <PersonalProjectRow payload={payload} />
    </CommonSection>
  );
}
