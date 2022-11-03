import { useRouter } from "next/router";
import { useFetchSinglePlaceQuery } from "../../redux/getSinglePlaceInfo";
import StringToArray from "../../utils/functions/StringToArray";
import {
  Header,
  Description,
  Image,
  Button,
  CategoryStyled,
  Highlights,
} from "../../components/single-place/styled-components";

function SinglePlace() {
  const router = useRouter();
  const { xid } = router.query;

  const { data = {}, isFetching } = useFetchSinglePlaceQuery(xid);
  const {
    name = "",
    address: { city, state, neighbourhood } = "",
    kinds = "",
    preview: { source, width, height } = "",
    wikipedia_extracts: { text = "" } = {},
  } = data;

  const categories: string[] = StringToArray(kinds);
  window.scrollTo(0, 0);

  return (
    <div className="lg:max-w-5xl mx-auto px-4 mt-6">
      <Header>
        <Description>
          <h1>{name}</h1>
          <h4>
            Visit {name} located in {city}, {state} within the {neighbourhood}, neighborhood.
          </h4>
          <aside>
            {categories &&
              categories.map((category, i) => {
                return <CategoryStyled key={i}>{category}</CategoryStyled>;
              })}
          </aside>
        </Description>
      </Header>

      <hr className="mt-2.5 mb-4 bg-gray-500" />

      <Highlights>
        <h2>Highlights</h2>
        <p>{text}</p>
        <Button bgColor="#5666ad">See dates & book now</Button>
        <Image src={source} height={height} width={width} />
      </Highlights>
    </div>
  );
}

export default SinglePlace;
