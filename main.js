let currentAlbum = null;
let currentTracks = [];
let currentIndex = 0;
let showingBonus = false;
let shuffleQueue = [];
let isShuffle = false;
let shuffleHistory = [];
const albumsData = [
  {id:"gaj",title:"Good Ass Job",year:2010,cover:"good-ass-job-cover.jpg",glow:['rgba(128,0,128,.25)','rgba(75,0,130,.25)','rgba(50,50,50,.2)'],tracks:[
    {title:"1. Crazy Life",artist:"Kanye West",src:"crazy-life.mp3"},
    {title:"2. Downtown",artist:"Kanye West",src:"downtown.mp3"},
    {title:"3. Eyes Closed",artist:"Kanye West",src:"eyes-closed.mp3"},
    {title:"4. Flashing Lights 2",artist:"Kanye West",src:"flashing-lights-2.mp3"},
    {title:"5. Ghetto University",artist:"Kanye West",src:"ghetto-university.mp3"},
    {title:"6. Flight School",artist:"Kanye West",src:"flight-school.mp3"},
    {title:"7. Gorgeous",artist:"Kanye West",src:"gorgeous.mp3"},
    {title:"8. Hard Horn Nightmare",artist:"Kanye West",src:"hard-horn-nightmare.mp3"},
    {title:"9. Heartbreaker",artist:"Kanye West",src:"heartbreaker.mp3"},
    {title:"10. Hell Of A Life",artist:"Kanye West",src:"hell-of-a-life.mp3"},
    {title:"11. Higher",artist:"Kanye West",src:"higher.mp3"},
    {title:"12. Holding Me Back",artist:"Kanye West",src:"holding-me-back.mp3"},
    {title:"13. I'll Be Alright",artist:"Kanye West",src:"ill-be-alright.mp3"},
    {title:"14. Ice Cube",artist:"Kanye West",src:"ice-cube.mp3"},
    {title:"15. Take One For The Team",artist:"Kanye West",src:"take-one-for-the-team.mp3"},
    {title:"16. Lonely",artist:"Kanye West",src:"lonely.mp3"},
    {title:"17. Lost In The World",artist:"Kanye West",src:"lost-in-the-world.mp3"},
    {title:"18. Mama's Boy",artist:"Kanye West",src:"mamas-boy.mp3"},
    {title:"19. Never See Me Again",artist:"Kanye West",src:"never-see-me-again.mp3"},
    {title:"20. No Parties In LA",artist:"Kanye West",src:"no-parties-in-la.mp3"},
    {title:"21. POWER",artist:"Kanye West",src:"power.mp3"},
    {title:"22. Runaway",artist:"Kanye West",src:"runaway.mp3"},
    {title:"23. White Dress",artist:"Kanye West",src:"white-dress.mp3"},
    {title:"24. Shoot Up The Station",artist:"Kanye West",src:"shoot-up-the-station.mp3"},
    {title:"25. So Apalled",artist:"Kanye West",src:"so-apalled.mp3"},
    {title:"26. Supernova",artist:"Kanye West",src:"supernova.mp3"},
    {title:"27. Sweat On My Face",artist:"Kanye West",src:"sweat-on-my-face.mp3"},
    {title:"28. The Joy",artist:"Kanye West",src:"the-joy.mp3"},
    {title:"29. THROW MONEY EVERYWHERE",artist:"Kanye West",src:"throw-money-everywhere.mp3"},
],
bonus: [
    { title: "Monster", artist: "Kanye West", src: "monster.mp3" },
    { title: "That's My Bitch", artist: "Kanye West", src: "thats-my-bitch.mp3" }
]},
  {id:"tgfd",
 title:"Thank God For Drugs",
 year:2012,
 cover:"tgfd.gif",        
 lockCover:"tgfd.jpg",    
 glow:['rgba(0,0,139,0.25)','rgba(204,204,0,0.25)','rgba(199,21,133,0.25)','rgba(0,100,0,0.25)','rgba(0,0,0,0.25)','rgba(64,64,64,0.25)'],
 tracks:[
   {title:"1. I Am Not Home",artist:"Kanye West",src:"i-am-not-home.mp3"},
   {title:"2. Yeezus",artist:"Kanye West",src:"yeezus.mp3"},
   {title:"3. Send It Up",artist:"Kanye West",src:"send-it-up.mp3"},
   {title:"4. Cant Get Over Me",artist:"Kanye West",src:"cant-get-over-me.mp3"},
   {title:"5. Talk To Me",artist:"Kanye West",src:"talk-to-me.mp3"},
   {title:"6. LOUDER",artist:"Kanye West",src:"louder.mp3"},
   {title:"7. Good Things Don't Last",artist:"Kanye West",src:"good-things-dont-last.mp3"},
   {title:"8. Perfect Bitch",artist:"Kanye West",src:"perfect-bitch.mp3"},
   {title:"9. Blood On The Leaves",artist:"Kanye West",src:"blood-on-the-leaves.mp3"},
   {title:"10. On Site",artist:"Kanye West",src:"on-site.mp3"},
   {title:"11. GOD",artist:"Kanye West",src:"god.mp3"},
   {title:"12. Guilt Trip",artist:"Kanye West, Jay-Z, Kid Cudi",src:"guilt-trip.mp3"},
   {title:"13. New Slaves",artist:"Kanye West",src:"new-slaves.mp3"},
   {title:"14. Black Skinhead",artist:"Kanye West",src:"black-skinhead.mp3"},
   {title:"15. Emotionless",artist:"Kanye West",src:"emotionless.mp3"},
   {title:"16. No No No No",artist:"Kanye West",src:"no-no-no-no.mp3"},
   {title:"17. Hollywood",artist:"Kanye West",src:"hollywood.mp3"},
   {title:"18. Awesome",artist:"Kanye West",src:"awesome.mp3"},
   {title:"19. One I Love",artist:"Kanye West",src:"one-i-love.mp3"},
   {title:"20. Nobody To Love",artist:"Kanye West",src:"nobody-to-love.mp3"}
 ]},
  {
  id: "yeezus2",
  title: "Yeezus 2",
  year: 2013,
  cover: "yeezus-2.gif",
  lockCover: "yeezus-2-cover.jpg",
  glow: ['rgba(255,0,0,.25)','rgba(255,69,0,.25)'],
  tracks: [
    { title: "1. The World", artist: "Kanye West", src: "the-world.mp3" },
    { title: "2. So Special", artist: "Kanye West", src: "so-special.mp3" },
    { title: "3. Black Skinhead (Remix)", artist: "Kanye West, Miley Cyrus, KIRBY, Travis Scott", src: "black-skinhead-remix.mp3" },
    { title: "4. Back Up Off The Ledge", artist: "Kanye West", src: "back-up-off-the-ledge.mp3" },
    { title: "5. Bad Night", artist: "Kanye West, Young Thug, Tyga ", src: "bad-night.mp3" },
    { title: "6. Gut Feeling", artist: "Kanye West", src: "gut-feeling.mp3" },
    { title: "7. I Can't Let Go", artist: "Kanye West, Flying Eagles", src: "i-cant-let-go.mp3" },
    { title: "8. Never Let Me Go", artist: "Kanye West, KIRBY", src: "never-let-me-go.mp3" },
    { title: "9. NinaChop", artist: "Kanye West, Young Thug, Swizz Beatz", src: "ninachop.mp3" },
    { title: "10. Tom Cruise", artist: "Kanye West", src: "tom-cruise.mp3" },
    { title: "11. When I See It", artist: "Kanye West", src: "when-i-see-it.mp3" },
    { title: "12. New Angels", artist: "Kanye West", src: "new-angels.mp3" },
    { title: "13. Mrs. Misery", artist: "Kanye West", src: "mrs-misery.mp3" },
    { title: "14. Crosses", artist: "Kanye West", src: "crosses.mp3" },
    { title: "15. God Level", artist: "Kanye West", src: "god-level.mp3" },
    { title: "16. Creep Theme", artist: "Kanye West", src: "creep-theme.mp3" },
    { title: "17. Piss On Your Grave", artist: "Kanye West", src: "piss-on-your-grave.mp3" },
    { title: "18. I Been Trill", artist: "Kanye West", src: "i-been-trill.mp3" },
    { title: "19. Hummer", artist: "Kanye West", src: "hummer.mp3" },
    { title: "20. You Ain't No Model", artist: "Kanye West", src: "you-aint-no-model.mp3" },
    { title: "21. Fall Into You", artist: "Kanye West", src: "fall-into-you.mp3" },
    { title: "22. After You", artist: "Kanye West", src: "after-you.mp3" },
    { title: "23. So Crazy", artist: "Kanye West", src: "so-crazy.mp3" }
  ],
  bonus:[
    { title: "Father Stretch My Hands", artist: "Kanye West", src: "fsmh.mp3" }
  ]},
  {
  id: "yandhi",
  title: "Yandhi",
  year: 2018,
  cover: "yandhi.gif",
  lockCover: "yandhi-cover.jpg",
  glow: ['rgba(255,105,180,.25)','rgba(255,20,147,.25)','rgba(255,0,0,.2)'],
  tracks: [
    { title: "1. Chakras", artist: "Kanye West, The-Dream", src: "chakras.mp3" },
    { title: "2. Calm (Interlude)", artist: "Kanye West, Ant Clemons, Ty Dolla $ign", src: "calm.mp3" },
    { title: "3. The Storm", artist: "Kanye West, Ty Dolla $ign, Kid Cudi, XXXTentacion", src: "the-storm.mp3" },
    { title: "4. Spread Your Wings", artist: "Kanye West, Ant Clemons", src: "spread-your-wings.mp3" },
    { title: "5. New Body", artist: "Kanye West, Nicki Minaj, Ty Dolla $ign", src: "new-body.mp3" },
    { title: "6. 80 Degrees", artist: "Kanye West, Ant Clemons", src: "80-degrees.mp3" },
    { title: "7. Alien (Interlude)", artist: "Kanye West, Ant Clemons", src: "alien-interlude.mp3" },
    { title: "8. Alien", artist: "Kanye West, Quavo, Young Thug, Kid Cudi, Ant Clemons", src: "alien.mp3" },
    { title: "9. Home", artist: "Kanye West, Ant Clemons", src: "home.mp3" },
    { title: "10. City In The Sky", artist: "Kanye West, Desiigner, Jeremih, Kid Cudi, The-Dream, Ty Dolla $ign, 070 Shake", src: "city-in-the-sky.mp3" },
    { title: "11. Brothers", artist: "Kanye West, Ant Clemons", src: "brothers.mp3" },
    { title: "12. Cash To Burn", artist: "Kanye West, Kenny G, Ant Clemons", src: "cash-to-burn.mp3" },
    { title: "13. We Got Love", artist: "Kanye West, Teyana Taylor", src: "we-got-love.mp3" },
    { title: "14. All Dreams Real", artist: "Kanye West, Ant Clemons", src: "all-dreams-real.mp3" },
    { title: "15. The Garden", artist: "Kanye West, Ant Clemons, Ty Dolla $ign, The-Dream, Teyana Taylor", src: "the-garden.mp3" },
    { title: "16. Last Name", artist: "Kanye West, Ant Clemons", src: "last-name.mp3" },
    { title: "17. Law Of Attraction", artist: "Kanye West, Ant Clemons", src: "law-of-attraction.mp3" },
    { title: "18. End Of It", artist: "Kanye West, Ant Clemons", src: "end-of-it.mp3" }
  ],
  bonus: [
    { title: "Bye Bye Baby", artist: "Kanye West", src: "bye-bye-baby.mp3" },
    { title: "On God", artist: "Kanye West", src: "on-god.mp3" },
  ]},
  {id:"sohelpmegod",title:"So Help Me God",year:2015,cover:"so-help-me-god.jpg",glow:['rgba(220,220,220,0.3)','rgba(245,222,179,0.3)','rgba(0,0,0,0.25)','rgba(64,64,64,0.25)'],tracks:[
    { title:"1. The World", artist:"Kanye West", src:"the-world-2.mp3" },
    { title:"2. All Day", artist:"Kanye West, Theophilus London, Allan Kingdom, Paul McCartney", src:"all-day.mp3" },
    { title:"3. Tom Cruise", artist:"Kanye West", src:"tom-cruise-2.mp3" },
    { title:"4. Midas Touch", artist:"Kanye West", src:"midas-touch.mp3" },
    { title:"5. Been Trill", artist:"Kanye West, Treated Crew", src:"been-trill.mp3" },
    { title:"6. FourFiveSeconds", artist:"Kanye West, Rihanna, Paul McCartney", src:"45seconds.mp3" },
    { title:"7. Piss On Your Grave", artist:"Travis Scott, Kanye West, Paul McCartney", src:"piss-on-your-grave.mp3" },
    { title:"8. Souls", artist:"Kanye West", src:"souls.mp3" },
    { title:"9. Ultimate Lie", artist:"Kanye West, Young Thug", src:"ultimate-lie.mp3" },
    { title:"10. CAN U BE", artist:"Kanye West", src:"can-u-be.mp3" },
    { title:"11. Woke Up", artist:"Kanye West", src:"woke-up.mp3" },
    { title:"12. Prayer", artist:"Kanye West", src:"prayer.mp3" },
    { title:"13. Southside Serenade", artist:"Kanye West", src:"southside-serenade.mp3" },
    { title:"14. Won’t Lie", artist:"Kanye West", src:"wont-lie.mp3" },
    { title:"15. Wolves", artist:"Kanye West, Vic Mensa, Sia", src:"wolves.mp3" },
    { title:"16. Sanctified", artist:"Kanye West, Rick Ross, Big Sean", src:"sanctified.mp3" },
    { title:"17. When I See It", artist:"Kanye West", src:"when-i-see-it.mp3" },
    { title:"18. Only One", artist:"Kanye West, Paul McCartney, Ty Dolla $ign", src:"only-one.mp3" },
    { title:"19. I Feel Like That", artist:"Kanye West, Ty Dolla $ign, Tony Williams", src:"i-feel-like-that.mp3" }
  ]},
  {
  id: "swish",
  title: "SWISH",
  year: 2016,
  cover: "swish.gif",
  lockCover: "swish-cover.jpg",
glow: ['rgba(255,120,0,0.3)','rgba(255,100,0,0.3)','rgba(255,80,0,0.25)'],
  tracks: [
    {title:"1. Nina Chop",artist:"Kanye West",src:"nina-chop.mp3"},
    {title:"2. Father Stretch My Hands Pt. 1",artist:"Kanye West",src:"father-stretch-my-hands-pt-1.mp3"},
    {title:"3. Pt. 2",artist:"Kanye West",src:"pt-2.mp3"},
    {title:"4. Over",artist:"Kanye West",src:"over.mp3"},
    {title:"5. Forever",artist:"Kanye West",src:"forever.mp3"},
    {title:"6. Enya",artist:"Kanye West",src:"enya.mp3"},
    {title:"7. Rich Nigga Drunk",artist:"Kanye West",src:"rich-nigga-drunk.mp3"},
    {title:"8. Deja Vu",artist:"Kanye West",src:"deja-vu.mp3"},
    {title:"9. Low Lights",artist:"Kanye West",src:"low-lights.mp3"},
    {title:"10. Highlights",artist:"Kanye West",src:"highlights.mp3"},
    {title:"11. High Life",artist:"Kanye West",src:"high-life.mp3"},
    {title:"12. Facts",artist:"Kanye West",src:"facts.mp3"},
    {title:"13. 30 Hours",artist:"Kanye West",src:"30-hours.mp3"},
    {title:"14. WE FUCK",artist:"Kanye West",src:"we-fuck.mp3"},
    {title:"15. No More Parties In LA",artist:"Kanye West",src:"nmpila.mp3"},
    {title:"16. Internet",artist:"Kanye West",src:"internet-2.mp3"},
    {title:"17. Fade",artist:"Kanye West",src:"fade.mp3"},
    {title:"18. Mitus Touch",artist:"Kanye West",src:"mitus-touch.mp3"},
    {title:"19. FML",artist:"Kanye West",src:"fml.mp3"},
    {title:"20. Real Friends",artist:"Kanye West",src:"real-friends.mp3"},
    {title:"21. Wolves",artist:"Kanye West",src:"wolves-2.mp3"},
  ],
  bonus: [
    { title: "Anxiety", artist: "Kanye West", src: "anxiety.mp3" },
    { title: "Pressure", artist: "Kanye West", src: "pressure.mp3" },
    { title: "Bad Night", artist: "Kanye West", src: "bad-night-2.mp3" },
    { title: "Code Red", artist: "Kanye West", src: "code-red.mp3" },
    { title: "The Mall", artist: "Kanye West", src: "the-mall.mp3" }
  ]
},
 {
  id: "wolves",
  title: "WOLVES",
  year: 2016,
  cover: "wolves.jpg",
  glow: ['rgba(0,255,0,.25)', 'rgba(50,205,50,.25)', 'rgba(0,128,0,.25)'],
  tracks: [
    { title: "1. Glow", artist: "Kanye West, Drake", src: "glow.mp3" },
    { title: "2. Blessings", artist: "Kanye West, Drake, Big Sean", src: "blessings.mp3" },
    { title: "3. Pop Style", artist: "Kanye West, Drake, Jay-Z", src: "pop-style.mp3" },
    { title: "4. FRIENDFLIP77", artist: "Kanye West, Drake", src: "friendflip77.mp3" },
    { title: "5. Tell Your Friends", artist: "Kanye West, Drake, The Weeknd, Nas", src: "tell-your-friends.mp3" }
  ]
},
 {
  id: "turbografx16",
  title: "TURBOGRAFX16",
  year: 2016,
  cover: "turbografx16.jpg",
glow: [
  'rgba(255,215,0,0.4)',
  'rgba(255,223,0,0.35)',
  'rgba(238,201,0,0.3)', 
  'rgba(255,239,128,0.25)', 
  'rgba(212,175,55,0.2)' 
],
  tracks: [
    { title: "1. ALL EYES ON YE", artist: "Kanye West", src: "all-eyes-on-ye.mp3" },
    { title: "2. INDIGO INTERLUDE", artist: "Kanye West", src: "indigo-interlude.mp3" },
    { title: "3. FACE DOWN", artist: "Kanye West", src: "face-down.mp3" },
    { title: "4. FEEL ME", artist: "Kanye West", src: "feel-me.mp3" },
    { title: "5. HOLD TIGHT", artist: "Kanye West", src: "hold-tight.mp3" },
    { title: "6. JEALOUS", artist: "Kanye West", src: "jealous.mp3" },
    { title: "7. MEDICATED", artist: "Kanye West", src: "medicated.mp3" },
    { title: "8. CHAMPIONS", artist: "Kanye West", src: "champions.mp3" },
    { title: "9. EURO", artist: "Kanye West", src: "euro.mp3" },
    { title: "10. NO REASON", artist: "Kanye West", src: "no-reason.mp3" },
    { title: "11. RAP TARANTINO", artist: "Kanye West", src: "rap-tarantino.mp3" },
    { title: "12. ABOVE THE INFLUENCE", artist: "Kanye West", src: "above-the-influence.mp3" },
    { title: "13. ONLY YE", artist: "Kanye West", src: "only-ye.mp3" },
    { title: "14. SUPER STARRED", artist: "Kanye West", src: "super-starred.mp3" },
    { title: "15. WELCOME TO UCLA", artist: "Kanye West", src: "welcome-to-ucla.mp3" },
    { title: "16. INTERNET", artist: "Kanye West", src: "internet.mp3" }
  ]
},
{
  id: "loveeveryone",
  title: "Love Everyone",
  year: 2018,
  cover: "jesushelpme.jpg",
glow: [
  'rgba(245, 245, 255, 0.4)',
  'rgba(180, 200, 255, 0.35)',
  'rgba(150, 170, 200, 0.3)', 
  'rgba(200, 200, 210, 0.25)', 
  'rgba(220, 230, 255, 0.2)'   
],
  tracks: [
  { title: "1. I Know I Know", artist: "Kanye West", src: "i-know-i-know.mp3" },
  { title: "2. Amistad", artist: "Kanye West", src: "amistad.mp3" }, 
  { title: "3. Fine Line", artist: "Kanye West, Bon Iver", src: "fine-line.mp3" }, 
  { title: "4. XCTY", artist: "Kanye West", src: "xcty.mp3" },
  { title: "5. Take Me To The Lights", artist: "Kanye West, Francis and The Lights, Chance The Rapper", src: "take-me-to-the-lights.mp3" }, 
  { title: "6. Brothers (Prologue)", artist: "Kanye West, Chris Stylez", src: "brothers-prologue.mp3" }, 
  { title: "7. Brothers", artist: "Kanye West, Charlie Wilson", src: "brothers-le.mp3" },  
  { title: "8. Lovey", artist: "Kanye West, Ant Clemons", src: "lovey.mp3" }, 
  { title: "9. Simulation Baptize", artist: "Kanye West, A$AP Rocky, Pardison Fontaine", src: "simulation-baptize.mp3" }, 
  { title: "10. Ye vs. The People", artist: "Kanye West, T.I", src: "ye-vs-the-people.mp3" }, 
  { title: "11. Lift Yourself", artist: "Kanye West", src: "lift-yourself.mp3" }
],
bonus: [
  { title: "Ghost Town", artist: "Kanye West", src: "ghost-town.mp3" },
  { title: "Brothers Forever", artist: "Kanye West", src: "brothers-forever.mp3" }
]},
{
  id: "war",
  title: "WAR",
  year: 2022,
  cover: "war.gif",
  lockCover: "war.jpg",
glow: [
  'rgba(0, 0, 0, 0.55)',
  'rgba(15, 15, 15, 0.45)',
  'rgba(30, 30, 30, 0.35)',
  'rgba(45, 45, 45, 0.28)',
  'rgba(70, 70, 70, 0.22)'
],
 tracks: [
  { title: "1. Never Coming Back", artist: "Kanye West, James Blake", src: "never-coming-back.mp3" },
  { title: "2. Wake Up", artist: "Kanye West, James Blake", src: "wake-up.mp3" },
  { title: "3. Quiet", artist: "Kanye West, James Blake", src: "quiet.mp3" },
  { title: "4. Bobby Digital", artist: "Kanye West, James Blake", src: "bobby-digital.mp3" },
  { title: "5. What I Would Had Said At Virgil's Funeral", artist: "Kanye West, James Blake", src: "what-i-would-had-said-at-virgils-funeral.mp3" },
  { title: "6. Let It In", artist: "Kanye West, James Blake", src: "let-it-in.mp3" },
  { title: "7. All Is Love", artist: "Kanye West, James Blake", src: "all-is-love.mp3" },
  { title: "8. My Way (Interlude)", artist: "Kanye West, James Blake", src: "my-way-interlude.mp3" },
  { title: "9. Came Back", artist: "Kanye West, James Blake", src: "came-back.mp3" },
  { title: "10. Showtime", artist: "Kanye West, James Blake", src: "showtime.mp3" }
],
bonus: [
  { title: "Things Change", artist: "Kanye West, James Blake", src: "things-change.mp3" },
  { title: "Through The High Wire", artist: "Kanye West, James Blake", src: "through-the-high-wire.mp3" }

]},
  {
    id: "yebu",
    title: "YEBU",
    year: 2023,
    cover: "yebu-cover.jpg",
    glow: ['rgba(255,255,255,.25)','rgba(200,200,200,.25)','rgba(150,150,150,.2)'],
    tracks: [
      { title: "1. So Soon", artist: "Kanye West", src: "so-soon.mp3" },
      { title: "2. Unlock", artist: "Kanye West", src: "unlock.mp3" },
      { title: "3. Ceremony Freestyle", artist: "Kanye West", src: "ceremony-freestyle.mp3" },
      { title: "4. Hoodrat", artist: "Kanye West", src: "hoodrat.mp3" },
      { title: "5. Street Lights", artist: "Kanye West, Freddie Gibbs", src: "street-lights.mp3" },
      { title: "6. Someday We’ll All Be Free", artist: "Kanye West", src: "someday-well-all-be-free.mp3" },
      { title: "7. Love Love Love", artist: "Kanye West", src: "love-love-love.mp3" },
      { title: "8. All In Love", artist: "Kanye West", src: "all-in-love.mp3" },
      { title: "9. Bobby Digital", artist: "Kanye West, James Blake", src: "bobby-digital.mp3" },
      { title: "10. Matthew", artist: "Kanye West", src: "matthew.mp3" },
      { title: "11. Big Boody (River)", artist: "Kanye West, Young Thug", src: "river.mp3" }
    ],
bonus: [
    { title: "Lucifer", artist: "Kanye West", src: "lucifer.mp3" }
]},

  {
    id: "vultures-2",
    title: "VULTURES 2 (DIGITAL DELUXE)",
    year: 2024,
    cover: "vultures-2.jpg",
    glow: ['rgba(49, 72, 108, 0.25)','rgba(144, 141, 102, 0.25)','rgba(40, 39, 47, 0.2)'],
    tracks: [
      { title: "1. BELIEVER", artist: "¥$, Kanye West, Ty Dolla $ign", src: "believer.mp3" },
      { title: "2. CAN U BE", artist: "¥$, Kanye West, Ty Dolla $ign", src: "can-u-be-v2.mp3" },
      { title: "3. DRUNK", artist: "¥$, Kanye West, Ty Dolla $ign", src: "drunk.mp3" },
      { title: "4. GUN TO MY HEAD", artist: "¥$, Kanye West, Ty Dolla $ign", src: "gun-to-my-head.mp3" },
      { title: "5. TAKE OFF YOUR DRESS", artist: "¥$, Kanye West, Ty Dolla $ign", src: "take-off-your-dress.mp3" },
    ],
bonus: [
    { title: "RIVER (AUGUST 3RD VERSION)", artist: "¥$, Kanye West, Ty Dolla $ign", src: "river-v2.mp3" }
]},

{
  id: "bully",
  title: "BULLY",
  year: 2026,
  cover: "bully.jpg",
  glow: [
    "rgba(101, 101, 101, 0.25)",
    "rgba(72, 72, 72, 0.25)",
    "rgba(22, 22, 22, 0.2)"
  ],
  tracks: [
    { title: "1. PREACHER MAN", artist: "Ye, Kanye West", src: "preacher-man.mp3" },
    { title: "2. BEAUTY AND THE BEAST", artist: "Ye, Kanye West", src: "beauty-and-the-beast.mp3" },
    { title: "3. DAMN", artist: "Ye, Kanye West", src: "damn.mp3" },
    { title: "4. LAST BREATH", artist: "Ye, Kanye West", src: "last-breath.mp3" },
    { title: "5. LOSING YOUR MIND", artist: "Ye, Kanye West", src: "losing-your-mind.mp3" },
    { title: "6. HIGHS AND LOWS", artist: "Ye, Kanye West", src: "highs-and-lows.mp3" },
    { title: "7. WHITE LINES", artist: "Ye, Kanye West", src: "white-lines.mp3" },
    { title: "8. BULLY", artist: "Ye, Kanye West", src: "bully.mp3" },
    { title: "9. CIRCLES", artist: "Ye, Kanye West", src: "circles.mp3" },
    { title: "10. PEOPLE LIKE ME", artist: "Ye, Kanye West", src: "people-like-me.mp3" },
    { title: "11. CAN'T HURRY LOVE", artist: "Ye, Kanye West", src: "cant-hurry-love.mp3" },
    { title: "12. THIS ONE HERE", artist: "Ye, Kanye West", src: "this-one-here.mp3" }
  ],
  bonus: [
    { title: "MISSION CONTROL", artist: "Ye, Kanye West", src: "mission-control.mp3" }
  ]
},


  {
    id: "gods-country",
    title: "God's Country",
    year: 2020,
    cover: "gods-country.jpg",
    glow: [
  'rgba(34,139,34,0.3)',  
  'rgba(107,142,35,0.3)',  
  'rgba(60,179,113,0.25)', 
  'rgba(70,130,180,0.25)', 
  'rgba(30,144,255,0.2)'   
  ],
    tracks: [
  { title: "1. Eternal Life", artist: "Kanye West", src: "eternal-life.mp3" },
  { title: "2. 12,000 Acres", artist: "Kanye West", src: "12000-acres.mp3" },
  { title: "3. Future Bounce", artist: "Kanye West, Travis Scott", src: "future-bounce.mp3" },
  { title: "4. Lord I Need You", artist: "Kanye West", src: "lord-i-need-you.mp3" },
  { title: "5. God's Country", artist: "Kanye West, Travis Scott", src: "gods-country.mp3" },
  { title: "6. Tulsa", artist: "Kanye West", src: "tulsa.mp3" },
  { title: "7. Fighting Fires", artist: "Kanye West", src: "fighting-fires.mp3" },
  { title: "8. Praise God", artist: "Kanye West, KayCyy, Travis Scott", src: "praise-god.mp3" },
  { title: "9. Keep My Sprit Alive", artist: "Kanye West, KayCyy, Westside Gunn, Conway The Machine", src: "keep-my-spirit-alive.mp3" },
  { title: "10. Wash Us In The Blood", artist: "Kanye West, Travis Scott", src: "wash-us-in-the-blood.mp3" }
     ],
  bonus: [
    { title: "Off The Grid", artist: "Kanye West", src: "off-the-grid.mp3" },
    { title: "Hear Our Prayers", artist: "Kanye West", src: "hear-our-prayers.mp3" }
  ]},
  
  {
  id: "jesusisking2",
  title: "JESUS IS KING: The Dr. Dre Version",
  year: 2020,
  cover: "jikdre.jpg",
  glow: [
    'rgba(173,216,230,0.25)',
    'rgba(0,0,139,0.25)',     
    'rgba(70,130,180,0.2)'     
  ],
  tracks: [
    { title: "1. Intro / Every Hour / Selah", artist: "Kanye West, Martha Marhsa Ambrosius, Sunday Service Choir", src: "intro-every-hour-selah.mp3" },
    { title: "2. LA Monster", artist: "Kanye West, A$AP Ferg", src: "la-monster.mp3" },
    { title: "3. Water (Remix)", artist: "Kanye West, Victory, Ant Clemons", src: "water-remix.mp3" },
    { title: "4. Closed On Sunday (Remix)", artist: "Kanye West, Anderson .Paak", src: "closed-on-sunday-remix.mp3" },
    { title: "5. On God (Remix)", artist: "Kanye West, THURZ", src: "on-god-remix.mp3" },
    { title: "6. Hands On (Remix)", artist: "Kanye West, Travis Scott, Fred Hammond", src: "hands-on-remix.mp3" },
    { title: "7. Everything We Need (Remix)", artist: "Kanye West, Ty Dolla $ign, Ant Clemons, Martha Ambrosius", src: "everything-we-need-remix.mp3" },
    { title: "8. Ashes", artist: "Kanye West, Sunday Service Choir, Nikki Grier", src: "ashes.mp3" },
    { title: "9. God Is (Remix)", artist: "Kanye West, Sunday Service Choir", src: "god-is-remix.mp3" },
    { title: "10. Use This Gospel (Remix)", artist: "Kanye West, Eminem, Clipse, Kenny G", src: "use-this-gospel-remix.mp3" },
    { title: "11. Follow God", artist: "Kanye West, Dr. Dre", src: "follow-god.mp3" }
  ],
bonus: [
    { title: "Glory", artist: "Kanye West, Dr. Dre", src: "glory.mp3" }
]},
 {
  id: "graduation-deluxe",
  title: "Graduation (Deluxe)",
  year: 2007,
  cover: "graduation.jpg",
  glow: [
  'rgba(255,120,255,0.55)', 
  'rgba(210,80,255,0.5)',  
  'rgba(255,100,200,0.45)',
  'rgba(180,60,255,0.45)',
],
  tracks: [
  { title: "1. Good Morning", artist: "Kanye West", src: "good-morning.mp3" },
  { title: "2. Champion", artist: "Kanye West", src: "champion.mp3" },
  { title: "3. Stronger", artist: "Kanye West", src: "stronger.mp3" },
  { title: "4. I Wonder", artist: "Kanye West", src: "i-wonder.mp3" },
  { title: "5. Good Life", artist: "Kanye West", src: "good-life.mp3" },
  { title: "6. Can't Tell Me Nothing", artist: "Kanye West", src: "cant-tell-me-nothing.mp3" },
  { title: "7. Barry Bonds", artist: "Kanye West", src: "barry-bonds.mp3" },
  { title: "8. Drunk and Hot Girls", artist: "Kanye West", src: "drunk-and-hot-girls.mp3" },
  { title: "9. Flashing Lights", artist: "Kanye West", src: "flashing-lights.mp3" },
  { title: "10. Everything I Am", artist: "Kanye West", src: "everything-i-am.mp3" },
  { title: "11. The Glory", artist: "Kanye West", src: "the-glory.mp3" },
  { title: "12. Homecoming", artist: "Kanye West", src: "homecoming.mp3" },
  { title: "13. Big Brother", artist: "Kanye West", src: "big-brother.mp3" },
  { title: "14. Good Night", artist: "Kanye West", src: "good-night.mp3" }
],

bonus: [
    { title: "Bittersweet Poetry", artist: "Kanye West, John Mayer", src: "bittersweet-poetry.mp3" },
    { title: "Passenger", artist: "Kanye West", src: "passenger.mp3" },
    { title: "Building", artist: "Kanye West, Jay-Z", src: "building.mp3" },
    { title: "Goodbye", artist: "Kanye West, Mos Def, Al Be Back", src: "goodbye.mp3" }
]},

{
  id: "record4hype",
  title: "record4hype.zip",
  year: 2010,
  cover: "record4hype.jpg",
  glow: [
    "rgba(255, 90, 90, 0.6)",
    "rgba(232, 122, 105, 0.55)",
    "rgba(253, 10, 10, 0.5)",
    "rgba(137, 51, 41, 0.45)",
  ],
  tracks: [
    { title: "1. Hell Of A Life", artist: "Kanye West", src: "hell-of-a-life-hw.mp3" },
    { title: "2. Dark Fantasy", artist: "Kanye West", src: "dark-fantasy-hw.mp3" },
    { title: "3. POWER", artist: "Kanye West", src: "power-hw.mp3" },
    { title: "4. Chain Heavy", artist: "Kanye West", src: "chain-heavy-hw.mp3" },
    { title: "5. Ghetto University", artist: "Kanye West", src: "ghetto-university-hw.mp3" },
    { title: "6. That's My Bitch", artist: "Kanye West", src: "thats-my-bitch-hw.mp3" },
    { title: "7. Runaway", artist: "Kanye West", src: "runaway-hw.mp3" },
    { title: "8. Lost In The World", artist: "Kanye West", src: "lost-in-the-world-hw.mp3" },
    { title: "9. Gorgeous", artist: "Kanye West", src: "gorgeous-hw.mp3" },
    { title: "10. Monster", artist: "Kanye West", src: "monster-hw.mp3" },
    { title: "11. Holding Me Back", artist: "Kanye West", src: "holding-me-back-hw.mp3" },
    { title: "12. Devil In A New Dress", artist: "Kanye West", src: "devil-in-a-new-dress-hw.mp3" },
    { title: "13. The Joy", artist: "Kanye West", src: "the-joy-hw.mp3" },
    { title: "14. So Appalled", artist: "Kanye West", src: "so-appalled-hw.mp3" },
    { title: "15. Blame Game", artist: "Kanye West", src: "blame-game-hw.mp3" },
  ],
  bonus: [
    { title: "Sweat On My Face", artist: "Kanye West", src: "sweat-on-my-face-hw.mp3" },
    { title: "See Me Now", artist: "Kanye West", src: "see-me-now.mp3" }
]},

{
  id: "kanyessoulmixshow",
  title: "Kanye's Soul Mix Show",
  year: 2006,
  cover: "kanyessoulmixshow.jpg",
  glow: [
    "rgba(255,200,90,0.6)",
    "rgba(200,140,60,0.55)",
    "rgba(170,110,40,0.5)",
    "rgba(120,80,30,0.45)",
  ],
  tracks: [
    { title: "1. Intro", artist: "Kanye West", src: "intro-show.mp3" },
    { title: "2. Wish You Were Here", artist: "Kanye West", src: "wish-you-were-here.mp3" },
    { title: "3. Innocent 'Til Proven Guilty", artist: "Kanye West", src: "innocent-til-proven-guilty.mp3" },
    { title: "4. Chicago", artist: "Kanye West", src: "chicago.mp3" },
    { title: "5. Heart of the City", artist: "Kanye West", src: "heart-of-the-city.mp3" },
    { title: "6. Common Man", artist: "Kanye West", src: "common-man.mp3" },
    { title: "7. Strung Out", artist: "Kanye West", src: "strung-out.mp3" },
    { title: "8. Wildflower", artist: "Kanye West", src: "wildflower.mp3" },
    { title: "9. Ghetto Child", artist: "Kanye West", src: "ghetto-child.mp3" },
    { title: "10. Peace and Love", artist: "Kanye West", src: "peace-and-love.mp3" },
    { title: "11. Heavenly Dream", artist: "Kanye West", src: "heavenly-dream.mp3" },
    { title: "12. I'll Erase Away Your Pain", artist: "Kanye West", src: "ill-erase-away-your-pain.mp3" },
    { title: "13. A House Is Not a Home", artist: "Kanye West", src: "a-house-is-not-a-home.mp3" },
    { title: "14. Through the Fire", artist: "Kanye West", src: "through-the-fire.mp3" },
    { title: "15. Rosie", artist: "Kanye West", src: "rosie.mp3" },
    { title: "16. My Funny Valentine", artist: "Kanye West", src: "my-funny-valentine.mp3" },
    { title: "17. Home Is Where the Hatred Is", artist: "Kanye West", src: "home-is-where-the-hatred-is.mp3" },
    { title: "18. Old Smokey", artist: "Kanye West", src: "old-smokey.mp3" },
    { title: "19. Since You Came in My Life", artist: "Kanye West", src: "since-you-came-in-my-life.mp3" },
    { title: "20. Move On Up", artist: "Kanye West", src: "move-on-up.mp3" },
    { title: "21. It's Impossible", artist: "Kanye West", src: "its-impossible.mp3" },
    { title: "22. Distant Lover", artist: "Kanye West", src: "distant-lover.mp3" },
    { title: "23. Cause I Love You", artist: "Kanye West", src: "cause-i-love-you.mp3" }
  ],
},

{
  id: "lateorchestration",
  title: "Late Orchestration",
  year: 2006,
  cover: "lateorchestration.jpg",
  glow: [  
    "rgba(160,120,40,0.55)", 
    "rgba(120,80,40,0.5)",     
    "rgba(100,60,30,0.45)",   
    "rgba(70,40,20,0.45)",  
  ],
  tracks: [
    { title: "1. Diamonds From Sierra Leone", artist: "Kanye West", src: "dfsl.mp3" },
    { title: "2. Touch the Sky", artist: "Kanye West", src: "touch-the-sky.mp3" },
    { title: "3. Crack Music", artist: "Kanye West", src: "crack-music.mp3" },
    { title: "4. Drive Slow", artist: "Kanye West", src: "drive-slow.mp3" },
    { title: "5. Through the Wire", artist: "Kanye West", src: "through-the-wire.mp3" },
    { title: "6. The New Workout Plan", artist: "Kanye West", src: "the-new-workout-plan.mp3" },
    { title: "7. Heard 'Em Say", artist: "Kanye West", src: "heard-em-say.mp3" },
    { title: "8. All Falls Down", artist: "Kanye West", src: "all-falls-down.mp3" },
    { title: "9. Bring Me Down", artist: "Kanye West", src: "bring-me-down.mp3" },
    { title: "10. Gone", artist: "Kanye West", src: "gone.mp3" },
    { title: "11. Late", artist: "Kanye West", src: "late.mp3" },
    { title: "12. Jesus Walks", artist: "Kanye West", src: "jesus-walks.mp3" }
  ],
bonus: [
    { title: "Gold Digger (AOL Sessions)", artist: "Kanye West", src: "gold-digger-aol.mp3" }
]},
];

