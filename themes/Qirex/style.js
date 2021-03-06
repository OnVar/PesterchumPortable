{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/tnbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "QIREX",
  "menu" : { "style": "font-family: 'Lucida Console'; font: bold; font-size: 14px; background-color: #731D57;border:2px solid #BA2F8C", "loc": [3, 6] },
  "menubar": { "style": "font-family: 'Lucida Console'; font:bold; font-size: 14px;" },
  "close": { "image": "$path/x.png",
             "loc": [275, 6]},
  "minimize": { "image": "$path/m.png",
                "loc": [260, 12]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #731D57; font-family:'Lucida Console';font:bold;selection-background-color:#731D57; " },
  "chums": { "style": "border:2px solid #731D57; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Lucida Console';selection-background-color:#731D57; ",
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
                    { "text": "Tag:",
                      "style": "color: black ;font:bold; font-family: 'Lucida Console';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Lucida Console'; font:bold; text-align:left; border:2px solid #731D57;" }
                  },
  "addchum":  { "text": "ADD TAG", "style": "background: #731D57; border:3px solid #4D1D57; font: bold; color: black; font-family:'Lucida Console';"
              },
  "pester": { "text": "TROLL", "style": "background: #731D57; border:3px solid #4D1D57; font: bold; color: black; font-family:'Lucida Console';"
            },
  "block": { "style": "background: #731D57; border:3px solid #BA2F8C; font: bold; color: black; font-family:'Lucida Console';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Lucida Console';color:black;"
			   },
  "defaultmood": 7,
  "moods": [
      { "style": "text-align:left; background:#BA2F8C;border:2px solid #731D57;color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #731D57; color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [135, 30],
	    "text": "ECSTATIC",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#BA2F8C;border:2px solid #731D57;color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #731D57; color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;",
		"loc": [15, 513],
		"size": [135, 30],
	    "text": "RELAXED",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#BA2F8C;border:2px solid #731D57;color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #731D57; color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;",
		"loc": [15, 541],
		"size": [135, 30],
	    "text": "DISCONTENT",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#BA2F8C;border:2px solid #731D57;color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #731D57; color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;",
		"loc": [148, 485],
		"size": [135, 30],
	    "text": "DEVIOUS",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#BA2F8C;border:2px solid #731D57;color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #BA2F8C; color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;",
		"loc": [148, 513],
		"size": [135, 30],
	    "text": "SLEEK",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#BA2F8C;border:2px solid #731D57;color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #780000; color: black; font-family:'Lucida Console'; font:bold; padding-left:3px;",
		"loc": [148, 541],
		"size": [135, 30],
	    "text": "DETESTFUL",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:center; border:2px solid #731D57; background:black;color: white; font-family:'Lucida Console'; font:bold;padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #780000; padding: 5px;color: black; font-family:'Lucida Console'; font:bold;padding-left:3px;",
		"loc": [15, 569],
		"size": [268, 30],
		"text": "ABSCOND",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #731D57;border:2px solid #731D57; font-family: 'Lucida Console';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #BA2F8C; color: black; border:0px; font-size: 14px;",
					"text" : ":: communicating : $handle ::" },
	 "textarea": {
		 "style": "background: white;  font-size: 14px;font:bold; border:2px solid #BA2F8C;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Lucida Console'"
 	 },
  "input": { "style": "background: white; border:2px solid #731D57;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
  "text": {
      "beganpester": "began communicating with",
      "ceasepester": "ceased communicating with",
      "blocked": "blocked",
      "unblocked": "mercifully forgave",
      "openmemo": "joined board",
      "joinmemo": "responded to",
      "closememo": "ceased responding",
      "kickedmemo": "You have been banned from this memo!"
  },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#6C1B51"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #731D57;border:2px solid #731D57; font-family: 'Lucida Console';",
   "label": { "style": "margin-bottom: 21px;background: #646464; color: white; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: white;  font-size: 14px;font:bold; border:2px solid #ffa4a4;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Lucida Console'"
   },
   "userlist": { "style": "border:2px solid #731D57; background: white;font: bold;font-family: 'Courier New';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: white; border:2px solid #BA2F8C;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #BA2F8C; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Lucida Console';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #731D57; font: bold; font-size: 12px; background: #990099; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },


   "tabs": {
       "style": "",
       "selectedstyle": "",
       "newmsgcolor": "#6C1B51",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}