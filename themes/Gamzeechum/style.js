{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/tnbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "TROLLIAN",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color:#330099;border:2px solid #9966FF", "loc": [3, 6] },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px;" },
  "close": { "image": "$path/x.png",
             "loc": [275, 6]},
  "minimize": { "image": "$path/m.png",
                "loc": [260, 12]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #330099;font-family:'Arial';font:bold;selection-background-color:#330099; " },
  "chums": { "style": "border:2px solid #330099; background-color: transparent;color: #9966FF;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#330099; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "gray" },

                 "offline": { "icon": "$path/offline.png", "color": "Indigo"},
	    
                 "pleasant": { "icon": "$path/pleasant.png","color": "white" },

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

                 "mirthful": { "icon": "$path/mirthful.png", "color": "Indigo" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "red" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "red" },

                 "perky": { "icon": "$path/perky.png", "color": "red" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "red" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "TROLLTAG:",
                      "style": "color: black;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: transparent; padding: 3px; padding-left: 25px; color:white; font-family:'Arial'; font:bold; text-align:left; border:2px solid #330099;" }
                  },
  "addchum":  { "text": "MaKe A bRo", "style": "background: transparent;border:2px solid #330099;font: bold; color: WHITE; font-family:'Arial';"
              },
  "pester": { "text": "TrOlL", "style": "background: transparent;border:2px solid #330099;font: bold; color: WHITE; font-family:'Arial';"
            },
  "block": { "text": "BlOcK" , "style": "background: transparent; border:2px solid #330099; font: bold; color: WHITE; font-family:'Arial';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Arial';color:black;"
			   },
  "defaultmood": 7,
  "moods": [
      { "style": "text-align:left; background:transparent;border:2px solid #330099;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:transparent; border:2px solid #330099;color: white; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [135, 30],
	 "text": "EcStAtIc",
		"icon": "$path/ecstatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:transparent;border:2px solid #330099;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:transparent; border:2px solid #330099;color: white; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 513],
		"size": [135, 30],
	    "text": "ReLaXeD",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:transparent;border:2px solid #330099;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:transparent; border:2px solid #330099; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 541],
		"size": [135, 30],
	    "text": "DiScOnTeNt",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:transparent;border:2px solid #330099;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:transparent; border:2px solid #330099;color: white; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 485],
		"size": [135, 30],
	    "text": "DeViOuS",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:transparent;border:2px solid #330099;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:transparent; border:2px solid #330099;color: white; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 513],
		"size": [135, 30],
	    "text": "SlEeK",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:transparent;border:2px solid #330099;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:transparent; border:2px solid #330099; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 541],
		"size": [135, 30],
	    "text": "DeTeStFuL",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:center; border:2px solid #330099; background:black;color: white; font-family:'Arial'; font:bold;padding-left:3px;", 
		"selected": "text-align:left; background:indigo; border:2px solid #330099; padding: 5px;color: black; font-family:'Arial'; font:bold;padding-left:3px;",
		"loc": [15, 569],
		"size": [268, 30],
		"text": "AbScOnD",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #330099;border:2px solid #9966FF; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #6600CC; color: black; border:0px; font-size: 14px;",
					"TeXt": ":: TrOlLiNg: $HaNdLe ::" },
	 "textarea": {
		 "style": "background:#663399;  font-size: 14px;font:bold; border:2px solid #000066;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: #663399; border:2px solid #000066;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
  "text": { 
      "beganpester": "bEgAn TrOlLiNg",
      "ceasepester": "GaVe Up TrOlLiNg",
      "blocked": "BlOcKeD",
      "unblocked": "MeRcIfUlLy FoRgAvE",
      "openmemo": "OpEnEd MeMo On BoArD",
      "joinmemo": "ReSpOnDeD tO mEmO",
      "closememo": "CeAsEd ReSpOnDiNg To MeMo",
      "kickedmemo": "YoU hAvE bEeN bAnNeD fRoM tHiS mEmO mOtHeRfUcKeR!"
  },
	 "tabs": {
		 "style": "Color:;",
		 "selectedstyle": "Color:;",
		 "newmsgcolor": "Color:;"
	 },
	 "scrollbar": null
 },
 "memos":
 { "style": "background-color:;border:2px solid black; font-family: 'Arial';",
    "size": [600,425],
    "label": { "style": "margin-bottom: 21px;background: #330099; color: white; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background-color:#9966FF;  font-size: 14px;font:bold; border:2px solid #330099; text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #330099; background: #9966FF;font: bold;font-family: 'Courier';selection-background-color:#330099;; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #9966FF; border:2px solid #330099;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #330099; background: #9966FF; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #330099; font: bold; font-size: 12px; background: #9966FF; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },


   "tabs": {
       "style": "",
       "selectedstyle": "",
       "newmsgcolor": "#330099",
       "tabstyle": 0
     
   },
   "scrollbar": null
 }
}