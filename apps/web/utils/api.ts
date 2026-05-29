export type DiscoverCategory = {
  name: string;
  icon: string;
  color: string;
};

export type DiscoverEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  imageUrl: string;
  category: string;
};

export type DiscoverOrganizer = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type DiscoverResponse = {
  categories: DiscoverCategory[];
  popularEvents: DiscoverEvent[];
  organizers: DiscoverOrganizer[];
};

// Accepts an optional AbortSignal so callers can cancel the request
// when a component unmounts, preventing state updates on unmounted components.
async function fetchDiscoverPayload(signal?: AbortSignal): Promise<DiscoverResponse> {
  const response = await fetch("/api/events/discover", { signal });
  if (!response.ok) {
    throw new Error("Unable to fetch discover data");
  }

  return response.json();
}

export async function fetchCategories(signal?: AbortSignal): Promise<DiscoverCategory[]> {
  const data = await fetchDiscoverPayload(signal);
  return data.categories;
}

export async function fetchPopularEvents(signal?: AbortSignal): Promise<DiscoverEvent[]> {
  const data = await fetchDiscoverPayload(signal);
  return data.popularEvents;
}

export async function fetchOrganizers(signal?: AbortSignal): Promise<DiscoverOrganizer[]> {
  const data = await fetchDiscoverPayload(signal);
  return data.organizers;
}
