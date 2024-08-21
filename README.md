# Rissa Quindoza -Cloud Resume-
Cloud Resume designed on Figma, built on Vue.js and Azure Functions, tested with xUnit and Playwright, deployed on Azure, and provisioned through Terraform.
View it live [here](https://rissaquindoza.com).

![Screenshot 2024-08-21 011235](https://github.com/user-attachments/assets/06142482-fb8a-4894-ad1e-2a61ecc893c6)

## Structure
![FRONTEND](https://github.com/user-attachments/assets/6bddd82e-78c1-46a1-ad52-7e3437d85728)

### Frontend
The frontend has been designed via Figma and coded via Vuejs. It also leverages on Tailwind for ease in coding.

### Backend
The website features a view counter. It calls Azure Functions to increase the counter and update the Azure CosmosDB record.

### Testing
Testing is done via xUnit and Playwright. xUnit does unit testing before code is deployed to Azure Functions, while Playwright performs end-to-end testing on the website after deployment.

### Infrastructure as Code
Terraform creates and maintains the Azure Blob Storage, Azure CosmosDB, Azure Functions, Application Insights, and the DNS records required to link them to Cloudflare. Its state is stored in a separate Azure Blob Storage.

### CI/CD
 Github Actions checks which parts of the code have changes. When changed, it triggers terraform to provision resources. It then build and deploys frontend to Azure Blob Storage, as well as run unit tests before deploying backend to Azure Functions. Lastly, it runs E2E testing using Playwright.

## Forking
Feel free to fork, but please credit and link back here! 

Deploying everything as is, there are some things you might want to change:
* frontend/vue
  * Update public files
    * resume.json - Resume info
    * settings.json - Set disableViewCount if deploying without a backend. You will also need to update terraform, playwright tests, and github actions.
    * Add referenced files to the folder
  * src/api/counter.ts - Update API endpoint
* test/playwright
  * Update name being checked
* IaC/terraform
  * Add azure and cloudflare credentials 
  * Update resource names
  * You will need to create a separate storage for the terraform state file, which it will not be provisioning itself. This is so when destroy is called, the state file remains intact. Alternatively, you may opt to only run terraform locally and remove backend support.
* Github workflow
  * Add azure and cloudflare credentials.
  * TF_Create indicates if terraform will be creating everything from scratch. Azure Custom Domains need a handshake with Cloudflare, which cannot be done as Terraform creates the resources. Run the workflow with it set as true initially, then run a second time with it turned off to perform the handshake.

## Building and Running
Repository has been split up and are modular. Each will be running by itself.

### Frontend: Vue

   ```sh
   npm install
   ```
   ```sh
   npm run dev
   ```

### Backend: Azure Functions
Run via VS code azure functions 

### Unit test: XUnit

   ```sh
   dotnet build
   ```
   ```sh
   dotnet test
   ```

### E2E test: Playwright
Playwright is an end to end test and will test both frontend and backend. 

   ```sh
  npx playwright test
   ```

## What's next?
I will be adding modules to each section as I go. Next up might be React tested on Cypress and deployed through AWS.
