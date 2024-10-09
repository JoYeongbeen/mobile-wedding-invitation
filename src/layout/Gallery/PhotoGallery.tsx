import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100px',
    height: '150px',
  };

  const galleryOptions = {
    zoom: false, // 터치 확대 비활성화
    maxZoomLevel: 1, // 최대 줌 레벨을 1로 설정 (확대 불가)
    pinchToClose: false, // 핀치로 닫는 기능 비활성화
    doubleTapZoom: false, // 더블 탭 확대 비활성화
    imageClickAction: null, // 이미지 클릭 시 확대 비활성화
    bgClickAction: 'close', // 배경 클릭 시 닫기
  };

  return (
    <Gallery options={galleryOptions}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 2,
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
