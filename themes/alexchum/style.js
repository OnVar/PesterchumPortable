{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/meaty.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Andromeda",
  "menu" : { "style": "font-family: 'Georgia'; font: bold; font-size: 14px; background-color: #c0c0c0;border:2px solid #c7a9c1" },
  "menubar": { "style": "font-family: 'Georgia'; font:bold; font-size: 14px; color:#c0c0c0; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [282, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [264, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #c7a9c1; font-family:'Georgia';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #c7a9c1; background-color: #c0c0c0;color: #000000;font: bold;font-size:14px;font-family: 'Georgia';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#c780ba" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#a56a9a" },

                 "offline": { "icon": "$path/offline.png", "color": "#696969"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#c780ba" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#c780ba" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#c780ba" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#c780ba" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#c780ba" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#F4D9D2" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#c780ba" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#c780ba" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#a56a9a" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#a56a9a" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#a56a9a" },

                 "devious": { "icon": "$path/devious.png", "color": "#a56a9a" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#a56a9a" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#a56a9a" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#a56a9a" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#a56a9a" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#a56a9a" },

                 "perky": { "icon": "$path/perky.png", "color": "#a56a9a" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#a56a9a" },

                 "protective": { "icon": "$path/protective.png", "color": "#ffffff" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: #c0c0c0 ;font:bold; font-family: 'Georgia';" 
                    },
					"handle": { "style": "background-color: #c0c0c0; padding: 3px; padding-left: 25px; color:#a56a9a; font-family:'Georgia'; font:bold; text-align:left; border:2px solid #c7a9c1;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid #c7a9c1; font: bold; color: #a56a9a; font-family:'Georgia';"
              },
  "pester": { "style": "background: black; border:2px solid #c7a9c1; font: bold; color: #a56a9a; font-family:'Georgia';"
            },
  "block": { "style": "background: black; border:2px solid #c7a9c1; font: bold; color: #a56a9a; font-family:'Georgia';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Georgia';color:#c0c0c0;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:#c0c0c0;border:2px solid #c7a9c1;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#9e9e9e; border:2px solid #a56a9a; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "READING A BOOK",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #c7a9c1;border:2px solid #696969; font-family: 'Georgia';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #a56a9a; color: black; border:0px; font-size: 14px;",
					"text" : ":: conversing with: $handle ::" },
	 "textarea": {
		 "style": "background: #c0c0c0;  font-size: 14px;font:bold; border:2px solid #696969;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Georgia'"
 	 },
  "input": { "style": "background: #c0c0c0; border:2px solid #696969;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#451509"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #c7a9c1;border:2px solid black; font-family: 'Georgia';",
   "label": { "style": "margin-bottom: 21px;background: #a56a9a; color: #d2bacd; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #d2bacd;  font-size: 14px;font:bold; border:2px solid #696969;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Georgia'"
   },
   "userlist": { "style": "border:2px solid #696969; background: #C0C0C0;font: bold;font-family: 'Georgia';selection-background-color:#650b54; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #c0c0c0; border:2px solid #696969;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #696969; background: #c0c0c0; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Georgia';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #696969; font: bold; font-size: 12px; background: #d2bacd; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#650b54",
       "newmsgcolor": "#d2bacd",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}