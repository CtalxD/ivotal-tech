// app/components/year.ts
export async function getYear() {
  "use cache";
  return new Date().getFullYear();
}