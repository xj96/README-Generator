// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
    [![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    
    ## Table of Contents
    1. [Project Description](#description)
    2. [Installation](#install)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contributors](#contributors)
    6. [Tests](#tests)
    7. [Questions](#questions)
    
    ## Project Description
    ${data.description}
    
    ## Installation
    ${data.install}
    
    ## Usage
    ${data.usage}
    
    ### License
    ${data.license}
    
    ### Contributors
    ${data.contributors}
    
    #### Tests
    ${data.tests}
    
    #### Questions
    ${data.questions}
    #### Contact Me
    * GitHub Profile: https://github.com/${data.username}
    * Email Address: ${data.email}
  `;
}

module.exports = generateMarkdown;