import { MeiliSearch } from "meilisearch";

const melisearchClient = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MELISEARCH_URL,
  apiKey: process.env.NEXT_PUBLIC_MELISEARCH_KEY,
});

export default melisearchClient;
