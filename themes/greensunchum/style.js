{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/pcbg2.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Green Sun",
  "menu" : { "style": "font-family: 'Courier'; font: bold; font-size: 14px; color:#FFFF00; background-color: #138B17;border:2px solid #0A4B0D", "loc": [52,5],
             "menuitem": "margin-right:15px;",
             "selected": "background-color: #2ED73A",
             "loc": [60,8]
           },
  "menubar": { "style": "font-family: 'Courier'; font:bold; font-size: 14px; color:#FFFF00; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [266, 15]},
  "minimize": { "image": "$path/m.png",
                "loc": [252, 21]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "Client",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Pesterlogs",
                       "userlist": "Userlist",
                       "import": "Import",
					   "reconnect": "Reconnect",
					   "idle": "Idle",
                       "exit": "Exit"},
            "profile": {"_name": "Profile",
                        "switch": "Switch",
                        "color": "Color",
                        "theme": "Theme",
                        "block": "Trollslum",
                        "quirks": "Quirks"},
            "help": { "_name": "Help",
                      "about": "About" },
            "rclickchumlist": {"pester": "Pester",
                               "removechum": "Remove Chum",
                               "report": "Report",
                               "blockchum": "Block",
                               "addchum": "Add Chum",
                               "viewlog": "View Pesterlog",
                               "unblockchum": "Unblock",
                               "banuser": "Ban User",
                               "opuser": "Make OP",
                               "quirksoff": "Quirks Off"
                              }
           },
  "trollslum": { 
      "style": "background: #2ED73A; border:2px solid #000000; font-family: 'Arial'",
      "size": [195, 200],
      "label": { "text": "TUMORS",
                 "style": "color: rgba(0, 0, 0, 90%) ;font:bold; font-family: 'Arial';border:0px;" },
      "chumroll": {"style": "border:2px solid #rgb(0,0,0,60); background-color: black;color: #FFFF00;font: bold;font-family: 'Arial';selection-background-color:#000000; " }
  },
  "defaultwindow": { "style": "background: #2ED73A; font-family:'Courier';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid rgb(0,0,0,90); background-color: rgb(0,0,0,50);color: #919815;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#FFFF00" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#FFFF00" },

                 "offline": { "icon": "$path/offline.png", "color": "#FFFFFF"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#FFFF00" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#FFFF00" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#FFFF00" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#FFFF00" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#FFFF00" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#FFFF00" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#FFFF00" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#FFFF00" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#FFFF00" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#FFFF00" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#FFFF00" },

                 "devious": { "icon": "$path/devious.png", "color": "#FFFF00" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#FFFF00" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#FFFF00" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#FFFF00" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#FFFF00" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#FFFF00" },

                 "perky": { "icon": "$path/perky.png", "color": "#FFFF00" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#FFFF00" },

                 "protective": { "icon": "$path/protective.png", "color": "#2ED73A" },

                 "blocked": { "icon": "$path/blocked.png", "color": "#919815" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "",
                      "style": "color: black ;font:bold; font-family: 'Courier';" 
                    },
					"handle": { "style": "background-color: rgb(0,0,0,50); padding: 3px; padding-left: 25px; color:#2ED73A; font-family:'Courier'; font:bold; text-align:left; border:2px solid rgb(0,0,0,90);" }
                  },
  "addchum":  { "style": "background: rgb(0,0,0,50); border:2px solid rgb(0,0,0,90); font: bold; color: #2ED73A; font-family:'Courier';"
              },
  "pester": { "style": "background: rgb(0,0,0,50); border:2px solid rgb(0,0,0,90); font: bold; color: #2ED73A; font-family:'Courier';"
              },
  "block": { "style": "background: rgb(0,0,0,50); border:2px solid rgb(0,0,0,90); font: bold; color: #2ED73A; font-family:'Courier';"
              },
  "moodlabel": { "text": "",
                 "style": "font:bold;font-family:'Courier';color:#000000;"
			   },
  "defaultmood": 17,
  "moods": [
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:rgb(0,0,0,50);border:2px solid rgb(0,0,0,90);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,90); border:2px solid rgb(0,0,0,95); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:rgb(0,0,0,70);border:2px solid rgb(0,0,0,95);color: #2ED73A; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,95); border:2px solid rgb(0,0,0,99); color: #FFFF00; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "GONE SUNNING",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #1D7A00;border:2px solid black; font-family: 'Courier';",
     "chumlabel": { "style": "margin-bottom: 21px;background: rgb(0,0,0,60); color: #FFFF00; border:0px; font-size: 14px;",
					"text" : "Powering $handle" },
	 "textarea": {
		 "style": "background: #86FF8A;  font-size: 14px;font:bold; border:2px solid rgb(0,0,0,60);text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
 	 },
  "input": { "style": "background: #165d00; color:#ffff00; border:2px solid rgb(0,0,0,70);margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "tabwindow" : {
	  "style": "background: #165D00; font-family: 'Courier'"
  },
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#FFFF00",
      "tabstyle": 1
  },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: rgb(0,0,0,60);border:2px solid black; font-family: 'Courier';",
   "label": { "style": "margin-bottom: 21px;background: rgb(0,0,0,60); color: #FFFF00; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #86FF8A;  font-size: 14px;font:bold; border:2px solid rgb(0,0,0,60);text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
   },
   "userlist": { "style": "border:2px solid rgb(0,0,0,60); background: #86FF8A;font: bold;font-family: 'Courier';selection-background-color:#2ED73A; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #165d00; color:#ffff00; border:2px solid rgb(0,0,0,70);margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": "color: #FFFF00; border: 2px solid rgb(0,0,0,70); background: rgb(0,0,0,90); font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;" 
                    },
             "buttons": { "style": "color: #FFFF00; font: bold; border: 2px solid rgb(0,0,0,70); font: bold; font-size: 12px; background: rgb(0,0,0,90); margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#2ED73A",
       "newmsgcolor": "#FFFF00",
       "tabstyle": 1
   },
   "scrollbar": null
 },
 "toasts":
 {
   "width": 210,
   "height": 100,
   "style": "background: #27A100;",
   "icon": { "signin": "$path/../greensunchum/sun.png",
             "signout": "$path/../greensunchum/sun2.png",
             "style": "border: 2px solid #2ED73A; border-width: 2px 0px 0px 2px;" },
   "title": { "minimumheight": 50,
              "style": "border: 2px solid #2ED73A; border-width: 2px 2px 0px 0px; padding: 5px; font-weight:bold;"
            },
   "content": { "style": "background: #2ED73A; color: #FFFF00; padding: 5px;" }
 }
}