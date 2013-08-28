{"inherits": "trollian2.5",
 "main":
 {"background-image": "$path/ashdenej.png",
  "size": [502,479],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Pridechum",
  "menu" : { "loc": [4, 20], "style": "font-family: 'Verdana'; font: bold; font-size: 14px; background-color: darkorchid;border:2px solid black" },
  "menubar": { "style": "font-family: 'Verdana'; font:bold; font-size: 14px; color:black; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [477, 0]},
  "minimize": { "image": "$path/m.png",
                "loc": [447, 0]},
  "defaultwindow": { "style": "background: blueviolet; font-family:'Verdana';font:bold;selection-background-color:black; " },
  "chums": { "loc": [7, 45], "style": "border:2px solid black; background-color: lightgoldenrodyellow;color: darkorchid;font: bold;font-size:14px;font-family: 'Verdana';selection-background-color:purple; ",
             "userlistcolor": "purple",
             "moods": {  "loc": [280, 56], 

                 "chummy": { "icon": "$path/chummy.png", "color": "darkorchid" },
                 "rancorous": { "icon": "$path/rancorous.png", "color": "darkmagenta" },
                 "offline": { "icon": "$path/offline.png", "color": "blueviolet"},
                 "pleasant": { "icon": "$path/pleasant.png", "color": "darkorchid" },
                 "distraught": { "icon": "$path/distraught.png", "color": "darkorchid" },
                 "pranky": { "icon": "$path/pranky.png", "color": "darkorchid" },
                 "smooth": { "icon": "$path/smooth.png", "color": "darkorchid" },
                 "mystified": { "icon": "$path/mystified.png", "color": "darkorchid" },
                 "amazed": { "icon": "$path/amazed.png", "color": "darkorchid" },
                 "insolent": { "icon": "$path/insolent.png", "color": "darkorchid" },
                 "bemused": { "icon": "$path/bemused.png", "color": "darkorchid" },
                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "darkmagenta" },
                 "relaxed": { "icon": "$path/relaxed.png", "color": "darkmagenta" },
                 "discontent": { "icon": "$path/discontent.png", "color": "darkmagenta" },
                 "devious": { "icon": "$path/devious.png", "color": "darkmagenta" },
                 "sleek": { "icon": "$path/sleek.png", "color": "darkmagenta" },
                 "detestful": { "icon": "$path/detestful.png", "color": "darkmagenta" },
                 "mirthful": { "icon": "$path/mirthful.png", "color": "darkmagenta" },
                 "manipulative": { "icon": "$path/manipulative.png", "color": "darkmagenta" },
                 "vigorous": { "icon": "$path/vigorous.png", "color": "darkmagenta" },
                 "perky": { "icon": "$path/perky.png", "color": "darkmagenta" },
                 "acceptant": { "icon": "$path/acceptant.png", "color": "darkmagenta" },
                 "protective": { "icon": "$path/protective.png", "color": "purple" },
                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "",
    "style": "color: black ;font:bold; font-family: 'Verdana';" 
                    },
					"handle": { "style": "background-color: purple; padding: 3px; padding-left: 25px; color:darkorchid; font-family:'Verdana'; font:bold; text-align:left; border:2px solid blueviolet;" }
                  },
  "addchum":  { "loc": [280, 86], "style": "background: lightgoldenrodyellow; border:2px solid black; font: bold; color: darkorchid; font-family:'Verdana';",
                 "text": "MEET"
              },
  "pester": { "loc": [280, 116], "style": "background: lightgoldenrodyellow; border:2px solid black; font: bold; color: darkorchid; font-family:'Verdana';",
                 "text": "ASSOCIATE"
            },
  "block": { "loc": [280, 146], "style": "background: darkmagenta; border:2px solid black; font: bold; color: lightgoldenrodyellow; font-family:'Verdana';",
                 "text": "SNUB"
           },
  "moodlabel": { "style": "",
                 "text": ""
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [375, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [375, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [375, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [375, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [375, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [405, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [405, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [405, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },

      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid purple; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [405, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },

      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid purple; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [405, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid purple; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [435, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid purple; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [435, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid purple; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [435, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [435, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [435, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [465, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [465, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [465, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [465, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [465, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [375, 236],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:lightgoldenrodyellow;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [405, 236],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:darkmagenta;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:darkorchid; border:2px solid black; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [435, 236],
		"size": [60, 30],
		"text": "OFF",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: lightgoldenrodyellow;border:2px solid black; font-family: 'Verdana';",
     "chumlabel": { "style": "margin-bottom: 21px;background: darkorchid; color: black; border:0px; font-size: 14px;",
					"text" : ":: Chatting with: $handle ::" },
	 "textarea": {
		 "style": "background: #b99dcb;  font-size: 14px;font:bold; border:2px solid black;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Verdana'"
 	 },
  "input": { "style": "background: darkorchid; border:2px solid black;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
	  "style": "background: purple; font-family: 'Verdana'"
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#ff0000"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: lightgoldenrodyellow;border:2px solid black; font-family: 'Verdana';",
   "label": { "style": "margin-bottom: 21px;background: darkorchid; color: black; border:0px; font-size: 14px;"
				},
   "textarea": {
	   "style": "background: #b99dcb;  font-size: 14px;font:bold; border:2px solid black;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Verdana'"
   },
   "userlist": { "style": "border:2px solid lightgoldenrodyellow; background: darkorchid;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: darkorchid; border:2px solid black;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid purple; background: darkorchid; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Verdana';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid black; font: bold; font-size: 12px; background: lightgoldenrodyellow; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "purple",
       "newmsgcolor": "black",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}