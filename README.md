# Portfolio Website
## 5 page portforlio for a musician

### Table of Contents 
 ***♩ - Technologies***
 ***♫ - Setup***
 ***🎶 - Support***

### ♩ Technologies

This project was built using [NextJS](https://nextjs.org), deployed though [Vercel](https://vercel.com). 

The project uses a NoSQL database - Firestore, from [Google's Cloud Firebase](https://firebase.google.com) service.

As such, the project is written in Javascript, with components using the JSX format.

Styles were written in SCSS before being rendered into CSS files, 1 directory higher. I would change this next time around and find a cleaner solution. All styles folders, globabl and on a component level include one css file, and a sub-folder named `scss` which houses segmented stylesheets.

### ♫ Setup


1. Clone this repo
2. run `npm i` to install dependencies listed in `package.json`
3. run `npm run dev` to run development server (default = `localhost:3000`)
4. ensure scss compiler is set to push changes to a file by the same name, 1 directory higher than the `.scss` file

> If you take on ownership of this repo, please be aware that at present, any changes that are pushed to the main branch will result in a redeployment of the site which reflects those changes.

> ***N.B.*** This project will not work without a connected firebase project. Please contact me for the information regarding the data-structure and attached security rules.

### 🎶 Support
For further assistance, please open an issue here, or contact me via the contact form on [my website](https://wrweb.dev).

