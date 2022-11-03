import Link from "next/link";
import Image from "next/image";
import { useFetchSinglePlaceQuery } from "../../redux/getSinglePlaceInfo";
import { randomNumberBetweenInterval } from "../../utils/functions/PureFunctions";
import star from "../../images/home/star.png";

const ShowPlace = ({ name, rate, xid }: Place) => {
  const { data = { preview: { source: null } }, isFetching } = useFetchSinglePlaceQuery(xid);

  const randomPrice = randomNumberBetweenInterval(43, 79);

  return (
    <Link href={`/single-place/${xid}`} className="custom-div">
      <img
        className="custom-image"
        style={{
          backgroundImage: `url(${data.preview.source})`,
        }}
      />
      <h2 className="custom-title">{name}</h2>
      <div className="custom-subtitle">
        <div className="custom-images">
          <Image src={star} className="w-5" alt="star" />
          <Image src={star} className="w-5" alt="star" />
          <Image src={star} className="w-5" alt="star" />
          <Image src={star} className="w-5" alt="star" />
        </div>
        <p className="custom-paragraph">USD$ {randomPrice}</p>
      </div>
    </Link>
  );
};

export default ShowPlace;
