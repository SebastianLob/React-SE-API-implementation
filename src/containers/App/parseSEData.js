export function parseGoogleData(result, q) {
  return result.data.items.map((e) => {
    return {
      id: e.link,
      title: e.title,
      url: e.link,
      snippet: e.snippet,
    };
  });
}

export function parseBingData(result, q) {
  return result.data.webPages.value.map((e) => {
    return {
      id: e.id,
      title: e.name,
      url: e.url,
      snippet: e.snippet,
    };
  });
}
