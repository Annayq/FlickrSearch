export const Unsplash = async (tagsQuery) => {
  const resp = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${tagsQuery}&client_id=ktov1rXm7r_SrX61cBu-Hu7nyP6iRi6oDFq1xivM7QI`
  );
  const data = await resp.json();
  return data.results.map((item) => {
    return {
      alt: item.alt_description,
      url: item.urls.raw,
    };
  });
};
