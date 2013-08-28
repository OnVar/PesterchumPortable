{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/ath2.png",
  "size": [429,560],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "~ATH",
  "menu" : { "style": "font-family: 'Courier'; font-size: 14px; color:#ffffff; font:bold; background-color: #000000;border:2px solid #000000",
             "selected": "background-color: #0052AD",
             "loc": [120,350]},
  "menubar": { "style": "font-family: 'Courier'; font-size: 40px; color:#ffffff; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [443, 606]},
  "minimize": { "image": "$path/m.png",
                "loc": [435, 608]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "~ A",
                       "options": "options",
                       "memos": "sessions",
                       "addgroup": "add.session",
                       "logviewer": "references",
                       "userlist": "viruses",
                       "import": "import",
					   "reconnect": "reconnect",
	     "idle": "idle",
                       "exit": "session.die"},
            "profile": {"_name": "T",
                        "switch": "alias",
                        "theme": "theme",
                        "color": "colour",
                        "block": "bad.viruses",
                        "quirks": "quirks" },
            "help": { "_name": "H",
                      "help": "help",
                      "calsprite": "calsprite",	
                      "nickserv": "nickserv",
                      "report bug": "report.bug",		
                      "about": "about" },
            "rclickchumlist": {"pester": "execute",
                               "removechum": "remove",
                               "report": "report",
                               "moveto": "move.to",
                               "blockchum": "this.die",
							   "report": "report",
                               "addchum": "add.term",
                               "viewlog": "view.reference",
                               "unblockchum": "this.live",
                               "banuser": "excute(null)",
                               "opuser": "import.author",
                               "quirksoff": "quirks.off" }
           },
  "defaultwindow": { "style": "background: #000000; color: #ffffff; font-family:'Courier';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:0px solid rgb(0,0,0,0); background-color: rgb(0,0,0,0);color: #ffffff;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:black; ",
             "size": [500, 50],
             "loc": [60,70],
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#FFFFFF" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#FFFFFF" },

                 "offline": { "icon": "$path/offline.png", "color": "#0052AD"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#FFFFFF" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#FFFFFF" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#FFFFFF" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#FFFFFF" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#FFFFFF" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#FFFFFF" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#FFFFFF" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#FFFFFF" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#FFFFFF" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#FFFFFF" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#FFFFFF" },

                 "devious": { "icon": "$path/devious.png", "color": "#FFFFFF" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#FFFFFF" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#FFFFFF" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#FFFFFF" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#FFFFFF" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#FFFFFF" },

                 "perky": { "icon": "$path/perky.png", "color": "#FFFFFF" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#FFFFFF" },

                 "protective": { "icon": "$path/protective.png", "color": "#2ED73A" },

                 "blocked": { "icon": "$path/blocked.png", "color": "#C9C9C9" }
			 }
		   },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(0,0,0,0);" },
                    "handle": { "style": "background: rgba(0,0,0,0); padding: 3px; padding-left: 26px; color: #7E7E7E; font-family:'Courier'; font: bold; text-align:left; font-size: 12px; border: 3px solid rgba(0,0,0,0);",
                                "loc": [140,593],
                                "size": [202, 27] },
                    "colorswatch": { "loc": [317,596],
                                     "size": [22,21],
                                     "text": "" },
                    "currentMood": [146, 598]
                  },
  "trollslum": {
      "style": "background: #000000; font-family: 'Courier'; color: white;",
      "size": [200, 450],
      "label": { "text": "bad.viruses",
                 "style": "color: white ; font: bold; font-family: 'Courier'; border: 0px;" },
      "chumroll": {"style": "border: 3px solid #ffffff; background-color: #000000; color: #ffffff; padding: 5px; font: bold; font-family: 'Courier'; selection-background-color: #0052ad;" }
  },
  "addchum":  { "style": "background: rgba(0,0,0,0); border:0px solid #B3B3B3; font: bold; color: #FFFFFF; font-family:'Courier';",
                "loc": [50,503],
                "size": [130,36],
                "text": "import"
              },
  "pester": { "style": "background: rgba(0,0,0,0); border:0px solid #B3B3B3; font: bold; color: #FFFFFF; font-family:'Courier';",
                "loc": [150,499],
                "size": [143,42],
                "text": "execute"
            },
  "block": { "style": "background: rgba(0,0,0,0); border:0px solid #B3B3B3; font: bold; color: #FFFFFF; font-family:'Courier';",
                "loc": [250,497],
                "size": [143,49],
                "text": "this.die"
           },
  "moodlabel": { "style": "font:bold;font-family:'Courier';color:#C6C6C6;",
                 "text": ""
			   },
  "defaultmood": 17,
  "moods": [
       { "style": "text-align:left; background:#BABABA;border:2px solid black;color: black; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#C6C6C6; border:2px solid #222222; color: black; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [700, 295],
		"size": [0, 0],
		"text": "",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #000000;border:2px solid black; font-family: 'Courier';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #000000; color: #0052AD; border:0px; font-size: 16px; font:bold;",
					"text" : "$ rm -rf $handle" },
	 "textarea": {
		 "style": "background: #ffffff;  font-size: 15px;font:bold; border:2px solid #000000;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
 	 },
  "input": { "style": "background: #000000; color:#0052AD; border:2px solid #ffffff;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "tabwindow" : {
	  "style": "background: #000000; font-family: 'Courier'"
  },
  "tabs": {
      "style": "border: 2px solid #000000; background: #000000; color: #0052AD;",
      "selectedstyle": "border: 3px solid #000000; background: #000000; color: #FFFFFF;",
      "newmsgcolor": "#2ed73a",
      "tabstyle": 1
  },
  "text": {
      "beganpester": "executed",
      "ceasepester": "nullified",
      "blocked": "deleted",
      "unblocked": "undeleted",
      "openmemo": "began working on",
      "joinmemo": "began working on",
      "closememo": "ceased working on",
      "kickedmemo": "THIS.DIE()"
  },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #000000;border:2px solid black; font-family: 'Courier';",
   "label": { "style": "margin-bottom: 21px;background: #000000; color: #0052AD; border:0px; font-size: 15px;"
			},
  "label": { "text": "EXECUTE ( $channel )",
             "style": "margin-bottom: 21px;background: #000000; color: #0052AD; border:0px; font:bold; font-size: 16px;" 
           },
   "textarea": {
	   "style": "background: #ffffff;  font-size: 15px;font:bold; border:2px solid #000000;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
   },
   "userlist": { "style": "border:2px solid #000000; background: #FFFFFF;font: bold;font-family: 'Courier';selection-background-color:#0052AD; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #000000; color:#0052AD; border:2px solid #ffffff;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " color: #0052ad; border: 2px solid #000000; background: #000000; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;" 
                    },
             "buttons": { "style": "color: #0052AD; font: bold; border: 2px solid #000000; font: bold; font-size: 12px; background: #000000; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#FFFFFF",
       "newmsgcolor": "#2ED73A",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}