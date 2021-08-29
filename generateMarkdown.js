// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const { generate } = require("rxjs");

function renderLicenseBadge(license) {
    let link;
    switch (license) {
        case "GNU_AGPLv3": link = "https://choosealicense.com/licenses/agpl-3.0/";
            badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
            break;

        case "GNU_GPLv3": link = "https://choosealicense.com/licenses/gpl-3.0/";
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
            break;

        case "GNU LGPLv3": link = "https://choosealicense.com/licenses/lgpl-3.0/"
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)";
            break;

        case "Mozilla": link = "https://choosealicense.com/licenses/mpl-2.0/";
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;

        case "Apache": link = "https://choosealicense.com/licenses/apache-2.0/";
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;

        case "MIT": link = "https://choosealicense.com/licenses/mit/";
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;

        case "Boost": link = "https://choosealicense.com/licenses/bsl-1.0/"
            badge = " ";
            break;

        case "Unilicense": link = "https://choosealicense.com/licenses/unlicense/"
            badge = " ";
            break;

        default: link = "no licencse";
            break;
    }
    return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicesnse(licencse) {
//     let spot;
//     const [badge, link] = renderLicenseBadge(licencse);
//     if (licencse === "none") {
//         spot = "";
//         content = "";
//     } else {
//         spot = `# License ${badge}
//         This project uses the ${licencse} license.
//         ${link}`
//     }
//     return [spot, content];
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}
    
    #${data.title} ${data.badge} ![img]()

    ## Table of Contents
    -[Description](#Description)
    -[Installation](#Installation)
    -[Usage](#Usage)
    -[License](#License)
    -[Contributors](#Contributors)
    -[Test](#Test)
    -[Email](#Email)
    -[Github](#Github)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributors
    ${data.contributors}

    ## Test
    ${data.testing}

    ## Email with any further questions
    ${data.email}

    ## GitHub
    ${data.github}

    `;
}

module.exports = generateMarkdown;