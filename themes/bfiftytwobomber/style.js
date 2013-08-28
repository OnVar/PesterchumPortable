{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/background52.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "B-52 Bomber",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #323B69;border:2px solid #AEB5EC" },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px; color:#380000; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [272, 3]},
  "minimize": { "image": "$path/m.png",
                "loc": [250, 4]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #7899C2; font-family:'Arial';font:bold;selection-background-color:#7899C2; " },
  "chums": { "style": "border:2px solid #380000; background-color: #7899C2;color: #380000;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#7899C2; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#380000" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#39354D" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#380000" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#380000" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#380000" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#380000" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#380000" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#380000" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#380000" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#380000" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#39354D" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#39354D" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#39354D" },

                 "devious": { "icon": "$path/devious.png", "color": "#39354D" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#39354D" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#39354D" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#39354D" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#39354D" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#39354D" },

                 "perky": { "icon": "$path/perky.png", "color": "#39354D" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#39354D" },

                 "protective": { "icon": "$path/protective.png", "color": "#583030" },

                 "blocked": { "icon": "$path/blocked.png", "color": "#7899C2" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "",
                      "style": "color: #380000 ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: #7899C2; padding: 3px; padding-left: 25px; color:#380000; font-family:'Arial'; font:bold; text-align:left; border:2px solid #380000;" }
                  },
  "addchum":  { "style": "background: #7899C2; border:2px solid #380000; font: bold; color: #380000; font-family:'Arial';"
              },
  "pester": { "style": "background: #7899C2; border:2px solid #380000; font: bold; color: #380000; font-family:'Arial';"
            },
  "block": { "style": "background: #7899C2; border:2px solid #380000; font: bold; color: #380000; font-family:'Arial';"
           },
  "moodlabel": { "text": "",
                 "style": "font:bold;font-family:'Arial';color:#380000;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#7899C2;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:#675A9B;border:2px solid #696562;color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#380000; border:2px solid #5f5f5f; color: #7899C2; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "INVISIBLE / OFFLINE",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #B2C3FA;border:2px solid #696562; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #7899C2; color: #380000; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #AFC1D1;  font-size: 14px;font:bold; border:2px solid #380000;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: #AECFEC; border:2px solid #696562;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": "background: #B1C7F9; font-family: 'Arial'"
	 },
	 "tabs": {
		 "style": "border: 2px solid #999DC1; background: #B1CBF9; color: #38415F;",
		 "selectedstyle": "border: 3px solid #999DC1; background: #907CD2; color: #38415F;",
		 "newmsgcolor": "#0F3E73"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #0F731C;border:2px solid #696562; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #AEB5EC; color: #380000; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #AFC1D1;  font-size: 14px;font:bold; border:2px solid #380000;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #780000; background: #AEB5EC;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #AECFEC; border:2px solid #380000;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #380000; background: #7899C2; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: #7899C2; font: bold; border: 2px solid #380000; font: bold; font-size: 12px; background: #534B79; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#380000",
       "newmsgcolor": "#0A91F9",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}