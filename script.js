// Mythium Archive: https://archive.org/details/mythium/

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://static.pcpcnetwork.org/files/weddings/preparing-for-your-wedding/',
            extension = '',
            tracks = [{
    "track": 1,
    "name": "Trumpet Voluntary",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Clarke",
    "file": "01_trumpet_voluntary",
    "extension": "mp3",
    "duration": "01:13"
  },
  {
    "track": 2,
    "name": "Trumpet Tune in D",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Purcell",
    "file": "02_trumpet_tune_in_d",
    "extension": "mp3",
    "duration": "00:58"
  },
  {
    "track": 3,
    "name": "Prelude from Te Deum",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Charpentier",
    "file": "03_prelude_from_te_deum",
    "extension": "mp3",
    "duration": "01:08"
  },
  {
    "track": 4,
    "name": "Bridal Chorus from Lohengrin",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Wagner",
    "file": "04_bridal_chorus_from_lohengrin",
    "extension": "mp3",
    "duration": "01:43"
  },
  {
    "track": 5,
    "name": "Overture to Fireworks Music",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Handel",
    "file": "05_overture_to_fireworks_music",
    "extension": "mp3",
    "duration": "01:35"
  },
  {
    "track": 6,
    "name": "Riguadon",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Campra",
    "file": "06_riguadon",
    "extension": "mp3",
    "duration": "01:18"
  },
  {
    "track": 7,
    "name": "The Old Hundredth Psalm Tune",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Vaughan Williams",
    "file": "07_the_old_hundredth_psalm_tune",
    "extension": "mp3",
    "duration": "01:42"
  },
  {
    "track": 8,
    "name": "Trumpet Tune in D",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Bridal Processionals",
    "genre": "Classical",
    "composer": "Johnson",
    "file": "08_trumpet_tune_in_d",
    "extension": "mp3",
    "duration": "01:20"
  },
  {
    "track": 9,
    "name": "Canon in D",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Pachelbel",
    "file": "09_canon_in_d",
    "extension": "mp3",
    "duration": "01:56"
  },
  {
    "track": 10,
    "name": "Jesu, Joy of Man's Desiring",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Bach",
    "file": "10_jesu_joy_of_mans_desiring",
    "extension": "mp3",
    "duration": "01:18"
  },
  {
    "track": 11,
    "name": "Sheep May Safely Graze",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Bach",
    "file": "11_sheep_may_safely_graze",
    "extension": "mp3",
    "duration": "01:37"
  },
  {
    "track": 12,
    "name": "O God Beyond All Praising",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Holst",
    "file": "12_o_god_beyond_all_praising",
    "extension": "mp3",
    "duration": "01:40"
  },
  {
    "track": 13,
    "name": "Air from Suite in D",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Bach",
    "file": "13_air_from_suite_in_d",
    "extension": "mp3",
    "duration": "00:59"
  },
  {
    "track": 14,
    "name": "Arioso",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Bach",
    "file": "14_arioso",
    "extension": "mp3",
    "duration": "01:07"
  },
  {
    "track": 15,
    "name": "Air from Water Music",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Handel",
    "file": "15_air_from_water_music",
    "extension": "mp3",
    "duration": "01:15"
  },
  {
    "track": 16,
    "name": "Aria from Concerto Grosso",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Softer Pieces for Bridesmaids",
    "genre": "Classical",
    "composer": "Handel",
    "file": "16_aria_from_concerto_grosso",
    "extension": "mp3",
    "duration": "01:37"
  },
  {
    "track": 17,
    "name": "Introduction",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "",
    "file": "17_introduction",
    "extension": "mp3",
    "duration": "00:11"
  },
  {
    "track": 18,
    "name": "Hornpipe from Water Music",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Handel",
    "file": "18_hornpipe_from_water_music",
    "extension": "mp3",
    "duration": "00:47"
  },
  {
    "track": 19,
    "name": "Sinfonia from Cantata 29",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Bach",
    "file": "19_sinfonia_from_cantata_29",
    "extension": "mp3",
    "duration": "00:53"
  },
  {
    "track": 20,
    "name": "Now Thank We All Our God",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Karg-Elert",
    "file": "20_now_thank_we_all_our_god",
    "extension": "mp3",
    "duration": "01:26"
  },
  {
    "track": 21,
    "name": "Now Thank We All Our God",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Bach",
    "file": "21_now_thank_we_all_our_god",
    "extension": "mp3",
    "duration": "01:01"
  },
  {
    "track": 22,
    "name": "Toccata from Symphony 5",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Widor",
    "file": "22_toccata_from_symphony_5",
    "extension": "mp3",
    "duration": "01:07"
  },
  {
    "track": 23,
    "name": "Wedding March",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Mendelssohn",
    "file": "23_wedding_march",
    "extension": "mp3",
    "duration": "01:05"
  },
  {
    "track": 24,
    "name": "Praise the Lord with Drums and Cymbals",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Karg-Elert",
    "file": "24_praise_the_lord_with_drums_and_cymbals",
    "extension": "mp3",
    "duration": "01:01"
  },
  {
    "track": 25,
    "name": "Finale from Symphony No. 1",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Vierne",
    "file": "25_finale_from_symphony_no_1",
    "extension": "mp3",
    "duration": "00:56"
  },
  {
    "track": 26,
    "name": "Finale from Symphony No. 2",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Widor",
    "file": "26_finale_from_symphony_no_2",
    "extension": "mp3",
    "duration": "00:58"
  },
  {
    "track": 27,
    "name": "Allegro from Sonata No. 2",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Recessional Pieces",
    "genre": "Classical",
    "composer": "Mendelssohn",
    "file": "27_allegro_from_sonata_no_2",
    "extension": "mp3",
    "duration": "00:59"
  },
  {
    "track": 28,
    "name": "Trumpet Tune",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Pieces for Processional or Recessional",
    "genre": "Classical",
    "composer": "German",
    "file": "28_trumpet_tune",
    "extension": "mp3",
    "duration": "01:11"
  },
  {
    "track": 29,
    "name": "Trumpet Voluntary",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Pieces for Processional or Recessional",
    "genre": "Classical",
    "composer": "Stanley",
    "file": "29_trumpet_voluntary",
    "extension": "mp3",
    "duration": "01:21"
  },
  {
    "track": 30,
    "name": "Fanfare",
    "album": "Preparing for Your Marriage and Wedding Cermony",
    "grouping": "Pieces for Processional or Recessional",
    "genre": "Classical",
    "composer": "Matthias",
    "file": "30_fanfare",
    "extension": "mp3",
    "duration": "00:57"
  }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackComposer = (value.composer) ? ('by ' + value.composer): '',
                    trackGrouping = value.grouping,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <div class="plNum"> ' + trackNumber + '.</div> \
                        <div class="plTitle"> <div class="plTrackGrouping">' + trackGrouping + '</div> <div class="plTrackName">'+ trackName + '</div> <div class="plTrackComposer"> ' + trackComposer +'</div></div> \
                        <div class="plLength">' + trackDuration + '</div> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});