import { promises as fs } from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { Readable } from 'stream';

export async function GET(request) {
  try {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0oVes642zKjUqz5nf_mZenyKuA79ctNvOj_arL2R075ZGWbkCx4e1-eqhFMy-wx-d16KOJd85uYXm/pub?gid=363344178&single=true&output=csv';
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }
    const fileContent = await response.text();

    const results = [];
    await new Promise((resolve, reject) => {
      Readable.from(fileContent)
        .pipe(csv())
        .on('data', (data) => {
            // Transform data types
            data.id = parseInt(data.ID, 10);
            data.year = parseInt(data.Year, 10);
            data.price = parseInt(data.Price, 10);
            data.mileage = isNaN(parseInt(data.Mileage, 10)) ? data.Mileage : parseInt(data.Mileage, 10);
            data.featured = data.Featured === 'true'; // Convert string 'true' to boolean true
            results.push({
              id: data.id,
              slug: data.Slug,
              make: data.Make,
              model: data.Model,
              year: data.year,
              price: data.price,
              currency: data.Currency,
              price_display: data['Price Display'],
              price_million: data['Price Million'],
              mileage: data.mileage,
              body_type: data['Body Type'],
              engine: data.Engine,
              vin: data.VIN,
              source: data.Source,
              status: data.Status,
              featured: data.featured,
              description: data.Description,
              image1: data['Image 1'],
              image2: data['Image 2'],
              image3: data['Image 3'],
              image4: data['Image 4'],
              image5: data['Image 5'],
              image6: data['Image 6'],
              pros1: data['Pros 1'],
              pros2: data['Pros 2'],
              pros3: data['Pros 3'],
              cons1: data['Cons 1'],
              cons2: data['Cons 2'],
              cons3: data['Cons 3'],
            });
        })
        .on('end', () => {
          resolve(results);
        })
        .on('error', (err) => {
          reject(err);
        });
    });

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
