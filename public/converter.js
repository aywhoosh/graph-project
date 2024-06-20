import fs from 'fs';
import path from 'path';
import rawData from './rawData.js';

const headers = Object.keys(rawData[0]);
const csvData = [headers.join(',')];

rawData.forEach(row => {
  const values = headers.map(header => row[header]);
  csvData.push(values.join(','));
});

const csvContent = csvData.join('\n');

const filePath = path.join(process.cwd(), 'data.csv');
fs.writeFileSync(filePath, csvContent);
console.log('CSV file created successfully!');