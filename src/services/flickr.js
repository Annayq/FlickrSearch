import fetchJsonp from "fetch-jsonp";

export const Flickr = async (tagsQuery) => {
  const resp = await fetchJsonp(
    `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=all&tags=${tagsQuery}`,
    { jsonpCallback: "jsoncallback" }
  );
  const data = await resp.json();
  return data.items.map((item) => {
    return {
      alt: item.tags,
      url: item.media.m,
    };
  });
};
