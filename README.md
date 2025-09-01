# Hello!!

## If you are updating this website you are one of these two people

### Updating Board Members for New Year

If you are just updating the board members, find the file called `board.json`. This is the file you want to edit. (Location: `Frontend/public/board.json`)

This file contains [JSON objects](https://www.w3schools.com/whatis/whatis_json.asp), and the most important and difficult part about this is making sure the images are correct.

First of all, go upload pictures of the new board into `Frontend/src/assets/board` (**CRUCIAL**: if you do not do this exact location, __it will break the site__)

After uploading the images, make sure that when invoking the files in `board.json`, you are putting the **EXACT** image name (if your file is called `John_Smith.png`, make sure you put **EXACTLY** `John_Smith.png` into the *image* field)

Then, edit the corresponding information in the `board.json` file that is left, you do not need to be technical to understand what to change (all the items are labeled).

## HEY

**BUT WAIT**. We are not done yet.

Important thing to do:
- Go into your terminal
- make sure your directory IN THE TERMINAL is: `~whatever-over-here/ucihkn.github.io/Frontend`
- run this command: `npm run deploy`

NOW you should be done!

The changes to the site will be visible to you at [ucihkn.github.io](https://ucihkn.github.io)

If you have any troubles please refer to [this page](https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3)

### Making Changes to Site

The site was made using help from Cursor.com, so it may be advisable to utilize any sort of resources that may help you to develop the site further or make any changes as necessary.

The tech stack:
- React
- Vite (package manager)
- Bootstrap

This README.md was updated last in May 2025 by Neet
