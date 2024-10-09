const products = [{
  image:'images/athletic-cotton-socks-6-pairs.jpg',
  name:'Black and Gray Athletic Cotton Socks - 6 Pairs.',
  rating:'images/rating.png',
  priceCent : 1090
},
{
image:'images/intermediate-composite-basketball.jpg',
name:'Intermediate Size Basketball.',
rating:'images/rating.png',
priceCent: 2095
},
{
  image:'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name:'Adults Plain Cotton T-Shirt - 2 Park.',
  rating:'images/rating.png',
  priceCent:799
},
{
  image:'images/black-2-slot-toaster.jpg',
  name:'2 Slots Toaster - Black.',
  rating:'images/rating.png',
  priceCent:1899
},
{
  image:'images/6-piece-white-dinner-plate-set.jpg',
  name:'6 Piece White Dinner Plate Set.',
  rating:'images/rating.png',
  priceCent: 2067
},
{
  image:'images/6-piece-non-stick-baking-set.webp',
  name:'6 - Piece Nonstick, Carbon Steel Oven Bakeware...</',
  rating:'images/rating.png',
  priceCent:3499
},
{
  image:'images/plain-hooded-fleece-sweatshirt-yellow.jpg',
  name:'Plain Hooded Fleece Sweatshirt.',
  rating:'images/rating.png',
  priceCent: 2400
},
{
  image:'images/luxury-tower-set-6-piece.jpg',
  name:'Luxury Towel Set - Graphitr Gray.',
  rating:'images/rating.png',
  priceCent: 3599
},
{
  image:'images/liquid-laundry-detergent-plain.jpg',
  name:'Liquid Laundry Detergent, 110 Loads, 82.5 FL Oz.',
  rating:'images/rating.png',
  priceCent:2899
},
{
  image:'images/knit-athletic-sneakers-gray.jpg',
  name:'Waterproof Knit Athletic Sneekers - Gray.',
  rating:'images/rating.png',
  priceCent:3390
},
{
  image:'images/women-chiffon-beachwear-coverup-black.jpg"',
  name:'Women\'s Chiffon Beachwear Cover Up..',
  rating:'images/rating.png',
  priceCent: 2070
},
{
  image:'images/round-sunglasses-black.jpg',
  name:'Round Sunglasses',
  rating:'images/rating.png',
  priceCent:1560
},
{
  image:'images/women-beach-sandals.jpg',
  name:'Women\'s Two Strap Buckle Sandals - Tan',
  rating:'images/rating.png',
  priceCent: 2499
},
{
  image:'images/blackout-curtains-black.jpg',
  name:'Blackout Curtains Set 4-Pack -Bleige.',
  rating:'images/rating.png',
  priceCent:4599
},
{
  image:'images/men-slim-fit-summer-shorts-gray.jpg',
  name:'Men\'s Slim-Fit Summer Shorts',
  rating:'images/rating.png',
  priceCent:1699
},
{
  image:'images/electric-glass-and-steel-hot-water-kettle.webp',
  name:'Electric Glass and Steel Hot Tea Water Kettle-...',
  rating:'images/rating.png',
  priceCent: 3074
},
{
  image:'images/facial-tissue-2-ply-18-boxes.jpg',
  name:'Ultra Soft Tissue 2-Ply-18 Box.',
  rating:'images/rating.png',
  priceCent:2374
},
{
  image:'images/straw-sunhat.webp',
  name:'Straw Lifeguard Sun Hat.',
  rating:'images/rating.png',
  priceCent:2200
},
{
  image:'images/sky-flower-stud-earrings.webp',
  name:'Sterling Silver Sky Flower Stud Earrings.',
  rating:'images/rating.png',
  priceCent:1799
},
{
  image:'images/women-stretch-popover-hoodie-black.jpg',
  name:'Women\'s Stretch Popover Hoodie',
  rating:'images/rating.png',
  priceCent:1374
},

]; 
let productHTML = '';
products.forEach((product)=>{
 productHTML +=  `<div class="one">
      <div class="part1"><img src="${product.image}" class="socks"></div>
      <div class="part2"><p>${product.name}</p></div>
      <div class="part3"><img src="${product.rating}" class="rating"></div>
      <div class="part4"> &dollar;${(product.priceCent / 100).toFixed(2)}</div>
      <div class="part5"><select name="quantity-select" id="">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select></div>
      <div class="part6"><button class="add-to-cart">Add To Cart</button></div>
    </div>`
  ;
});
console.log(productHTML);
document.querySelector('.body').innerHTML= productHTML;