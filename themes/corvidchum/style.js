{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/inkandecho.png",
  "size": [522,706],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Godtier",
  "menu" : { "style": "font-family: 'Courier'; font:bold; font-size: 14px; color:#E1E1E1; background-color: #353535;border:2px solid #191924",
  "selected": "background-color: #6090C6", 
              "loc": [80,255]},
  "menubar": { "style": "font-family: 'Courier'; font:bold; font-size: 14px; color:#8A8A8A; allign:center;"},
  "close": { "image": "$path/x.png",
             "loc": [351, 34]},
  "minimize": { "image": "$path/m.png",
                "loc": [370, 42]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #9F9F9F; font-family:'Courier';font:bold;selection-background-color:#000000; " },
  "chums": { "style": "border:2px solid rgb(0,0,0,0%); background-color: rgb(0,0,0,0%);color: black;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:white; ",
             "size": [200, 180],
             "loc": [75,275],
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#E1E1E1" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#E5E5E5" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#E1E1E1" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#E1E1E1" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#E1E1E1" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#E1E1E1" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#E1E1E1" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#E1E1E1" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#E1E1E1" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#E1E1E1" },


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
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(0,0,0,0);" },
                    "handle": { "style": "background: rgba(0,0,0,0); padding: 3px; padding-left: 26px; color: white; font-family:'Courier'; font: bold; text-align:left; font-size: 12px; border: 3px solid rgba(0,0,0,0);",
                                "loc": [80,500],
                                "size": [202, 27] },
                    "colorswatch": { "loc": [250,503],
                                     "size": [22,21],
                                     "text": "" },
                    "currentMood": [86, 505]
                  },
  "addchum":  { "style": "background: #3B3C3C; border:2px solid #E1E1E1; font: bold; color: white; font-family:'Courier';",
                "pressed" : "background: #3B3C3C;",
                "loc": [100,470],
                "size": [71, 22],
                "text": "Greet"
              },
  "pester": { "style": "background: #3B3C3C; border:2px solid #E1E1E1; font: bold; color:  white; font-family:'Courier';",
              "pressed" : "background: #3B3C3C;",
              "loc": [170,470],
              "size": [71, 22],
              "text": "Pester"
            },
  "block":  { "style": "background: rgba(0,0,0,0); border:0px; color: rgba(0,0,0,0);",
             "loc": [0, 0],
             "size": [0, 0],
             "text": ""
           },
  "moodlabel": { "text": "",
                 "style": "font:bold;font-family:'Courier';color:#000000;"
			   },
  "defaultmood": 22,
  "moods": [
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [414, 147],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [380, 366],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [434, 162],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [448, 178],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [460, 195],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [470, 215],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [475, 234],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },

      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [395, 138],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [476, 253],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [382, 385],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:rgb(0,0,0,0);border:2px solid rgb(0,0,0,0);color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:rgb(0,0,0,0); border:2px solid rgb(0,0,0,0); color: #EEEEEE; font-family:'Courier'; font:bold; padding-left:3px;",
		"loc": [382, 407],
		"size": [30, 30],
		"text": "",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #292936;border:2px solid #626262; font-family: 'Courier';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #EEEEEE; color: #000000; border:0px; font-size: 14px;",
					"text" : "Talking to $handle" },
	 "textarea": {
		 "style": "background: #F0EDEC;  font-size: 14px;font:bold; border:2px solid #5C5C5C;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
 	 },
  "input": { "style": "background: #e1e1e1; border:2px solid #626262;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": "background: #353535; font-family: 'Courier'"
	 },
	 "tabs": {
		 "style": "border: 2px solid #8A8A8A; background: #353535; color: #E1E1E1;",
		 "selectedstyle": "border: 3px solid #E1E1E1; background: #8A8A8A; color: #E1E1E1;",
		 "newmsgcolor": "#000000"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #0F731C;border:2px solid #626262; font-family: 'Courier';",
   "label": { "style": "margin-bottom: 21px;background: #b9b9c6; color: #5C5C5C; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #fdfdfd;  font-size: 14px;font:bold; border:2px solid #5C5C5C;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
   },
   "userlist": { "style": "border:2px solid #394464; background: #b9b9c6;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #e1e1e1; border:2px solid #5C5C5C;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": "color:#003789; border: 2px solid #5C5C5C; background: #E1E1E1; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;" 
                    },
             "buttons": { "style": "color: #003789; font: bold; border: 2px solid #5C5C5C; font: bold; font-size: 12px; background: #E1E1E1; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
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