export async function http<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}