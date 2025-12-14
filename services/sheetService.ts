import { Product } from '../types';
import { MOCK_SHEET_DATA } from '../constants';

/**
 * Service to handle data fetching.
 * 
 * PRO TIP: To connect this to a real Google Sheet:
 * 1. Publish your Google Sheet to the web as CSV.
 * 2. Use `fetch(CSV_URL)` here.
 * 3. Parse the CSV text into the Product[] structure.
 */
export const fetchProductsFromSheet = async (): Promise<Product[]> => {
  // Simulating network delay for realism
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_SHEET_DATA);
    }, 800);
  });
};