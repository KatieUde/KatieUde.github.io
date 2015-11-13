## Medieval Madness

### Framework
I started out brainstorming a variety of ideas for this project. Initially prior to seeing the guidelines, I had considered doing a memory game, but then once that was an example, I decided I wanted to do something more original. Growing up, I was a huge consumer of point-and-click games (mostly of the RPG variety) produced by companies such as Sierra. I wanted to make a game that was more nostalgic for me and thus I came up with the idea for a hidden object game.

I wireframed out my drawing and knew I wanted to have at least three screens. It would open with the welcome page with graphics intended to look "old school". Then I planned to transition to a logic puzzle, which one would need to solve in order to move to the next "level" which consisted of the hidden object portion. I originally intended for there to be multiple levels within the hidden object portion, but that ended up being out of scope for the given time frame.

In addition, while the first logic portion allows for two-player interaction, I ended up scratching that further along in the game. Hidden object games are typically made to be single-player experiences as it is difficult to allow for multiple players due to the nature of the game and objective.

### Installation Instructions & Technology
This game was built using HTML, CSS, Sass, and jQuery. There is no installation necessary as it is an in-browser game that should be able to run on a variety of platforms. While building this out however, I was running it exclusively on Chrome, so optimal performance is likely to be found by using the same.

### Unsolved Issues
While building this out I did run into a few roadblocks and left some items unresolved due to time constraints. These include the following:
* Spacing/presentation of the shapes on the 'door' logic puzzle -- I could not get the CSS to cooperate and position them properly in an arc.
* Click logic for determining the winners of the 'door' logic puzzle -- In order for the click's to reset and have everything clear it, it is dependent on the fleur-de-lis being the last object clicked and there should be a way for that to be flexible
* Hidden object images had to be set as absolute to the background wrapper -- this causes issues with re-sizing the screen and does not allow for proper responsive design. I tried a variety of solutions including setting a z-index to resolve and allow the images to move with the background to no avail.
* There is only one level of hidden object play and I would have liked to have been able to build additional ones out

### Sources
* The image for the castle door was found on http://abctoppictures.net/ by performing a google search.
* The image for the interior of the castle was found on http://leqi.coby performing a google search as well. The copyright on the site stated that images displayed may be used for Free or educational purposes.
