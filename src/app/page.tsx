import { Suspense } from "react";
import EventsList from "@/components/events-list";

export default async function IndexPage() {
  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Events</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Suspense>
          <EventsList />
        </Suspense>
      </ul>
    </main>
  );
}
