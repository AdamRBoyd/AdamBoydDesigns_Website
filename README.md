# Welcome to the code for my jewelry website!

While working with Etsy and the fees that they impose, I decided I wanted a business website of my own, and while it currently still relies on Etsy for purchasing of the final product, I will eventually be moving inventory management and payment handling elsewhere. But for now I use Etsy to handle this and host the images.

## Inventory information management

To pull the listings I have written a Node.js program that taps into the Etsy API, pulls down all the listings as one large json formatted block. I then trim and separate that block into the information I need and the separate files used. If you would like to see my grabber code, please contact me. I do not keep it public as there is a private API key embedded in the code, and any shared code will have that removed prior to sharing.
