{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/chumcolour.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Study",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #316938;border:2px solid #0BC424" },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px; color:white; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [282, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [264, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: green; font-family:'Arial';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid green; background-color: #2ED73A;color: white;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "white" },

                 "distraught": { "icon": "$path/distraught.png", "color": "white" },

                 "pranky": { "icon": "$path/pranky.png", "color": "white" },


                 "smooth": { "icon": "$path/smooth.png", "color": "white" },

                 "mystified": { "icon": "$path/mystified.png", "color": "white" },

                 "amazed": { "icon": "$path/amazed.png", "color": "white" },

                 "insolent": { "icon": "$path/insolent.png", "color": "white" },

                 "bemused": { "icon": "$path/bemused.png", "color": "white" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "red" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "red" },

                 "discontent": { "icon": "$path/discontent.png", "color": "red" },

                 "devious": { "icon": "$path/devious.png", "color": "red" },

                 "sleek": { "icon": "$path/sleek.png", "color": "red" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "red" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "red" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "red" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "red" },

                 "perky": { "icon": "$path/perky.png", "color": "red" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "red" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: white ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Arial'; font:bold; text-align:left; border:2px solid white;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid green; font: bold; color: white; font-family:'Arial';"
              },
  "pester": { "style": "background: black; border:2px solid green; font: bold; color: white; font-family:'Arial';"
            },
  "block": { "style": "background: black; border:2px solid green; font: bold; color: white; font-family:'Arial';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Arial';color:white;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#2ED73A;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:green; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:#21F73E;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #21802D; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "INVISIBLE / OFFLINE",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #B2F9BC;border:2px solid black; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #2ED73A; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #83FD93;  font-size: 14px;font:bold; border:2px solid green;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: white; border:2px solid #2ED73A;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
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
   "style": "background-color: #0F731C;border:2px solid black; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #48B657; color: white; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #83FD93;  font-size: 14px;font:bold; border:2px solid green;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #780000; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: white; border:2px solid green;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid green; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid green; font: bold; font-size: 12px; background: green; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "green",
       "newmsgcolor": "#0BF72B",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}