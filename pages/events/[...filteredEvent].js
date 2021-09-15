import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import ResultsTitle from "../../components/events/ResultsTitle";
import EventList from "../../components/events/EventList";
import Button from "../../components/UI/Button";

const FilteredEventPage = () => {
  const router = useRouter();
  const filteredEvent = router.query.filteredEvent;

  if (!filteredEvent) {
    return <p className="center">Loading...</p>
  }

  const year = +filteredEvent[0];
  const month = +filteredEvent[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return <p>Invalid filter, please adjust your values</p>
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the filter</p>
        <div className="centered">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;
