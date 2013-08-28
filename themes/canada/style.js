{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/leaf.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Canada",
  "menu" : { "style": "font-family: 'Verdana'; font: bold; font-size: 14px; background-color: #ff0000;border:2px solid #ffffff" },
  "menubar": { "style": "font-family: 'Verdana'; font:bold; font-size: 14px; color:#ffffff; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [262, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [244, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #f1d6d6; font-family:'Verdana';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #ffffff; background-color: #f1d6d6;color: #000000;font: bold;font-size:14px;font-family: 'Verdana';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#f44b4b" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#d87575" },

                 "offline": { "icon": "$path/offline.png", "color": "#7a0b0b"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#f44b4b" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#f44b4b" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#f44b4b" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#f44b4b" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#f44b4b" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#f44b4b" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#f44b4b" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#f44b4b" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#d87575" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#d87575" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#d87575" },

                 "devious": { "icon": "$path/devious.png", "color": "#d87575" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#d87575" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#d87575" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#d87575" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#d87575" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#d87575" },

                 "perky": { "icon": "$path/perky.png", "color": "#d87575" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#d87575" },

                 "protective": { "icon": "$path/protective.png", "color": "#ff0000" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "nickname:",
                      "style": "color: #ff0000 ;font:bold; font-family: 'Verdana';" 
                    },
					"handle": { "style": "background-color: #ffffff; padding: 3px; padding-left: 25px; color:#ff0000; font-family:'Verdana'; font:bold; text-align:left; border:2px solid #ff0000;" }
                  },
  "addchum":  { "text": "BEFRIEND", "style": "background: #ffffff; border:2px solid #ff0000; font: bold; color: #ff0000; font-family:'Verdana';"
              },
  "pester": { "text": "IRRITATE", "style": "background: #ffffff; border:2px solid #ff0000; font: bold; color: #ff0000; font-family:'Verdana';"
            },
  "block": { "text": "IGNORE", "style": "background: #ffffff; border:2px solid #ff0000; font: bold; color: #ff0000; font-family:'Verdana';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Verdana';color:#ffffff;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:center; background:#ffffff;border:2px solid #ff0000;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#f1d6d6; border:2px solid #ff0000; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "i'm still here...",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #EB8E8E;border:2px solid black; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #A42020; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #FFB6B6;  font-size: 14px;font:bold; border:2px solid #8A3232;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: #F9CFCF; border:2px solid #A42020;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#0F731C"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #C97777;border:2px solid black; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #5A1111; color: #F9CFCF; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #E8A4A4;  font-size: 14px;font:bold; border:2px solid #8A3232;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #780000; background: #F9CFCF;font: bold;font-family: 'Courier';selection-background-color:#E5BCBC; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #F9CFCF; border:2px solid #8A3232;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #8A3232; background: #F9CFCF; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #8A3232; font: bold; font-size: 12px; background: #8A3232; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#8A3232",
       "newmsgcolor": "#EB2C2C",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}
