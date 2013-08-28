{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/bloodyback.png",
  "size": [433,641],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Bloodchum",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #E40000;border:2px solid #646464",
  "selected": "background-color: #000000" },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px; color:#FFFFFF; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [250, 3]},
  "minimize": { "image": "$path/m.png",
                "loc": [230, 6]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #E40000; font-family:'Arial';font:bold;selection-background-color:#E40000; " },
  "chums": { "style": "border:2px solid #5C5C5C; background-color: rgb(0,0,0,0%);color: #5C5C5C;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#E40000; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#FFFFFF" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#E5E5E5" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#FFFFFF" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#FFFFFF" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#FFFFFF" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#FFFFFF" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#FFFFFF" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#FFFFFF" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#FFFFFF" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#FFFFFF" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#E5E5E5" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#E5E5E5" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#E5E5E5" },

                 "devious": { "icon": "$path/devious.png", "color": "#E5E5E5" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#E5E5E5" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#E5E5E5" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#E5E5E5" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#E5E5E5" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#E5E5E5" },

                 "perky": { "icon": "$path/perky.png", "color": "#E5E5E5" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#E5E5E5" },

                 "protective": { "icon": "$path/protective.png", "color": "#000000" },

                 "blocked": { "icon": "$path/blocked.png", "color": "#000000" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "",
                      "style": "color: #FFFFFF ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: #E40000; padding: 3px; padding-left: 25px; color:#000000; font-family:'Arial'; font:bold; text-align:left; border:2px solid #5C5C5C;" }
                  },
  "addchum":  { "style": "background: #E40000; border:2px solid #5C5C5C; font: bold; color: #000000; font-family:'Arial';",
             "text": "BEGRUDGE"
              },
  "pester": { "style": "background: #E40000; border:2px solid #5C5C5C; font: bold; color: #000000; font-family:'Arial';",
             "text": "ANNOY" 
           },
  "block": { "style": "background: #E40000; border:2px solid #5C5C5C; font: bold; color: #000000; font-family:'Arial';",
             "text": "IGNORE"
           },
  "moodlabel": { "text": "",
                 "style": "font:bold;font-family:'Arial';color:#000000;"
			   },
  "defaultmood": 12,
  "moods": [
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:#E40000;border:2px solid #626262;color: #FFFFFF; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#5C5C5C; border:2px solid #5f5f5f; color: #E40000; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "NOT HERE FOR NOW",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #000000;border:2px solid #626262; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #E40000; color: #000000; border:0px; font-size: 14px;",
					"text" : "~ TROLLING: $handle ~" },
	 "textarea": {
		 "style": "background: #D2B1B1;  font-size: 14px;font:bold; border:2px solid #5C5C5C;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: #DB6666; border:2px solid #626262;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": "background: #8A0000; font-family: 'Arial'"
	 },
	 "tabs": {
		 "style": "border: 2px solid #C39A9A; background: #8A0000; color: #FFFFFF;",
		 "selectedstyle": "border: 3px solid #C39A9A; background: #D27C7C; color: #5F3838;",
		 "newmsgcolor": "#730F0F"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #0F731C;border:2px solid #626262; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #EEAFAF; color: #5C5C5C; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #D2B1B1;  font-size: 14px;font:bold; border:2px solid #5C5C5C;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #780000; background: #EEAFAF;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #DB6666; border:2px solid #5C5C5C;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": "color:#FF0000; border: 2px solid #5C5C5C; background: #794B4B; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: #FF0000; font: bold; border: 2px solid #5C5C5C; font: bold; font-size: 12px; background: #794B4B; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#5C5C5C",
       "newmsgcolor": "#FA0A0A",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}