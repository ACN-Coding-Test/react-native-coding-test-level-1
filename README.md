## Follow these steps

Application Setup (DO THIS FIRST)

- Fork this repository into your GitHub account (You can create a GitHub account if you don't have one)
- Clone the repository from your repository
- Checkout main branch
- Install dependencies
- To start development use npm start
- You may follow this way of structuring your code:
  - Create `src` folder at the root of your project
  - Inside `src` folder, create 5 other folders:
    - screens
    - components
    - redux
    - services
    - utils
  - You may interpret the meaning of each folder however you like, you will need to justify it later in the interview
- Should you don't want to proceed with the recommended structure, you can use your own structure and justify it later in the interview as to why

---

### First Challenge - Your Info

1. Create a new branch from `main` and name it `feature/my-info`
2. Checkout `feature/my-info` branch
3. Create a file in root directory and name it `my-info.json`
4. In `my-info.json` file, insert:
   1. 3 of your Favorite colors in an `array`
   2. Name of the country that you want to visit as a `string`
   3. Population of that country as a `number`
   4. Will you visit that country within 5 years for now as a `boolean`
5. Commit your changes with message `Add my-info.json`
6. Change the property field names to follow **camelCase** format in `my-info.json` if it's not already in **camelCase**
7. Add 3 of your favorite foods at the end of the `my-info.json` object
8. Commit your changes with message `Add my favorite foods`
9. Change the property field names to follow **snake_case** format in `my-info.json`
10. Commit your changes with message `Change property field names to 'snake_case' format`
11. Push your changes to remote
12. Create a pull request from `feature/my-info` to `main`
13. Merge the PR and delete `feature/my-info`

### Second Challenge - Form Submission

1. Create a new branch from `main` and name it `feature/form-submission`
2. In the main screen, create a button with text `Contact Us` which when clicked will redirect the user to another screen which has
   1. A text field to input user's name
      1. Must not be null
      2. Must contain letters only
      3. Maximum of 50 chars
   2. A text field to input user's email
      1. Must be a valid email address
   3. A calendar field to input user's birthday
      1. Must not able to select future date
   4. A Button that says `Submit`
3. When submit button clicked, it will show a pop up with the user's input in it
4. Commit your changes with message `Finish form validation`
5. Push your changes to remote
6. Create a pull request from `feature/form-submission` to `main`
7. Merge the PR and delete `feature/form-submission`

### Third Challenge - Catalog

1. Create a new branch from `main` and name it `feature/catalog`
2. In the main screen, create a button with text `View Catalog` which when clicked will redirect the user to another screen which has
   1. A list of pokemon (From https://pokeapi.co/)
      1. Make it paginated with 10 pokemons per page
      2. Display each pokemon in a card, with a button at the bottom of each card that says `View`
   2. When user clicks `View` button, it will go to another screen and the user can see the details of the pokemon.
   3. In the pokemon details screen, there must be a back button to go back to list of pokemon screen
3. Commit your changes with message `Finish catalog`
4. Push your changes to remote
5. Create a pull request from `feature/catalog` to `main`
6. Merge the PR and delete `feature/catalog`

### Bonus Stage

1. Apply clean code principle - **MANDATORY FOR SENIORS**
2. Do unit tests and integration tests - **MANDATORY FOR SENIORS**
3. Add code formatting checks with `prettier` and linter with `es-lint` using the recommended settings for React Native (you can google this) - **MANDATORY FOR SENIORS**
4. Implement a state management using Redux so that we don't need to call the api again when we want to see the list of pokemons - **MANDATORY FOR SENIORS**
