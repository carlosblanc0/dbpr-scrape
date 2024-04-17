import { readCSV, writeCSV } from 'https://deno.land/x/flat/mod.ts';

// The filename is the first invocation argument
const filename = Deno.args[0]; // Same name as downloaded_filename
const data = await readCSV(filename);

// Define column headers based on the provided names
const columnHeaders = [
    "Board",
    "Profession",
    "Owner/Primary Name",
    "Series/Rank",
    "Class Modifier",
    "Mailing Street Address",
    "Mailing Address Line 2",
    "Mailing Address Line 3",
    "Mailing City",
    "Mailing State",
    "Mailing Zip Code",
    "Mailing County Code",
    "Business or DBA Name",
    "Location Street Address",
    "Location Address 2",
    "Location Address 3",
    "Location City",
    "Location State",
    "Location Zip Code",
    "Location County Code",
    "License Number",
    "License Primary Status Code",
    "License Secondary Status Code",
    "Original Issue Date",
    "Effective Date",
    "Expiration Date"
];

// Prepend column headers to the data
const newData = [columnHeaders, ...data.map(row => row.map(cell => String(cell)))];

// Write the modified CSV data back to the file
const newfile = `fixed_${filename}`;
await writeCSV(newfile, newData);
