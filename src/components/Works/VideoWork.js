import glamorous from 'glamorous';

const SingleWork = glamorous.div();

const Video = glamorous.video({
  width: '100%',
  height: '100%',
  display: 'block',
});

export const VideoWork = ({ url }) => (
  <SingleWork>
    <Video autoPlay loop>
      <source src={url} type="video/mp4" />
    </Video>
  </SingleWork>
);
