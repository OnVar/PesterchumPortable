{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/midnightslots.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Study",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #C35A5A;border:2px solid #E55F5F" },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px; color:#000000; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [282, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [264, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #8A3232; font-family:'Arial';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #8A3232; background-color: #000000;color: #F9CFCF;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#F9CFCF" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#8A3232" },

                 "offline": { "icon": "$path/offline.png", "color": "#E5BCBC"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#F9CFCF" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#F9CFCF" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#F9CFCF" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#F9CFCF" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#F9CFCF" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#F9CFCF" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#F9CFCF" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#F9CFCF" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#8A3232" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#8A3232" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#8A3232" },

                 "devious": { "icon": "$path/devious.png", "color": "#8A3232" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#8A3232" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#8A3232" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#8A3232" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#8A3232" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#8A3232" },

                 "perky": { "icon": "$path/perky.png", "color": "#8A3232" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#8A3232" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: gray ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:#F9CFCF; font-family:'Arial'; font:bold; text-align:left; border:2px solid #F9CFCF;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid #8A3232; font: bold; color: #F9CFCF; font-family:'Arial';"
              },
  "pester": { "style": "background: black; border:2px solid #8A3232; font: bold; color: #F9CFCF; font-family:'Arial';"
            },
  "block": { "style": "background: black; border:2px solid #8A3232; font: bold; color: #F9CFCF; font-family:'Arial';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Arial';color:#F9CFCF;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#A42020;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#8A3232; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:#E90A0A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F9CFCF; border:2px solid #D25151; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "INVISIBLE / OFFLINE",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #EB8E8E;border:2px solid black; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #A42020; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #FFB6B6;  font-size: 14px;font:bold; border:2px solid #8A3232;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: #F9CFCF; border:2px solid #A42020;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#0F731C"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #C97777;border:2px solid black; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #5A1111; color: #F9CFCF; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #E8A4A4;  font-size: 14px;font:bold; border:2px solid #8A3232;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #780000; background: #F9CFCF;font: bold;font-family: 'Courier';selection-background-color:#E5BCBC; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #F9CFCF; border:2px solid #8A3232;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #8A3232; background: #F9CFCF; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #8A3232; font: bold; font-size: 12px; background: #8A3232; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#8A3232",
       "newmsgcolor": "#EB2C2C",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}