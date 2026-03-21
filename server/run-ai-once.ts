import { generateDefaultPlaces } from './ai-generator.js';
import { saveDefaultAIPlaces } from './db.js';

console.log("Starting manual AI default places generation...");
generateDefaultPlaces().then(places => {
    saveDefaultAIPlaces(places);
    console.log("Successfully generated and saved default places!");
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
