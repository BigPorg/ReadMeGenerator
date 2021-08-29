// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    let link;
    switch (license) {
        case "GNU_AGPLv3": link = "https://choosealicense.com/licenses/agpl-3.0/"
            break;
        case "GNU_GPLv3": link = "https://choosealicense.com/licenses/gpl-3.0/"
            break;
        case "GNU LGPLv3": link = "https://choosealicense.com/licenses/lgpl-3.0/"
            break;
        case "Mozilla": link = "https://choosealicense.com/licenses/mpl-2.0/"
            break;
        case "Apache": link = "https://choosealicense.com/licenses/apache-2.0/"
            break;
        case "MIT": link = "https://choosealicense.com/licenses/mit/"
            break;
        case "Boost": link = "https://choosealicense.com/licenses/bsl-1.0/"
            break;
        case "Unilicense": link = "https://choosealicense.com/licenses/unlicense/"
            break;
        default: link = "no licencse";
    }
    return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

