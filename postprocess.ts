import { readCSV, writeCSV } from 'https://deno.land/x/flat@0.0.15/mod.ts';

// The filename is the first invocation argument
const filename = Deno.args[0]; // Same name as downloaded_filename

// Path to a csv file
const csvPath = 'data.csv';

const originalCSV = await readCSV(csvPath);
console.log(originalCSV);

// Generate column headers based on the number of columns in the CSV data
const numColumns = originalCSV[0].length;
const columnHeaders = Array.from({ length: numColumns }, (_, index) => `Column ${index + 1}`);

// Write the original CSV data to a new file with generated column headers
await writeCSV('./examples/csv/prices-with-headers.csv', [columnHeaders, ...originalCSV]);

// Parse the newly written CSV file with headers
const parsedCSVWithHeaders = await readCSV('./examples/csv/prices-with-headers.csv');
console.log(parsedCSVWithHeaders);
