# How to deploy Nextjs to Github page using Github Actions

- First: we have a nextjs project ready to deploy.
- Create a respository named: `github-username.github.io`
- in root of the project create a folder and file like below:
  ```
  +-- .github
      +-- workflows
          +-- .intergrate.yml
  ```
  ```yml
    # intergrate.yml file
    name: Build and Deploy
    on: [push]
    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        defaults:
          run:
            working-directory: ./ # root of nextjs project

        steps:
          - name: Checkout 🛎️
            uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
            with:
              persist-credentials: false

          - name: Cache  💾
            uses: actions/cache@v2
            with:
              path: ${{ github.workspace }}/.next/cache
              key: ${{ runner.os }}-nextjs-${{ hashFiles('**/yarn-lock.json') }}

          - name: Install and Build and Export 🔧 # This example project is built using yarn and outputs the result to the 'out' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
            uses: actions/setup-node@v2
          - run: yarn install
          - run: yarn run build
          - run: yarn run export
          - run: touch ./out/.nojekyll
            env:
              NODE_AUTH_TOKEN: ${{ secrets.YARN_TOKEN }}
              CI: true

          - name: Deploy 🚀
            uses: JamesIves/github-pages-deploy-action@3.6.2
            with:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
              BRANCH: gh-pages # The branch the action should deploy to.
              FOLDER: out # The folder the action should deploy.
              CLEAN: true # Automatically remove deleted files from the deploy branch
  ```

- Commit and push the code to Github, you should see the project is running its workflows.
- After the workflows complete its running, your website is up and running.