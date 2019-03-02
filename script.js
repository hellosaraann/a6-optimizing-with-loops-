var churchillSpeech = {
      'author'    : 'Churchill',
      'year'      : 1940,
      'yearIsBCE' : false,
      'authorAge' : '66'
    },
    ghandiSpeech = {
      'author'    : 'Ghandi',
      'year'      : 1942,
      'yearIsBCE' : false,
      'authorAge' : '73'
    },
    demosthenesSpeech = {
      'author'    : 'Demosthenes',
      'year'      : 342,
      'yearIsBCE' : true,
      'authorAge' : '42'
    },

    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],

    userNamePrompt,

    favoriteSpeechPrompt,

    oldestSpeechYear = speechesArray[0].year,

    newestSpeechYear = speechesArray[0].year,

    i = 0;

for( i = 0 ; i < speechesArray.length ; i++ ){
  if( speechesArray[i].year < oldestSpeechYear ){
    var oldestSpeechYear = speechesArray[i].year;
  }
}

for( i = 0 ; i < speechesArray.length ; i++ ){
  if( speechesArray[i].year > newestSpeechYear ){
    var newestSpeechYear = speechesArray[i].year;
  }
}

while( i < speechesArray.length ) {
  console.log( "This speech is written by " + speechesArray[i].author + ".");
  i++ ;
};


document.getElementById('BtnDonate').addEventListener('click', function(){
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for( i = 0 ; i < speechesArray.length ; i++ ){
    if( favoriteSpeechPrompt == speechesArray[i].author ){
      console.log( speechesArray[i].author + " was " + speechesArray[i].authorAge + " during this speech.")
    };
  };

});


document.getElementById('BtnChurchill').addEventListener('click', function(){

  for( i = 0 ; i < speechesArray.length ; i++ ){
    if( speechesArray[0].year == oldestSpeechYear ){
      console.log( "This is the oldest speech on the page." );
    } else if( speechesArray[0].year == newestSpeechYear ){
      console.log( "This is the most recent speech on the page." );
    };
  };

});


document.getElementById('BtnGhandi').addEventListener('click', function(){

  for( i = 0 ; i < speechesArray.length ; i++ ){
    if( speechesArray[1].year == oldestSpeechYear ){
      console.log( "This is the oldest speech on the page." );
    } else if( speechesArray[1].year == newestSpeechYear ){
      console.log( "This is the most recent speech on the page." );
    };
  };

});


document.getElementById('BtnDemosthenes').addEventListener('click', function(){

  for( i = 0 ; i < speechesArray.length ; i++ ){
    if( speechesArray[2].year == oldestSpeechYear ){
      console.log( "This is the oldest speech on the page." );
    } else if( speechesArray[2].year == newestSpeechYear ){
      console.log( "This is the most recent speech on the page." );
    };
  };

});
