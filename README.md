# Prethesis

This repository contains the source code for the MERN stack project developed as part of my thesis.

## Getting Started

Follow these steps to set up the project for local development:

1. Clone the repository:

git clone https://github.com/anhtuan00/prethesis.git

2. Open the cloned repository in Visual Studio Code.

3. Set up the `.env` file in the `backend` folder:

MONGO_URL="Your mongo url"
JWT_SECRET="Your jwt secret"
JWT_LIFETIME="Your jwt lifetime"

4. Install dependencies in the `backend` folder:

cd backend
yarn install
cd ..

5. Install dependencies in the `frontend` folder:

cd frontend
yarn install
cd ..

6. Install dependencies in the root folder:

yarn install

7. Start the project:

yarn run start

Now, the project should be running at `http://localhost:3000`.

## Deployment on Render

Follow these steps to deploy your project on Render:

1. Sign up for an account at [https://render.com/](https://render.com/) if you don't have one already.

2. Create a new **Web Service** by clicking on the "New" button at the top right corner of Render Dashboard and selecting "Web Service".

3. Choose "GitHub" or "GitLab" as your repository provider and authorize Render to access your repositories.

4. Select the repository containing your project (e.g., the repository you forked from the original repo).

5. Configure the Web Service:

   - **Name:** Set the name for the service (e.g., "your-project").
   - **Branch:** Select the `main` branch.
   - **Runtime:** Choose "Node".
   - **Root Directory:** Set the root directory to `backend`.
   - **Build Command:** Set the build command to `yarn pre-deploy`.
   - **Start Command:** Set the start command to `yarn deploy`.

6. Configure environment variables and secret files:

   - Click on the "Environment" tab.
   - Add the following environment variables:
     - `MONGO_URL`: Set this to your MongoDB connection string.
     - `JWT_SECRET`: Set this to your JWT secret.
     - `JWT_LIFETIME`: Set this to your JWT lifetime.
   - Click on the "Secret Files" tab.
   - Click on "Add Secret File".
   - Set the **Filename** to `.env`.
   - Copy the contents of your local `.env` file into the **Content** field.

7. Click "Create" to deploy your service.
