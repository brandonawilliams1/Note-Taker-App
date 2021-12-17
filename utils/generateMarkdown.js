// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArr = ['http://unlicense.org/','https://opensource.org/licenses/Apache-2.0', 'https://www.gnu.org/licenses/gpl-3.0', 'https://opensource.org/licenses/MIT', 'https://www.gnu.org/licenses/lgpl-3.0', 'https://opensource.org/licenses/MPL-2.0', 'https://www.boost.org/LICENSE_1_0.txt', 'https://www.gnu.org/licenses/agpl-3.0']


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {

    case 'The Unlicense': return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${licenseArr[0]})`;
    

    case 'Apache License 2.0': return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseArr[1]})`;

    case 'GNU GPL v3': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${licenseArr[2]})`;

    case 'MIT License': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseArr[3]})`;

    case 'GNU LGPL v3': return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${licenseArr[4]})`;

    case 'Mozilla Public License 2.0': return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${licenseArr[5]})`;
    
    

    case 'Boost Software License 1.0': return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${licenseArr[6]})`;

    case 'GNU AGPL v3': return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${licenseArr[7]})`;

    default: return '';
  }
}

// Generates link to license
// Returns empty string if no license
function renderLicenseLink(license) {
  switch (license) {
    case 'The Unlicense': return `[${license}](${licenseArr[0]})`;

    case 'Apache License 2.0': return `[${license}](${licenseArr[1]})`;

    case 'GNU GPL v3': return `[${license}](${licenseArr[2]})`;

    case 'MIT License': return `[${license}](${licenseArr[3]})`;

    case 'GNU LGPL v3': return `[${license}](${licenseArr[4]})`;
    
    case 'Mozilla Public License 2.0': return `[${license}](${licenseArr[5]})`;
    
    case 'Boost Software License 1.0': return `[${license}](${licenseArr[6]})`;
    
    case 'GNU AGPL v3': return `[${license}](${licenseArr[7]})`;
    
    default: return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  return `## License 
  Licensed under ${renderLicenseLink(license)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  # Description
  ${data.description}

  ---
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ---
  ## Installation
  ${data.installation}
  ---
  ## Usage
  ${data.usage}

  ---
  ## Contribution Guidelines
  ${data.contribution}

  ---
  ## Questions

  Contact me at: 
  * Github: https://github.com/${data.github}
  * Email: ${data.email}
  
  ${renderLicenseSection(data.license)} 
 
  ## Tests
  ${data.tests}
  `;
}

module.exports = generateMarkdown;