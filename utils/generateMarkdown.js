// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badgeLink = ``;
    switch (license) {
        case 'MIT':
            return badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case 'Apache':
            return badgeLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        case 'Boost':
            return badgeLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        case 'Eclipse':
            return badgeLink = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        case 'None':
          return "";
            default:
            return "";
    }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ``;
  switch (license) {
      case 'MIT':
          return licenseLink = 'https://opensource.org/licenses/MIT'
      case 'Apache':
          return licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      case 'Boost':
          return licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
      case 'Eclipse':
          return licenseLink = 'https://opensource.org/licenses/EPL-1.0'
      case 'None':
        return "";
          default:
          return "";
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `## License
  This project is covered under the ${license} license. More information can be found here: ${renderLicenseLink(license)}`
  } else {
    return "";
  }
}

// a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ${renderLicenseBadge(response.license)}
  
  ## Table of Contents
  [Description](#description)
  <br>
  [Technologies Used](#technologies-used)
  <br>
  [Installation](#installation)
  <br>
  [Usage](#usage)
  <br>
  [Contributing](#contributing)
  <br>
  [Tests](#tests)
  <br>
  [License](#license)
  <br>
  [Questions](#questions)
  <br>
  [Credits](#credits)
  
  ## Description
  ${response.description}
  
  ## Technologies Used
  ${response.technologies}
  
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## Contributing
  ${response.contributing}
  
  ## Tests
  ${response.tests}
  
  ${renderLicenseSection(response.license)}
  
  ## Questions
  For any questions about the application, email me at: ${response.email} or find me on github at: ${response.github}
  
  ## Credits
  ${response.credits}
      
      `;
}

module.exports = generateMarkdown;
