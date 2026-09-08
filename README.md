# PhrasePic

PhrasePic is a full-stack text-to-image application. Users can create an account, sign in, submit a prompt, and download the generated image. The Next.js application owns the web UI and API routes; image generation is delegated to a separately hosted FastAPI service.

## Contents

- [Features](#features)
- [Architecture](#architecture)
- [Requirements](#requirements)
- [Local development](#local-development)
- [Environment variables](#environment-variables)
- [Production deployment](#production-deployment)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Prompt-to-image generation through a FastAPI image service.
- Account registration and credentials-based authentication through Supabase Auth.
- Supabase-managed sessions with SSR cookie refresh.
- Supabase password recovery and password updates.
- Request rate limiting on image generation.
- Image preview, download, reset, and speech-to-text prompt input.
- Responsive interface built with Tailwind CSS.

## Architecture

```text
Browser -> Next.js UI -> /api/generate -> FastAPI image service
                          -> Supabase Auth
```

The browser never needs the image-service credentials. The `/api/generate` route validates the prompt, applies IP-based rate limiting, calls the FastAPI service, and returns the image as a data URL.

## Requirements

- Node.js 18.18 or newer (Node.js 20 LTS recommended).
- npm 9 or newer.
- A running FastAPI image-generation service accepting `POST` requests with `{ "prompt": "..." }` and returning an image response.

## Local development

1. Clone the repository and enter it:

    ```bash
    git clone https://github.com/SubramanyaKS/PhrasePic.git
    cd PhrasePic
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create `.env.local` using the template below.

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` for development and configure the same variables in the deployment provider for production:

```dotenv
# Required: Supabase project credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key

# Required: FastAPI endpoint used by /api/generate
FASTAPI_URL=http://localhost:8000/generate

```

`FASTAPI_URL` is read on the server. Do not prefix secrets or private service URLs with `NEXT_PUBLIC_`, commit `.env.local`, or expose credentials in client-side code. Configure the Supabase Auth recovery URL allow-list and email template for `/reset-password`.

## Production deployment

PhrasePic can be deployed anywhere that supports a Next.js production server, such as Vercel or a Node.js host.

1. Provision the Supabase project and FastAPI image service.
2. Add every variable in the [environment variables](#environment-variables) section to the production environment. Keep secrets out of source control and build logs.
3. Build and start the application:

    ```bash
    npm ci
    npm run build
    npm run start
    ```

4. Confirm that registration, login, image generation, image download, and password reset work from the public HTTPS URL.

The image endpoint is rate limited by client IP. If the app runs behind a proxy, make sure the platform forwards `x-forwarded-for` correctly. Review the limits and storage configuration in `src/app/utils/ratelimit.ts` before exposing the service to significant traffic.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run the configured Next.js lint command. |

There is currently no automated test script in `package.json`.

## Project structure

```text
src/app/              Next.js pages, layouts, API routes, and UI components
src/app/api/          Authentication and image-generation endpoints
src/app/hooks/        Client-side feature hooks
src/lib/              Shared infrastructure, including Supabase clients
public/               Static assets
```

## Contributing

Bug reports, feature requests, and pull requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a change. Run `npm run build` and `npm run lint` before submitting a pull request, and document any required environment or API changes.

## License

PhrasePic is licensed under the MIT License. See [LICENSE](./LICENSE).

## Contact

- GitHub: [SubramanyaKS](https://github.com/SubramanyaKS)
- Email: [subramanyaks22@gmail.com](mailto:subramanyaks22@gmail.com)
