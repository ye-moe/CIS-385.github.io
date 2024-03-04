class Catalog
{
constructor()
{
 this.products=
 [
{id:1, name:"Honkai Star Rail", image:"honkai4.jpg", description:`Honkai: Star Rail is a new HoYoverse space fantasy RPG. 
Hop aboard the Astral Express and experience the galaxy's infinite wonders filled with adventure and thrills. 
Players will meet new companions across various worlds and maybe even run into some familiar faces. 
Overcome the struggles together caused by Stellaron and unravel the hidden truths behind it! 
May this journey lead us starward! Price: $0.00 `,price:0.00},
{id:2, name:"Stardew Valley",image:"stardew.jpeg", description:`Stardew Valley is an open-ended country-life RPG! 
You've inherited your grandfather's old farm plot in Stardew Valley. 
Armed with hand-me-down tools and a few coins, you set out to begin your new life. 
With over 50+ hours of gameplay content and new Mobile-specific features, such as auto-save and multiple controls options. 
Can you learn to live off the land and turn these overgrown fields into a thriving home? Price: $14.99 `,price:14.99},
{id:3, name:"Transistor",image:"transistor.jpeg", description:`From the makers of indie masterpiece Hades, this stunning RPG thrusts you into a hauntingly beautiful sci-fi world brimming with intrigue. 
To unravel the mysteries of Cloudbank, you'll need to fight robotic goons in intense tactical battles while modifying your weapon with powerful new abilities. Price: $4.99 
`,price:4.99},
{id:4, name:"Oxenfree",image:"oxenfree.jpeg", description:`The story: Alex is a bright, rebellious teenager who brings her new stepbrother, Jonas, to an overnight party on a strange, old military island. 
But the senior-year tradition takes a scary turn when she stumbles upon the island's cryptic past in this World War II-inspired supernatural narrative. Price: $9.99 
`,price:9.99},
{id:5, name:"Minecraft",image:"minecraft.png", description:`Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. 
Create, explore, and survive along or play with friends on all different devices. 
Scale craggy mountains, unearth elaborate caves, and mine large ore veins. Discover lush cave and dripstone cave biomes. 
Light up your world with candles to show what a savvy spelunker and master mountaineer you are! Price: $6.99 
`,price:6.99}
 ];
}
getProducts(){return this.products;}
getItem(id)
{
 for (let i=0; i<this.products.length; i+=1)
 {
 if(this.products[i].id==id) return this.products[i];
 }
 return null;
}
findItem(name)
{
for (let i=0; i<this.products.length; i+=1)
{
 if(this.products[i].name==name) return this.products[i].id;
}
return -1;
}
}