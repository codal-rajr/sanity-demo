import Link from "next/link";
import { ClientPerspective, defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { draftMode } from "next/headers";

const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  && defined(slug.current)
]{_id, name, slug, date}`);

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const options = isEnabled
    ? { perspective: "previewDrafts" as Exclude<ClientPerspective, 'raw'>, useCdn: false, stega: true }
    : {};
    
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY ,...options});

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Events</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {events.map((event) => (
          <li className="bg-white p-4 rounded-lg" key={event._id}>
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
      </ul>
    </main>
  );
}
