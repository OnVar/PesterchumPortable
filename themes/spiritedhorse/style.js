{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/spiritedhorse.png",
  "size": [548,548],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Spirited Horse",
  "menu" : { "style": "font-family: 'Courier'; font-size: 14px; font:bold; background-color: #e33c0f;border:2px solid #924d46",
             "selected": "background-color: #AB371A",
             "loc": [300,78]},
  "menubar": { "style": "font-family: 'Courier'; font-size: 11px; color:white; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [443, 606]},
  "minimize": { "image": "$path/m.png",
                "loc": [435, 608]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "Horses",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Plans",
                       "userlist": "Enemies",
                       "import": "Import",
					   "reconnect": "Reconnect",
	     "idle": "Idle",
                       "exit": "Exit"},
            "profile": {"_name": "Horses",
                        "switch": "Chumhandle",
                        "theme": "Theme",
                        "color": "Colour",
                        "block": "Trollslum",
                        "quirks": "Quirks" },
            "help": { "_name": "Horses",
                      "help": "Help",
                      "calsprite": "Calsprite",				
                      "about": "About" },
            "rclickchumlist": {"pester": "Pester",
                               "removechum": "Remove",
                               "report": "Report",
                               "blockchum": "Block",
							   "report": "Report",
                               "addchum": "Add Chum",
                               "viewlog": "View Pesterlog",
                               "unblockchum": "Unblock",
                               "banuser": "Ban",
                               "opuser": "Promote",
                               "quirksoff": "Quirks Off" }
           },
  "defaultwindow": { "style": "background: #c06f52; font-family:'Courier';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #924d46; background-color: #e33c0f;color: white;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:black; ",
             "size": [217, 97],
             "loc": [284,94],
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#000000" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "white" },

                 "offline": { "icon": "$path/offline.png", "color": "#4E4949"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#000000" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#000000" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#000000" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#000000" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#000000" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#000000" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#000000" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#000000" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "white" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "white" },

                 "discontent": { "icon": "$path/discontent.png", "color": "white" },

                 "devious": { "icon": "$path/devious.png", "color": "white" },

                 "sleek": { "icon": "$path/sleek.png", "color": "white" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "white" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "white" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "white" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "white" },

                 "perky": { "icon": "$path/perky.png", "color": "white" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "white" },

                 "protective": { "icon": "$path/protective.png", "color": "white" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(0,0,0,0);" },
                    "handle": { "style": "background: #e33c0f; padding: 3px; padding-left: 26px; color: white; font-family:'Courier'; font: bold; text-align:left; font-size: 12px; border: 2px solid #924d46;",
                                "loc": [165,307],
                                "size": [194, 20] },
                    "colorswatch": { "loc": [358,307],
                                     "size": [22,21],
                                     "text": "" },
                    "currentMood": [171, 309]
                  },
  "addchum":  { "style": "background: #e33c0f; border:2px solid #924d46; font: bold; color: white; font-family:'Courier';",
                "loc": [45,443],
                "size": [97,25],
                "text": "Hire Minion"
              },
  "pester": { "style": "background: #e33c0f; border:2px solid #924d46; font: bold; color: white; font-family:'Courier';",
                "loc": [45,468],
                "size": [97,25],
                "text": "Start Heist"
            },
  "block": { "style": "background: #e33c0f; border:2px solid #924d46; font: bold; color: white; font-family:'Courier';",
                "loc": [45,493],
                "size": [97,25],
                "text": "Eat Enemy"
           },
  "moodlabel": { "style": "font:bold;font-family:'Courier';color:#C6C6C6;",
                 "text": ""
			   },
  "defaultmood": 1,
  "moods": [
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [180, 450],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [210, 450],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [240, 450],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [270, 450],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [300, 450],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [180, 480],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [210, 480],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [240, 480],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [270, 480],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [300, 480],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:center; background:#e33c0f;border:2px solid #924d46;color: white; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#AB371A; border:2px solid #924d46; color: white; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [330, 450],
		"size": [35, 60],
		"text": "",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #9f3122;border:2px solid black; font-family: 'Courier';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #bc6b4e; color: black; border:0px; font-size: 14px;",
					"text" : "Threatening $handle" },
	 "textarea": {
		 "style": "background: #fbe9d1;  font-size: 14px;font:bold; border:2px solid #ebbf9a;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
 	 },
  "input": { "style": "background: #fde7be; border:2px solid #bc6b4e;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
	  "style": "background: #e7b18d; font-family: 'Arial'"
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#414141"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #A6A65D;border:2px solid black; font-family: 'Courier';",
   "label": { "style": "margin-bottom: 21px;background: #be6d50; color: #2E2E2E; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #fbe9d1;  font-size: 14px;font:bold; border:2px solid #ebbf9a;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
   },
   "userlist": { "style": "border:2px solid #4B4B4B; background: #fddfb9;font: bold;font-family: 'Courier';selection-background-color:#0D1032; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #fddfb9; border:2px solid #ebbf9a;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #ebbf9a; background: #fddfb9; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;" 
                    },
             "buttons": { "style": "color: white; font: bold; border: 2px solid #ebbf9a; font: bold; font-size: 12px; background: #ebbf9a; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#ebbf9a",
       "newmsgcolor": "#414141",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}