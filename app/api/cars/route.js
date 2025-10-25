import { fetchAndParseCars } from '../../../lib/data'; // Adjust path as necessary

export async function GET(request) {
  try {
    const results = await fetchAndParseCars();
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      revalidate: 3600, // Revalidate every 1 hour (3600 seconds)
    });
  } catch (error) {
    console.error('Error reading or parsing CSV:', error);
    return new Response(JSON.stringify({ message: 'Error loading car data.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
