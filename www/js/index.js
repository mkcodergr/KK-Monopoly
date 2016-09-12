var app = {
    kisten: [
      "bbb.jpg",
      "benz.jpg",
      "bruhe.jpg",
      "corinna.jpg",
      "dinis.jpg",
      "fahrt.jpg",
      "geburtstag.jpg",
      "grundlos.jpg",
      "kehr.jpg",
      "klofrau.jpg",
      "knarre.jpg",
      "lef.jpg",
      "loch.jpg",
      "milf.jpg",
      "mische.jpg",
      "moewen.jpg",
      "nachnach.jpg",
      "polen.jpg",
      "ruhrei.jpg",
      "schlechtwetter.jpg",
      "schuhe.jpg",
      "shots.jpg",
      "sicha.jpg",
      "silvester.jpg",
      "streichholz.jpg"
    ],

    themen: [
      "abi.jpg",
      "afrika.jpg",
      "aquaknarre.jpg",
      "aurich.jpg",
      "bier.jpg",
      "bloecke.jpg",
      "elemente.jpg",
      "europa.jpg",
      "feiertage.jpg",
      "festivals.jpg",
      "gameboy.jpg",
      "narben.jpg",
      "nfsu2.jpg",
      "oscar.jpg",
      "pro.jpg",
      "revolverheld.jpg",
      "waffen.jpg",
      "zahlen.jpg",
    ],

    initialize: function() {
      this.bindEvents();
    },

    bindEvents: function() {
      document.getElementById('card1')
        .addEventListener('click', this.clickThemen);
      document.getElementById('card2')
        .addEventListener('click', this.clickKiste);
    },

    clickThemen: function(evt) {
      var rnd = Math.floor(Math.random() * app.themen.length);
      if (this.src.indexOf('rs_themen.jpg') != -1) {
        this.src = 'img/Themenrunden/' + app.themen[rnd];
      } else {
        this.src = 'img/rs_themen.jpg';
      }
    },

    clickKiste: function(evt) {
      var rnd = Math.floor(Math.random() * app.kisten.length);
      if (this.src.indexOf('rs_gemein.jpg') != -1) {
        this.src = 'img/Krabbenkisten/' + app.kisten[rnd];
      } else {
        this.src = 'img/rs_gemein.jpg';
      }
    },
};

app.initialize();