const albumsContainer = document.getElementById("albumsContainer"),
  player = document.getElementById("player"),
  playerCover = document.getElementById("playerCover"),
  tracklistMini = document.getElementById("tracklistMini"),
  audio = document.getElementById("audio"),
  playBtn = document.getElementById("play"),
  playIcon = document.getElementById("playIcon"),
  nextBtn = document.getElementById("next"),
  prevBtn = document.getElementById("prev"),
  progress = document.getElementById("progress"),
  progressDot = document.getElementById("progressDot"),
  progressBar = document.getElementById("progressBar"),
  volumeSlider = document.getElementById("volumeSlider"),
  currentTimeEl = document.getElementById("currentTime"),
  durationEl = document.getElementById("duration"),
  shuffleBtn = document.getElementById("shuffle");


albumsData.forEach(a => {
  const d = document.createElement("div");
  d.className = "album";
  d.innerHTML = `<img src="${a.cover}"><p>${a.title}</p><span>${a.year}</span>`;
  d.onclick = () => openAlbum(a);
  albumsContainer.appendChild(d);
});

function openAlbum(album) {
  currentAlbum = album;
  currentTracks = album.tracks;
  currentIndex = 0;
  showingBonus = false;
  playerCover.src = album.lockCover || album.cover;
  buildTracklist();
  loadTrack(0);
  player.classList.add("active");
  player.style.background = `linear-gradient(270deg,${album.glow.join(",")})`;
  updatePlayerCover(album);
}

