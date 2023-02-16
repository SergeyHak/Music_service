import * as S from "../../style/styleTrack"
import ContentLoader from "react-content-loader";
const Skeleton = () => (
  <S.SkeletMenu >
   
    <ContentLoader
      height={200}
      width={300}
      speed={1}
      style={{ width: "100%"  }}
      backgroundColor={"#313"}
      foregroundColor={"#999"}
      viewBox="0 0 650 250"
    >
      <rect x="0" y="-30" rx="5" ry="5" width="400" height="300" />
    </ContentLoader>    
    <ContentLoader
      height={200}
      width={300}
      speed={1}
      style={{ width: "100%"  }}
      backgroundColor={"#313"}
      foregroundColor={"#999"}
      viewBox="0 0 650 250"
    >
      <rect x="0" y="-30" rx="5" ry="5" width="400" height="300" />
    </ContentLoader>    
    <ContentLoader
      height={200}
      width={300}
      speed={1}
      style={{ width: "100%"  }}
      backgroundColor={"#313"}
      foregroundColor={"#999"}
      viewBox="0 0 650 250"
    >
      <rect x="0" y="-30" rx="5" ry="5" width="400" height="300" />
    </ContentLoader>    
  </S.SkeletMenu>
);

export default Skeleton;

