
// index.js (or index.ts)
import {
  addonBuilder,
  makeSources,
  resolver,
  worker,
} from "@cloudstream/core";

const sources = makeSources();

// Add your website-specific extraction logic here
const extractDataFromWebsite1 = async (url) => { /* ... */ };
const extractDataFromWebsite2 = async (url) => { /* ... */ };
// ...

const search = async (query, type) => {
  const results = [];

  // Search each website and aggregate the results
  const website1Results = await extractDataFromWebsite1(query, type);
  results.push(...website1Results);

  const website2Results = await extractDataFromWebsite2(query, type);
  results.push(...website2Results);

  // ...

  return results;
};

const load = async (ctx) => {
  // Load movie or series details based on ctx.id
};

const sourcesResolver = resolver({
  search,
  load,
  // ... other resolver functions if needed
});

export default addonBuilder({
  sources,
  resolver: sourcesResolver,
  worker,
});
