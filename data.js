const mobileLinks = [
  { id: 1, linkText: 'South America' },
  { id: 2, linkText: 'North America' },
  { id: 3, linkText: 'South Asia' },
  { id: 4, linkText: 'North Asia' },
  { id: 5, linkText: 'New Zealand' },
  { id: 6, linkText: 'Europe' },
  { id: 7, linkText: 'East Coast Australia' },
  { id: 8, linkText: 'West Coast Australia' },
];

const mainNavLinks = [
  { id: 1, linkText: 'Trips' },
  { id: 2, linkText: 'Activity' },
  { id: 3, linkText: 'Countries' },
  { id: 4, linkText: 'FAQ' },
  { id: 5, linkText: 'Blocgs' },
  //   { id: 6, linkText: 'Sign In' },
];

const footerLinks = [
  { id: 1, linkText: 'Australia' },
  { id: 2, linkText: 'New Zealand' },
  { id: 4, linkText: 'Finland' },
  { id: 5, linkText: 'Netherlands' },
  { id: 6, linkText: 'Singapore' },
  { id: 7, linkText: 'USA' },
  { id: 8, linkText: 'San Marino' },
  { id: 9, linkText: 'Palau' },
  { id: 10, linkText: 'Panama' },
  { id: 11, linkText: 'New Zealand' },
  { id: 12, linkText: 'Panama' },
  { id: 13, linkText: 'Mongolia' },
  { id: 14, linkText: 'Nicaragua' },
  { id: 15, linkText: 'Peru' },
  { id: 16, linkText: 'Morocco' },
  { id: 17, linkText: 'Malaysia' },
  { id: 18, linkText: 'Papua New Guinea' },
  { id: 19, linkText: 'Qatar' },
];

