import glamorous from 'glamorous';

import { WorkWrapper, WorkInfo } from './WorkWrapper';

const Video = glamorous.video({
  width: '100%',
  height: '100%',
  display: 'block',
});

export const VideoWork = ({ url, overlay: { title, role } }) => (
  <WorkWrapper>
    <Video autoPlay loop playsInline muted>
      <source src={url} type="video/mp4" />
    </Video>
    <WorkInfo title={title} description={role} />
  </WorkWrapper>
);