function loadTrack(i) { audio.src = currentTracks[i].src; highlightTrack(); if ("mediaSession" in navigator) { let cleanTitle = currentTracks[i].title.replace(/^\d+\.\s*/, ""); navigator.mediaSession.metadata = new MediaMetadata({ title: cleanTitle, artist: currentTracks[i].artist, artwork: [{ src: playerCover.src, sizes: "300x300", type: "image/jpeg" }], }); navigator.mediaSession.setActionHandler("play", playTrack); navigator.mediaSession.setActionHandler("pause", pauseTrack); navigator.mediaSession.setActionHandler("previoustrack", prevTrack); navigator.mediaSession.setActionHandler("nexttrack", nextTrack); } }

function playTrack() {
  audio.play();
  playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; 
}

function pauseTrack() {
  audio.pause();
  playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>'; 
}


let scrollTimeout = null;

function buildTracklist() {
  tracklistMini.innerHTML = "";

  currentTracks.forEach((t, i) => {
    const d = document.createElement("div");
    d.textContent = t.title;
    d.className = i === currentIndex ? "active" : "";

    d.onclick = () => {
      currentIndex = i;
      loadTrack(i);
      playTrack();
    };

    tracklistMini.appendChild(d);
  });

  highlightTrack();
}

function highlightTrack() {
  [...tracklistMini.children].forEach((d, i) => {
    if (i === currentIndex) {
      d.classList.add("active");
      d.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });

      d.style.transform = "scale(1.04) translateY(-2px)";
      setTimeout(() => (d.style.transform = "scale(1)"), 400);
    } else {
      d.classList.remove("active");
    }
  });
}

