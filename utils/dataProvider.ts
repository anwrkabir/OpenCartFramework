import fs from "fs";
import { parse } from "csv-parse/sync";

export class dataProvider {
  static getTestDataFromJson(filePath: string) {
    // data will be return in array format

    let data: any = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return data;
  }

  static getTestDataFromCSV(filePath:string) {
    let data: any = parse(fs.readFileSync(filePath),
    {
      columns: true,
      skip_empty_lines: true,
    
    });
    return data;
  }
}
