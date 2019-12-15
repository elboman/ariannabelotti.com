import React from 'React';
import glamorous from 'glamorous';

import { WorkWrapper, WorkInfo } from './WorkWrapper';

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  display: 'block',
});

export const ImageWork = ({ src, overlay: { title, role } }) => (
  <WorkWrapper>
    <Image src={src} />
    <WorkInfo title={title} description={role} />
  </WorkWrapper>
);
