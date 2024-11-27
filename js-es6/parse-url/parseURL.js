function parseURL(urlString) {
  const splittedString = urlString.split('/').slice(1);
  return splittedString;
}

const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray) // ["en-US", "docs", "Web", "API", "URL", "pathname"]
