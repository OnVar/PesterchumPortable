{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/pyralweep.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Anti-chum",
  "menu" : { "style": "font-family: 'Verdana'; font: bold; font-size: 14px; background-color: #936db2;border:2px solid #6a15b2" },
  "menubar": { "style": "font-family: 'Verdana'; font:bold; font-size: 14px; color:#003bff; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [262, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [244, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #936db2; font-family:'Verdana';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #6a15b2; background-color: #936db2;color: #000000;font: bold;font-size:14px;font-family: 'Verdana';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#F20000" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#003bff" },

                 "offline": { "icon": "$path/offline.png", "color": "#6a15b2"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#F20000" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#F20000" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#F20000" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#F20000" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#F20000" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#F20000" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#F20000" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#F20000" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#003bff" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#003bff" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#003bff" },

                 "devious": { "icon": "$path/devious.png", "color": "#003bff" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#003bff" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#003bff" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#003bff" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#003bff" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#003bff" },

                 "perky": { "icon": "$path/perky.png", "color": "#003bff" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#003bff" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: #F20000;font:bold; font-family: 'Verdana';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:#003bff; font-family:'Verdana'; font:bold; text-align:left; border:2px solid #6a15b2;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid #6a15b2; font: bold; color: #936db2; font-family:'Verdana';"
              },
  "pester": { "style": "background: black; border:2px solid #6a15b2; font: bold; color: #936db2; font-family:'Verdana';"
            },
  "block": { "style": "background: black; border:2px solid #6a15b2; font: bold; color: #936db2; font-family:'Verdana';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Verdana';color:#F20000;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:center; background:#936db2;border:2px solid black;color: black; font-family:'Verdana'; font:bold; padding-left:3px;", 
		"selected": "text-align:center; background:#6a15b2; border:2px solid #936db2; color: black; font-family:'Verdana'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "I'M INVISIBLE!",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo":
 {"style": "background-color: #f2f2f2;background-image:url($path/convobg.png);background-repeat: no-repeat; border:2px solid black; font-family: 'Courier'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: white; border:2px solid #000000;",
                 "handle": "background-color:#000000;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #000000;", 
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #000000;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [500, 325],
  "chumlabel": { "style": "margin-bottom: 21px;background: rgb(256, 256, 256); color: white; border:0px; font-size: 14px;font-family: 'Courier'",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : ":: $handle ::"
               },
  "textarea": {
      "style": "background: white;  font-size: 14px;font:bold; border:2px solid #000000;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
  },
  "input": {
      "style": "background: white; border:2px solid #000000;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;font-family: 'Courier'"
  },
  "tabwindow" : {
	  "style": "background-color:#f2f2f2;border:0px"
  },
  "tabs": {
      "style": "background-color: #f2f2f2; font-family: 'Courier';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#f2f2f2;border-top:2px solid black; border-left:2px solid black;border-right:2px solid black; border-top-left-radius: 4px; border-top-right-radius: 4px;",
      "newmsgcolor": "#fdb302",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "began trolling",
      "ceasepester": "gave up trolling",
      "blocked": "blocked",
      "unblocked": "unblocked",
	  "blockedmsg": "did not receive message from",
      "openmemo": "began trolling the memo",
      "joinmemo": "is being trolled",
      "closememo": "got bored of this shit",
      "kickedmemo": "You have been banned from this memo!",
	  "idle": "went the fuck to sleep"
  },
  "systemMsgColor": "#646464"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: #F20000; background-image:url($path/convobg.png); background-repeat: no-repeat; border:2px solid black; font-family: 'Courier'; font: bold; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#6a15b2",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(255, 255, 0, 0%); border:0px;",
                 "handle": "background-color:#000000;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #000000;", 
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #000000;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Now typing in: $channel",
             "style": "margin-bottom: 21px;background: rgb(242, 0, 0); color: white; border:0px; font-size: 14px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: white; border:2px solid #000000;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "textarea": { "style": "background: white;  font-size: 14px;font:bold; border:2px solid #000000;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #000000; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75, 
                      "style": " border: 2px solid black; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;" 
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #000000; font: bold; font-size: 12px; background: #003bff; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }, 
            "arrows": { "left": "$path/leftarrow.png", 
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;" 
                      }
          },
  "systemMsgColor": "#646464",
  "op": { "icon": "$path/op.png" }
 }
}