tracklistMini.addEventListener(
  "wheel",
  (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      tracklistMini.scrollLeft += e.deltaY;
    }


    tracklistMini.classList.add("scrolling");


    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      tracklistMini.classList.remove("scrolling");
    }, 120);
  },
  { passive: false }
);

function nextTrack() {
  if (!currentTracks.length) return;

  if (isShuffle) {
    if (!shuffleQueue || shuffleQueue.length === 0) {
      shuffleQueue = currentTracks.map((_, i) => i);
      for (let i = shuffleQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleQueue[i], shuffleQueue[j]] = [shuffleQueue[j], shuffleQueue[i]];
      }
    }

    currentIndex = shuffleQueue.shift();
  } else {
    currentIndex = (currentIndex + 1) % currentTracks.length;
  }

  loadTrack(currentIndex);
  playTrack();
}

function prevTrack() {
  if (!currentTracks.length) return;

  if (isShuffle && shuffleHistory.length > 0) {
    currentIndex = shuffleHistory.pop();
  } else {
    currentIndex = (currentIndex - 1 + currentTracks.length) % currentTracks.length;
  }

  loadTrack(currentIndex);
  playTrack();
}


playBtn.onclick = () => (audio.paused ? playTrack() : pauseTrack());
nextBtn.onclick = nextTrack;
prevBtn.onclick = prevTrack;


shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  shuffleHistory = [];
  shuffleBtn.style.filter = isShuffle
    ? "invert(50%) sepia(1) hue-rotate(90deg)"
    : "none";
};

audio.ontimeupdate = () => {
  if (!isNaN(audio.duration)) {
    const p = (audio.currentTime / audio.duration) * 100;
    progress.style.width = p + "%";
    progressDot.style.left = p + "%";
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
};

progressBar.onclick = (e) => {
  const rect = progressBar.getBoundingClientRect();
  const p = (e.clientX - rect.left) / rect.width;
  audio.currentTime = p * audio.duration;
};

audio.onended = nextTrack;

let audioContext, sourceNode, gainNode;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function initAudio() {
  if (isIOS) return;
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    sourceNode = audioContext.createMediaElementSource(audio);
    gainNode = audioContext.createGain();
    sourceNode.connect(gainNode).connect(audioContext.destination);
  }
}


document.body.addEventListener("click", initAudio, { once: true });

volumeSlider.addEventListener("input", () => {
  if (gainNode) gainNode.gain.value = volumeSlider.value;
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
  currentTimeEl.textContent = "0:00";
});

document.getElementById("bonusButton").addEventListener("click", () => {
  if (!currentAlbum || !currentAlbum.bonus) return;
  showingBonus = !showingBonus;
  currentTracks = showingBonus ? currentAlbum.bonus : currentAlbum.tracks;
  currentIndex = 0;
  buildTracklist();
  loadTrack(0);
});

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getAlbumCover(album) {
  return album.lockCover || album.cover || "default-cover.png";
}

function updatePlayerCover(album) {
  if (!album) return;
  playerCover.src = getAlbumCover(album);
  if (playerCover.src.endsWith(".gif")) {
    playerCover.style.animation = "none";
    void playerCover.offsetWidth;
    playerCover.style.animation = "";
  }
}

const menuButton = document.getElementById("menuButton");
const menuContainer = document.getElementById("menuContainer");
const linkButton = document.getElementById("linkButton");

let isOpen = false;

menuButton.addEventListener("click", () => {
  isOpen = !isOpen;
  if(isOpen) {
    menuContainer.style.display = "flex";
    requestAnimationFrame(() => menuContainer.classList.add("show"));
  } else {
    menuContainer.classList.remove("show");
    setTimeout(() => {
      if(!isOpen) menuContainer.style.display = "none";
    }, 400);
  }
});
