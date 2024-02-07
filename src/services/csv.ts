import fs from 'fs';
import { parse } from 'csv-parse';
import { CSV_FILE_PATH } from '../constants';

interface CSVRow {
    [key: string]: string;
}

const getLGAPopulation = (lga_code, lga_name) => {
    const csvParseOptions = {
        delimiter: ',',
        columns: true
    };

    const population = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(CSV_FILE_PATH)
        .pipe(parse(csvParseOptions))
        .on('data', (row: CSVRow) => {
            if (row['REGION: Region'].toLowerCase().includes(lga_code.toString().toLowerCase()) && row['REGION: Region'].toLowerCase().includes(lga_name.toLowerCase())) {
                population.push({
                    type: row['POP_COMP: Population Component'].split(':')[1].trim(),
                    value: row['OBS_VALUE'],
                    unit_of_measure: row['UNIT_MEASURE: Unit of Measure'].split(':')[1].trim(),
                    frequency: row['FREQ: Frequency'].split(':')[1].trim(),
                })
            }

        })
        .on('end', () => {
            population.sort((a, b) => {
                const typeA = a.type.toUpperCase();
                const typeB = b.type.toUpperCase();
                if (typeA < typeB) {
                  return -1;
                }
                if (typeA > typeB) {
                  return 1;
                }
              });
            resolve(population)
        })
        .on('error', (err: Error) => {
            reject(err)
        });
    })
}

export {
    getLGAPopulation
}