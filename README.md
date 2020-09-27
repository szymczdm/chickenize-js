# chickenize-js
Release the chickens!!!! No website is safe!

## Demo

To see a demo in action, head to [my site](http://www.dszymczak.com) and 
click on the copyright information in the footer (all the way at the bottom of the page).

Wait for the chicken army to take over. It shouldn't take long.

## What is Chickenize?

Ever want to see what would happen if chickens could design websites? Wonder no more!
With chickenize you can quickly visualize what a site would look like if it were created by a chicken.

Technically speaking, it works for a lot more than just chickens, but that's irrelevant! Release the chickens!

## Quickstart

1. Add the chickenize.js script to your website.
2. Create something you want to click on with an `id="egg"` and add it to your site (or alternately, remove the onload part of the script and call `releaseTheChickens()` from anywhere in your site).
3. Add chicken images (if you want to replace images, otherwise make sure to change the config!)
4. Update the config at the top of chickenize.js to include your chicken images!
5. Load up your site and click on your trigger (or `releaseTheChickens()`)!

## Configuration

Editing the config is easy, just follow the guide below.

 - `target` - The DOM Node to target - defaults to `document.body`
 - `delay` - The delay in milliseconds before the next chickenization happens, defaults to `500`ms
 - `delayModifier` - Number of milliseconds to subtract from the delay for each subsequent chickenization. Defaults to `5`ms.
 
 i.e. The first node takes (delay)ms to chickenize, the second chickenizes (delay - delayModifier) after the first, the third chickenizes (delay - (delayModifier \* 2)) after the second, and so on where the Nth node will take (delay - delay\*N)ms before it chickenizes after the N-1th node.

 - `randomizeNodes` - If set to true, chickenize the DOM Nodes in a random order. Otherwise, traverse down the DOM in order and chickenize as you go. Defaults to `false`
- `replacementText` - Can be either a string or array of strings (or really, anything). Defaults to `['Chicken', 'Bok']`. If it is an array of values, any given node will be chickenized with a random value from the array.
 - `replaceImages` - If true, attempt to replace images using a random image from `imgFilenames`. Otherwise ignore images. Defaults to `true`.
 - `replaceIFrames` - If true, attempt to replace iframe sources with images using a random image from `imgFilenames`. Otherwise ignore iframes. Defaults to `true`.
 - `imgSourceDir` - The source directory for all chicken images. Defaults to `'./chickens/'`. Can be left as an empty string (`''`) to use multiple different sources.
 - `imgFilenames` - The source file names within the sourceDir (or elsewhere if imgSourceDir is set to '') to be used for replacing images. Defaults to `['chicken1.png', 'chicken2.png']`
}

**Note:** I do not have any public domain / shareable chicken images at this time, so you will need to ensure you provide your own if using `replaceImages` and `replaceIFrames`.

# Have fun!

This was a weekend project I made to help teach some friends some JS concepts. Hopefully you can have fun with it too!
Contributions are welcome!
