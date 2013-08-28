{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/scales.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Ouroboros",
  "menu" : { "style": "font-family: 'Verdana'; font: bold; font-size: 14px; background-color: #4B6E52;border:2px solid #3E9F26" },
  "menubar": { "style": "font-family: 'Verdana'; font:bold; font-size: 14px; color:#FFFFFF; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [262, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [244, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #4B6E52; font-family:'Verdana';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #3E9F26; background-color: #4B6E52;color: #000000;font: bold;font-size:14px;font-family: 'Verdana';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#9EDB99" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#3E9F26" },

                 "offline": { "icon": "$path/offline.png", "color": "#50EF00"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#9EDB99" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#9EDB99" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#9EDB99" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#9EDB99" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#9EDB99" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#9EDB99" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#9EDB99" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#9EDB99" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#3E9F26" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#3E9F26" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#3E9F26" },

                 "devious": { "icon": "$path/devious.png", "color": "#3E9F26" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#3E9F26" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#3E9F26" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#3E9F26" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#3E9F26" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#3E9F26" },

                 "perky": { "icon": "$path/perky.png", "color": "#3E9F26" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#3E9F26" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Aliass:",
                      "style": "color: #9EDB99 ;font:bold; font-family: 'Verdana';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:#3E9F26; font-family:'Verdana'; font:bold; text-align:left; border:2px solid #4B6E52;" }
                  },
  "addchum":  { "text": "ASSOCIATE", "style": "background: black; border:2px solid #3E9F26; font: bold; color: #4B6E52; font-family:'Verdana';"
              },
  "pester": { "text": "PESSTER", "style": "background: black; border:2px solid #3E9F26; font: bold; color: #4B6E52; font-family:'Verdana';"
            },
  "block": { "text": "IGNORE", "style": "background: black; border:2px solid #3E9F26; font: bold; color: #4B6E52; font-family:'Verdana';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Verdana';color:#9EDB99;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#4B6E52;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#659462; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:center; background:#7CB688;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#9EDB99; border:2px solid #3E9F26; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "ABSSENT/MISSING",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #227928;border:2px solid black; font-family: 'Verdana';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #4B6E52; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #A1FFA7;  font-size: 14px;font:bold; border:2px solid #3E9F26;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Verdana'"
 	 },
  "input": { "style": "background: #9EDB99; border:2px solid #4B6E52;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
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
   "label": { "style": "margin-bottom: 21px;background: #C4C4C4; color: #078446; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #DBFFEB;  font-size: 14px;font:bold; border:2px solid #3E9F26;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Verdana'"
   },
   "userlist": { "style": "border:2px solid #82873E; background: #6EB669;font: bold;font-family: 'Verdana';selection-background-color:#50EF00; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #6EB669; border:2px solid #3E9F26;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #3E9F26; background: #6EB669; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Verdana';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #3E9F26; font: bold; font-size: 12px; background: #3E9F26; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#3E9F26",
       "newmsgcolor": "#A4AE1A",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}