// prettier-ignore
const blogs = [
    {newBlog: true, author: 'Lacey Jones', country: "Italy",  reads: 14, text: "The Colosseum, a massive amphitheater, stands as a testament to Roman history and gladiatorial combat.", url: 'https://images.unsplash.com/photo-1593166242459-0b589ccca85f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbG9zaXVtfGVufDB8fDB8fHww' },
    {newBlog: true, author: 'Lisa Smith', country: "Japan",  reads: 8, text: "Mount Fuji, an active volcano, is a revered cultural icon and a UNESCO World Heritage Site.", url: 'https://images.unsplash.com/photo-1570462395760-8d708c39e7f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVqaXxlbnwwfHwwfHx8MA%3D%3D' },
    {newBlog: false, author: 'Adam Ellis', country: "Spain",  reads: 24, text: "Sagrada Familia, a Gaudi-designed church, is a Barcelona landmark known for its unique architecture and ongoing construction.", url:'https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D'},
    {newBlog: false, author: 'Adam Ellis', country: "Brazil", reads: 3,  text: "Christ the Redeemer statue, with open arms, overlooks Rio de Janeiro and is a symbol of hope and Christianity.", url: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhemlsfGVufDB8fDB8fHww' },
    {newBlog: false, author: 'Adam Ellis', country: "France", reads: 4,  text: "The Eiffel Tower, a wrought-iron landmark, is a global symbol of romance and engineering marvel." },
  ];

// prettier-ignore
const countries = [
    {index: 17 , fromPrice: 988, offer: false, moneyOff: 50  , id: 18, countryName: 'Australia', url: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVzdHJhbGlhfGVufDB8fDB8fHww' },
    {index: 18 , fromPrice: 877, offer: false, moneyOff: 20  , id: 19, countryName: 'New Zealand', url: 'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D' },
    {index: 19 , fromPrice: 989, offer: false, moneyOff: 60  , id: 20, countryName: 'Thailand', url: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D' },
    // {index: 20 , offer: true, moneyOff: 50  , id: 21, countryName: 'Elephants & Island Hopping', url: 'https://images.unsplash.com/photo-1578326626553-39f72c545b07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnRzfGVufDB8fDB8fHww' },   
]

const socialLinks = [
  { id: 1, classes: 'fa-brands social-icon fa-facebook' },
  { id: 2, classes: 'fa-brands social-icon fa-twitter' },
  { id: 3, classes: 'fa-brands social-icon fa-instagram' },
];

const travelReviews = [
  {
    id: 1,
    name: 'John Doe',
    reviewText:
      'This travel company made planning my trip to Greece a breeze. Their customer service was excellent, and they helped me find the perfect hotel and activities. I highly recommend them!',
    starRating: 5,
    url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    name: 'Jane Smith',
    reviewText:
      'I had a fantastic experience booking my adventure tour through this company. The guides were knowledgeable and friendly, and the itinerary was well-organized. I will definitely use them again!',
    starRating: 5,
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    name: 'Lisa Lee',
    reviewText:
      'This travel company offered great deals on flights and accommodations for my family vacation. The booking process was simple and hassle-free. We had a wonderful time, thanks to their expertise!',
    starRating: 4,
    url: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  //   {
  //     id: 4,
  //     name: 'Sarah Jones',
  //     reviewText:
  //       "I recently used this company to book a last-minute trip. They were incredibly helpful and found me a great deal on a flight and hotel. I wouldn't hesitate to recommend them for any travel needs!",
  //     starRating: 5,
  //   },
  //   {
  //     id: 5,
  //     name: 'David Williams',
  //     reviewText:
  //       'Overall, I had a positive experience with this travel company. The communication was clear, and they were always available to answer my questions. Would recommend for a stress-free travel planning experience!',
  //     starRating: 4,
  //   },
];

// prettier-ignore
const products = [
    {index: 0, offer: true, id: 1, productName: 'Work Australia', url: './temp/img-1.jpg' },
    {index: 1, offer: false, id: 2, productName: 'Work New Zealand', url: './temp/img-2.jpg' },
    {index: 2, offer: true, id: 3, productName: 'Work and Travel Thailand', url: './temp/img-3.jpg' },
    {index: 3, offer:false, id: 4, productName: 'Volunteer South Africa', url: './temp/img-4.jpg' },
    {index: 4, offer: true, id: 5, productName: 'South Africa Lion Sanctuary', url: './temp/img-5.jpg' },
    {index: 5, offer: false, id: 7, productName: '12 Day Thailand Intro', url: './temp/img-6.jpg' },
    {index: 6, offer: true, id: 7, productName: '12 Day VIETNAM Intro', url: './temp/img-7.jpg' },
    {index: 7, offer: false, id: 8, productName: '15 Day Vietnam Intro', url: './temp/img-8.jpg' },
    // {index: 8, offer: false, id: 9, productName: '30 Day East Coast Explorer', url: 'https://images.unsplash.com/photo-1693785364893-99e3379a9e07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVzcmFsaWElMjBxdWVlbnNsYW5kfGVufDB8fDB8fHww' },
    // {index: 9,  offer: false, id: 10, productName: '7 Day Thai cooking course', url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRoYWklMjBjb29raW5nfGVufDB8fDB8fHww' },
    // {index: 10 , offer: true  , id: 11, productName: '15 Day West Coast Australia Explorer', url: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlc3QlMjBjb3N0JTIwYXVzdHJhbGlhfGVufDB8fDB8fHww' },
    // {index: 11 , offer: false  , id: 12, productName: 'Volunter in Thailand', url: 'https://images.unsplash.com/photo-1510379475279-d53bd0a42636?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRoYWlsYW5kJTIwdm9sbHVudGVlcnxlbnwwfHwwfHx8MA%3D%3D' },
    // {index: 12 , offer: false  , id: 13, productName: 'New Zealand Internship', url: 'https://plus.unsplash.com/premium_photo-1682449558329-b04c01db4d42?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D' },
    // {index: 13 , offer: true  , id: 14, productName: 'South Africa Over Land 14 Day Explorer', url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvdXRoJTIwYWZyaWNhfGVufDB8fDB8fHww' },
    // {index: 14 , offer: false  , id: 15, productName: 'Austrilian Professional Internship', url: 'https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8fDB8fHww' },
    // {index: 15 , offer: true  , id: 16, productName: 'Jungle Jewels & Beach Bonfires', url: 'https://plus.unsplash.com/premium_photo-1673288456151-4f7b871863c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anVuZ2xlfGVufDB8fDB8fHww' },
    // {index: 16 , offer: false  , id: 17, productName: 'Temple Trails & Island Bliss', url: 'https://images.unsplash.com/photo-1613023557188-3fa48e304058?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoYWlsYW5kJTIwdGVtcGxlfGVufDB8fDB8fHww' },
    // {index: 17 , offer: false  , id: 18, productName: 'Tuk Tuks & Turtle Bay', url: 'https://plus.unsplash.com/premium_photo-1684943834601-3a5e8e8f7005?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVydGxlfGVufDB8fDB8fHww' },
    // {index: 18 , offer: false  , id: 19, productName: 'Floating Bungalows & Muay Thai Mayhem', url: 'https://images.unsplash.com/photo-1700145382711-04ffeaa1b22f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvYXRpbmclMjBodXR8ZW58MHx8MHx8fDA%3D' },
    // {index: 19 , offer: false  , id: 20, productName: 'Spicy Streets & Serene Shores', url: 'https://images.unsplash.com/photo-1524799582429-ccc076b35aef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcmV8ZW58MHx8MHx8fDA%3D' },
    // {index: 20 , offer: true  , id: 21, productName: 'Elephants & Island Hopping', url: 'https://images.unsplash.com/photo-1578326626553-39f72c545b07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnRzfGVufDB8fDB8fHww' },
    // {index: 21 , offer: false  , id: 22, productName: 'Monks & Mangroves ', url: 'https://images.unsplash.com/photo-1510378691116-275b1477206c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ua3N8ZW58MHx8MHx8fDA%3D' },
    // {index: 22 , offer: false  , id: 23, productName: 'Markets & Mermaids ', url: 'https://images.unsplash.com/photo-1590119227988-a20d53ce33c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhhaSUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D' },
    // {index: 23 , offer: false  , id: 24, productName: 'Silks & Scuba', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmF8ZW58MHx8MHx8fDA%3D' },
    // {index: 24 , offer: false  , id: 25, productName: 'City Lights & Coral Reefs', url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29yYWx8ZW58MHx8MHx8fDA%3D' },
    // {index: 25 , offer: false  , id: 26, productName: 'Khao Sok & Koh Lanta', url: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S2hvJTIwU29rfGVufDB8fDB8fHww' },
    // {index: 26 , offer: false  , id: 27, productName: 'Full Moon & Floating Markets', url: 'https://images.unsplash.com/photo-1495837174058-628aafc7d610?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMG1vb24lMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D' },
    // {index: 27 , offer: false  , id: 28, productName: 'Temples & Thai Cooking', url: 'https://images.unsplash.com/photo-1672932727318-6c0291d4f0df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhaSUyMGNvb2tpbmd8ZW58MHx8MHx8fDA%3D' },
    // {index: 28 , offer: false  , id: 29, productName: 'Street Food & Serenity', url: 'https://images.unsplash.com/photo-1552912470-ee2e96439539?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    // {index: 29 , offer: true  , id: 30, productName: 'Waterscapes & White Sand', url: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBzYW5kJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D' },
  
  
    // { id: 31, productName: 'Caves & Cocktails', url: '' },
    // { id: 32, productName: '', url: '' },
    // { id: 33, productName: '', url: '' },
    // { id: 34, productName: '', url: '' },
    // { id: 35, productName: '', url: '' },
    // { id: 36, productName: '', url: '' },
    // { id: 37, productName: '', url: '' },
    // { id: 38, productName: '', url: '' },
    // { id: 39, productName: '', url: '' },
    // { id: 40, productName: '', url: '' },
    // { id: 41, productName: '', url: '' },
    // { id: 42, productName: '', url: '' },
    // { id: 43, productName: '', url: '' },
    // { id: 44, productName: '', url: '' },
    // { id: 45, productName: '', url: '' },
    // { id: 46, productName: '', url: '' },
    // { id: 47, productName: '', url: '' },
    // { id: 48, productName: '', url: '' },
    // { id: 49, productName: '', url: '' },
    // { id: 50, productName: '', url: '' },
    // { id: 51, productName: '', url: '' },
  ];

export {
  footerLinks,
  socialLinks,
  mainNavLinks,
  mobileLinks,
  travelReviews,
  products,
  countries,
  blogs,
};
