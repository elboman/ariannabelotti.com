import glamorous from 'glamorous';

const SingleWork = glamorous.div();

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  display: 'block',
});

export const ImageWork = ({ src }) => (
  <SingleWork>
    <Image src={src} />
  </SingleWork>
);
