{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/desertexiles.png",
  "size": [400,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Deserted",
  "menu" : { "style": "font-family: 'Tahoma'; font: bold; font-size: 14px; background-color: #ebcaab;border:2px solid #aca290" },
  "menubar": { "style": "font-family: 'Tahoma'; font:bold; font-size: 14px; color:#000000; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [232, 10]},
  "minimize": { "image": "$path/m.png",
                "loc": [218, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #ebcaab; font-family:'Tahoma';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #aca290; background-color: #ebcaab;color: #000000;font: bold;font-size:14px;font-family: 'Tahoma';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#000000" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#4f301b" },

                 "offline": { "icon": "$path/offline.png", "color": "#4E4949"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#000000" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#000000" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#000000" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#000000" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#000000" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#000000" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#000000" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#000000" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#4f301b" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#4f301b" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#4f301b" },

                 "devious": { "icon": "$path/devious.png", "color": "#4f301b" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#4f301b" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#4f301b" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#4f301b" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#4f301b" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#4f301b" },

                 "perky": { "icon": "$path/perky.png", "color": "#4f301b" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#4f301b" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: #b3895f ;font:bold; font-family: 'Tahoma';" 
                    },
					"handle": { "style": "background-color: #b3895f; padding: 3px; padding-left: 25px; color:#4f301b; font-family:'Tahoma'; font:bold; text-align:left; border:2px solid #ebcaab;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid #aca290; font: bold; color: #ebcaab; font-family:'Tahoma';"
              },
  "pester": { "style": "background: black; border:2px solid #aca290; font: bold; color: #ebcaab; font-family:'Tahoma';"
            },
  "block": { "style": "background: black; border:2px solid #aca290; font: bold; color: #ebcaab; font-family:'Tahoma';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Tahoma';color:#b3895f;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#ebcaab;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:center; background:#734524;border:2px solid black;color: black; font-family:'Tahoma'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#b3895f; border:2px solid #222222; color: black; font-family:'Tahoma'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "EXILED/DEAD",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #aca290;border:2px solid black; font-family: 'Tahoma';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #ebcaab; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #D1C9B8;  font-size: 14px;font:bold; border:2px solid #aca290;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Tahoma'"
 	 },
  "tabstyle": "background-color: #766A56; font-family: 'Tahoma'",
  "input": { "style": "background: #919191; border:2px solid #ebcaab;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },

  "tabwindow" : {
	  "style": "background: #D1C9B8; font-family: 'Tahoma'"
  },
	 "tabs": {
		 "style": "border: 2px solid #aca290; background: ebcaab; color: #b3895f;",
		 "selectedstyle": "",
		 "newmsgcolor": "#aca290"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #A6A65D;border:2px solid black; font-family: 'Tahoma';",
   "label": { "style": "margin-bottom: 21px;background: #BAA98B; color: #2E2E2E; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #D1C9B8;  font-size: 14px;font:bold; border:2px solid #aca290;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Tahoma'"
   },
   "userlist": { "style": "border:2px solid #4B4B4B; background: #C4AA7C;font: bold;font-family: 'Tahoma';selection-background-color:#0D1032; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #C4AA7C; border:2px solid #aca290;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #aca290; background: #C4AA7C; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Tahoma';font:bold;" 
                    },
             "buttons": { "style": "color: white; font: bold; border: 2px solid #aca290; font: bold; font-size: 12px; background: #aca290; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#aca290",
       "newmsgcolor": "#aca290",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}