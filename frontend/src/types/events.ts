export type Event = {
  id: string
  slug: string
  name: string
  description: string
  cover_image: string
  venue: string
  city: string
  venue_map_link: string
  start_date: string
  end_date: string
  registration_end_date: string
  event_mode: string
  seats_left: BigInteger
}

export type EventsResponse = Event[]
