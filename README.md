Quicklink QR
Video Demo: <URL HERE https://youtu.be/MlO_NatY-uw>
Description: Quicklink QR is a Chrome extension that allows users to generate QR codes for any input link quickly. The generated QR code can be displayed within the extension popup and downloaded for later use. The extension also includes a dark mode feature.
Table of Contents
Installation
Usage
Features
Project Structure
Technologies Used
Contributing
License
Installation
Getting started with Quicklink QR is quick and easy:

Clone the Repository: First, clone the repository to your local machine using the following command: https://github.com/code50/112894912/project
Navigate to the Project Directory: Once cloned, navigate to the project directory using the command line: cd project
Load the Extension in Chrome: Load the extension in Chrome by following these steps:
Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click on "Load unpacked" and select the project directory.
Usage
Using Quicklink QR is intuitive and straightforward:

Open the Extension Popup: Click on the Quicklink QR extension icon located in the Chrome toolbar to open the popup interface.
Enter the Link: In the input field provided, enter the link for which you want to generate a QR code. This could be a website URL, a product page, or any other online resource you wish to share.
Generate the QR Code: Click the "Generate QR" button to generate the QR code based on the input link provided.
Download the QR Code: Once generated, the QR code will be displayed within the popup. To save the QR code as an image, simply click the "Download" button.
Toggle Dark Mode: For users who prefer a darker interface, Quicklink QR includes a dark mode feature. Simply use the checkbox provided to toggle between light and dark modes.
Features
Quicklink QR offers the following key features:

QR Code Generation: Effortlessly generate QR codes for any input link directly from your browser.
Downloadable QR Code: Easily save the generated QR code as a PNG image for sharing or later use.
Dark Mode: Customize the interface to your preference with the built-in dark mode feature.
Project Structure
The project structure for Quicklink QR is as follows:

quicklink-qr/ ├── manifest.json ├── popup.html ├── popup.js ├── qr-code-generator.js ├── qrcode.min.js └── style.css

manifest.json: Configuration file containing metadata for the Chrome extension.
popup.html: HTML file defining the structure of the extension popup interface.
popup.js: JavaScript file handling user interactions and functionality within the popup.
qr-code-generator.js: JavaScript file responsible for generating QR codes based on user input.
qrcode.min.js: Minified version of the QR code generation library.
style.css: Cascading Style Sheets file providing styling for the extension popup.
Technologies Used
Quicklink QR leverages the following technologies:

HTML5: Utilized for structuring the popup interface.
CSS3: Provides styling for the extension popup, including support for light and dark modes.
JavaScript: Powers the functionality of the extension, including QR code generation and user interactions.
QRCode.js: Library utilized for generating QR codes directly within the browser.
Contributing
Contributions to Quicklink QR are welcome and encouraged! To contribute, please follow these steps:

Fork the Repository: Fork the Quicklink QR repository to your own GitHub account.
Create a New Branch: Create a new branch to work on your feature or bug fix:
Make Your Changes: Make your changes or additions to the codebase.
Commit Your Changes: Once your changes are complete, commit them with a descriptive commit message:
Push to Your Branch: Push your changes to your branch on GitHub:
Open a Pull Request: Finally, open a pull request from your branch to the main repository. Be sure to provide a clear description of your changes.
License
Quicklink QR is licensed under the MIT License. For full details, see the LICENSE file.
