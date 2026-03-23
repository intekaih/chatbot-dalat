const fs = require("fs");
const path = require("path");

const googleApiKey = process.env.GOOGLE_API_KEY;
if (!googleApiKey) {
  console.error("❌ GOOGLE_API_KEY environment variable is not set");
  process.exit(1);
}

const content = `// This file can be replaced during build by using the \`fileReplacements\` array.
// \`ng build\` replaces \`environment.ts\` with \`environment.prod.ts\`.
// The list of file replacements can be found in \`angular.json\`.

export const environment = {
  production: false,
  apiBaseUrl: "",
  firebase: {
    apiKey: "${googleApiKey}",
    authDomain: "dalat-chatbot.firebaseapp.com",
    projectId: "dalat-chatbot",
    storageBucket: "dalat-chatbot.firebasestorage.app",
    messagingSenderId: "336020606793",
    appId: "1:336020606793:web:742c344687829d8bd81498",
    measurementId: "G-X3JZGP9LHQ",
  },
};
`;

const envPath = path.join(__dirname, "src", "environments", "environment.ts");
fs.writeFileSync(envPath, content, "utf8");
console.log("✅ environment.ts generated from secrets");
