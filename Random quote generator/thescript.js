var quotes = [
  [ '"It\'s only elementary, Watson"',
    "http://img1.rnkr-static.com/node_img/101/2018018/C250/sherlock-holmes-film-characters-photo-1.jpg",
    "- Sherlock Holmes"],
  [ '"Do or do not, there is no try"',
    "http://img2.rnkr-static.com/node_img/122/2428303/C250/yoda-film-characters-photo-1.jpg",
    "- Yoda"],
  [ '"Differences of language and habit are nothing at all if our aims are identical and our hearts are open"',
    "http://img1.rnkr-static.com/node_img/22/423126/C250/albus-dumbledore-film-characters-photo-1.jpg",
    "- Albus Dumbledor"],
  ['"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
    "http://img3.wikia.nocookie.net/__cb20121126211838/lotr/images/a/a5/Lotr_gandalf.jpg",
    "- Gandalf"],
  ['"It is important to draw wisdom from different places. If you take it from only one place, it becomes rigid and stale"',
    "https://s3-media3.fl.yelpcdn.com/photo/Tyc1VlnERbPBKk_Ug5VoUw/ls.jpg",
    "- Iroh"],
  ['"There is no monster more dangerous than the lack of compassion"',
    "https://lh4.googleusercontent.com/-umt-lJsGt2w/AAAAAAAAAAI/AAAAAAAAACo/oFe4RGYSAFc/photo.jpg",
    "- Master Splinter",
  ],
  ['"No matter what anybody tells you, words and ideas can change the world"',
    "https://pbs.twimg.com/profile_images/771123448303190020/bN0oBoFq.jpg",
    "- John Keating" ],
  ['"I\'m only brave when I have to be. Being brave doesn\'t mean go looking for trouble"',
    "http://img2.rnkr-static.com/node_img/82/1627426/C250/mufasa-photo-1.jpg",
    "- Mufasa"],
  ['"Oh yes, the past can hurt. But you can either run from it or learn from it"',
    "https://makeameme.org/media/templates/250/rafiki_meditating_lion_king.jpg",
    "- Rafiki"],
  ['"Anything is possible when you have inner peace"',
    "http://www.dopeteesapparel.com/products/3/square/18580248.png",
    "- Master Shifu"],
  ['"Fortune and glory, kid. Fortune and glory"',
  "http://cdn.movieweb.com/img.news.tops/NEbKm6LmyW7uei_2_b.jpg",
  "- Indiana Jones"],
  ['"A ninja makes his own luck"',
  "http://de.narutopedia.eu/images/thumb/1/1a/Might_Guy.jpg/250px-Might_Guy.jpg",
  "- Guy Sensei"],
  ['"Live long and prosper"',
  "http://render.fineartamerica.com/images/rendered/search/shower-curtain/images/artworkimages/medium/1/spock-tim-scoggins.jpg?&targetx=-19&targety=0&imagewidth=826&imageheight=818&modelwidth=787&modelheight=819&backgroundcolor=342630&orientation=0",
  "- Spock"],
  ['"A mind needs books as a sword needs a whetstone to keep its edge"',
  "http://img1.rnkr-static.com/user_node_img/115/2292897/C250/tyrion-lannister-tv-characters-photo-u10.jpg",
  "- Tyrion Lannister"],
  ['"Deeds will not be less valiant because they are unpraised"',
  "http://media.topito.com/wp-content/uploads/2014/11/Aragorn-250x250.jpg",
  "- Aragorn"]
  ['"You can always trust a dishonest man to be dishonest; it\'s the honest ones you need to look out for."',
  "https://markjuneoro.files.wordpress.com/2012/01/jack-sparrow-costume.jpg?w=545",
  "- Jack Sparrow"],
  ['"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals."',
    "http://static.tumblr.com/432d7eb0d57b401ffb1ac934e166a97b/vccyn7m/Mbynklxy2/tumblr_static_3ygeh6r81oe84c0w8cokggcgg.png",
    "- Sirius Black"],
  ['"Sucking at something is the first step to being kinda good at something."',
  "http://24.media.tumblr.com/tumblr_m2pkmapVnb1r8qyoxo1_250.jpg",
  "- Jake the dog"],
  ['"People like being lied to. They don\'t like finding out they\'ve been lied to."',
    "https://lh5.googleusercontent.com/-C_ePTAXWcIk/AAAAAAAAAAI/AAAAAAAAADY/QVUwbvybUjY/photo.jpg",
    "- Dr. Gregory House"],
  ['"If you\'re good at something, never do it for free."',
    "http://img1.rnkr-static.com/node_img/125/2498261/C250/joker-comic-book-characters-photo-1.jpg",
    "- The Joker"],
  ['"No matter how good you are at something, there\'s always about a million people better than you."',
    "https://pbs.twimg.com/profile_images/3003650200/49de0f8bc5b3ed32f27d657c5adf80f1.jpeg",
    "- Homer Simpson"]
];



function newQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("displayQuote").innerHTML = quotes[randomNumber][0];
  document.getElementById("imageToReplace").src = quotes[randomNumber][1];
  document.getElementById("displayAuthor").innerHTML = quotes[randomNumber][2];
  document.getElementById("twitterShare").href = "https://twitter.com/share" + "?text=" + quotes[randomNumber][0] + "  " + quotes[randomNumber][2] + "&hashtags=quotes";

}
