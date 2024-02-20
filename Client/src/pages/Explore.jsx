import { useState } from "react";
import { useFetch, useTitle } from "@hooks";
import { pinService } from "@services";
import { PageLayout } from "@layouts";
import { Spinner } from "@utils";
import { ReactInifiteScroll, MasonryLayout, PinCard } from "@components";

export default function Explore() {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [moreData, setMoreData] = useState([]);
  const { data, loading } = useFetch(pinService.getRandomPins, currentPage);
  useTitle("Explore random pins");
  console.log("pg", data);

  const firstData = Array.isArray(data?.pins) ? data.pins : [];
  console.log("ft", firstData);

  // if less than 20, stop fetching data
  const fetchMoreData = async () => {
    if (data?.pins?.length < 20) {
      setHasMore(false);
      return;
    }
    try {
      setHasMore((prevMoreData) => [...prevMoreData, ...firstData]);
      setHasMore(moreData.length > 0);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const allPins = [...moreData, ...firstData];
  console.log("all", allPins);

  return (
    <PageLayout>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {loading && <Spinner text="Fetching pins" />}
          {allPins?.length > 0 ? (
            <ReactInifiteScroll
              dataLength={allPins?.length}
              fetchData={fetchMoreData}
              hasMore={hasMore}
            >
              <MasonryLayout>
                {allPins.map((pin, index) => (
                  <PinCard key={index} {...pin} />
                ))}
              </MasonryLayout>
            </ReactInifiteScroll>
          ) : (
            <p>No pin to show at the moment.</p>
          )}
        </>
      )}
    </PageLayout>
  );
}
