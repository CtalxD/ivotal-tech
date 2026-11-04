// app/components/year.ts
// With cacheComponents on, reading the current date has to happen inside a cached function.
export async function getYear() {
  "use cache";
  return new Date().getFullYear();
}