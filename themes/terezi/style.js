{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/pyralweep.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Pyrope",
  "menu" : { "style": "font-family: 'Verdana'; font: bold; font-size: 14px; background-color: #007676;border:2px solid #C15555" },
  "menubar": { "style": "font-family: 'Verdana'; font:bold; font-size: 14px; color:#FFFFFF; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [262, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [244, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #007676; font-family:'Verdana';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #C15555; background-color: #007676;color: #000000;font: bold;font-size:14px;font-family: 'Verdana';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#FF0000" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#C15555" },

                 "offline": { "icon": "$path/offline.png", "color": "#6F1212"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#FF0000" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#FF0000" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#FF0000" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#FF0000" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#FF0000" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#FF0000" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#FF0000" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#FF0000" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#C15555" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#C15555" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#C15555" },

                 "devious": { "icon": "$path/devious.png", "color": "#C15555" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#C15555" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#C15555" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#C15555" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#C15555" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#C15555" },

                 "perky": { "icon": "$path/perky.png", "color": "#C15555" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#C15555" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: gray ;font:bold; font-family: 'Verdana';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:#C15555; font-family:'Verdana'; font:bold; text-align:left; border:2px solid #007676;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid #C15555; font: bold; color: #007676; font-family:'Verdana';"
              },
  "pester": { "style": "background: black; border:2px solid #C15555; font: bold; color: #007676; font-family:'Verdana';"
            },
  "block": { "style": "background: black; border:2px solid #C15555; font: bold; color: #007676; font-family:'Verdana';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Verdana';color:#FF0000;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#007676;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:center; background:#DE2929;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#FF0000; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "OFFLINE/AWAY",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #125555;border:2px solid black; font-family: 'Verdana';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #007676; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #2FD7D7;  font-size: 14px;font:bold; border:2px solid #C15555;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Verdana'"
 	 },
  "input": { "style": "background: #03B5B5; border:2px solid #007676;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#A4AE1A"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #A6A65D;border:2px solid black; font-family: 'Verdana';",
   "label": { "style": "margin-bottom: 21px;background: #C4C4C4; color: #448181; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #76D1D1;  font-size: 14px;font:bold; border:2px solid #C15555;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Verdana'"
   },
   "userlist": { "style": "border:2px solid #82873E; background: #48BCBC;font: bold;font-family: 'Verdana';selection-background-color:#6F1212; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #48BCBC; border:2px solid #C15555;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #C15555; background: #48BCBC; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Verdana';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #C15555; font: bold; font-size: 12px; background: #C15555; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#C15555",
       "newmsgcolor": "#A4AE1A",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}