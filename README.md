# PhrasePic

PhrasePic is a text-to-image generator built using Next.js. It leverages Stability AI's Stable Diffusion model API hosted on Hugging Face to convert text prompts into images.

**NOTE** : The project currently in development stage.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)

## Demo

Check out the live demo of PhasePic [here](#).

## Features

- Convert text prompts into images using AI.
- Download the generated images.
- Refresh to clear the current input and image.
- Responsive design for better user experience.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SubramanyaKS/PhrasePic.git
   cd PhasePic
   ```

2. Install dependencies:
    ```bash
    npm install
    or
    yarn install
    ```

3. Create .env.local file in the root directory and add your Hugging Face API key:
    ```bash
    NEXT_PUBLIC_API_KEY=<your-api-key>

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

### Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Hugging Face](https://huggingface.co/) - Model hosting platform
- [Stable Diffusion](https://www.stability.ai/) - AI model for generating images from text

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

<!-- ### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. -->

### Credits

* [Hugging Face](https://huggingface.co/)

* [Stability AI](https://huggingface.co/stabilityai/)

### Contact

If you have any questions or suggestions, feel free to reach out to me:

- GitHub: [SubramanyaKS](https://github.com/SubramanyaKS)
