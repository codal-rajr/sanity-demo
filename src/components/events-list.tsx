"use cache";

import { sanityFetch } from "@/sanity/live";
import { ClientPerspective, defineQuery } from "next-sanity";
import { cacheLife } from "next/cache";
import { draftMode } from "next/headers";
import Link from "next/link";

export const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  && defined(slug.current)
]{_id, name, slug, date}`);

const EventsList = async () => {
  cacheLife("minutes");

  const { isEnabled } = await draftMode();
  const options = isEnabled
    ? {
        perspective: "previewDrafts" as Exclude<ClientPerspective, "raw">,
        useCdn: false,
        stega: true,
      }
    : {};

  const { data: events } = await sanityFetch({
    query: EVENTS_QUERY,
    ...options,
  });

  return (
    <>
      {events.map((event, index) => (
        <li
          className="bg-white p-4 rounded-lg"
          key={[event._id, index].join("-")}
        >
          <Link
            className="hover:underline"
            href={`/events/${event?.slug?.current}`}
          >
            <h2 className="text-xl font-semibold">{event?.name}</h2>
            {event?.date && (
              <p className="text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </p>
            )}
          </Link>
        </li>
      ))}
    </>
  );
};

export default EventsList;
