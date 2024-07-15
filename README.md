# PhrasePic

PhrasePic is a text-to-image generator built using Next.js. It leverages Stability AI's Stable Diffusion model API hosted on Hugging Face to convert text prompts into images.

**NOTE** : The project currently in development stage.

## Table of Contents

<!-- - [Demo](#demo) -->
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
<!-- - [License](#license) -->
- [Credits](#credits)
- [Contact](#contact)

<!-- ## Demo

Check out the live demo of PhasePic [here](#). -->

## Features

- Convert text prompts into images using AI.
- Download the generated images.
- Refresh to clear the current input and image.
- Responsive design for better user experience.
- Input via voice/speech option enabled.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later).
- npm or yarn.
- Huggingface Access Token.


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SubramanyaKS/PhrasePic.git
   cd PhrasePic
   ```

2. Install dependencies:
    ```bash
    npm install
    or
    yarn install
    ```

3. Create .env.local file in the root directory and add your Hugging Face API key:

    ```bash
    NEXT_PUBLIC_API_KEY=<your-huggingface-access-token>
    MONGODB_URI=<your-database-url>
    JWT_SECRET=<your-jwt-secret>
    NEXTAUTH_SECRET=<your-nextauth-secret>
    NEXTAUTH_URL=<your-next-auth-url>
    EMAIL_SERVER=<your-email-server>
    EMAIL_PORT=<email-port>
    EMAIL_USER=<sending-email-id>
    EMAIL_PASS=<sending-email-password>
    EMAIL_FROM=<sending-email-id>
    NEXT_PUBLIC_URL=<stable-diffusion-api-url>
    ```

### Usage

1. Start the development server:

    ```bash
        npm run dev
        or
        yarn dev
    ```

2. Open your browser and navigate to http://localhost:3000 to see the application in action.

#### Generating an Image

1. Enter a text prompt in the input field.
2. Click the "Generate" button to create an image based on the input text.
3. Click the "Download" button to save the generated image to your device.
4. Use the "Refresh" button to clear the current input and image.
5. Click on "Mic" icon button for input via speech.

### Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Hugging Face](https://huggingface.co/) - Model hosting platform
- [Stable Diffusion](https://www.stability.ai/) - AI model for generating images from text

### Contributing

We welcome contributions! If you'd like to contribute to PhrasePic, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/PhrasePic/blob/main/CONTRIBUTING.md).

<!-- ### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. -->

### Credits

* [Hugging Face](https://huggingface.co/)

* [Stability AI](https://huggingface.co/stabilityai/)

### Contact

If you have any questions or suggestions, feel free to reach out to me:

- GitHub: [SubramanyaKS](https://github.com/SubramanyaKS)
