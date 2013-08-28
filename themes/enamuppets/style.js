{"main":
 {"style": "background-repeat: no-repeat; font-family: 'Verdana'; font-size: 14px;",
  "background-image": "$path/ebg2.png",
  "size": [810, 555],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Smuppetchum",
  "close": { "image": "$path/x.gif",
             "loc": [315, 26]},
  "minimize": { "image": "$path/m.gif",
                "loc": [300, 32]},
  "menubar": { "style": "font-family: 'Verdana'; font-size: 14px; color:#4a4a4a" },
  "menu" : { "style": "font-family: 'Verdana'; font-size: 14px; background-color: #FF7800;border:2px solid #1e55ca",
             "menuitem": "margin-right:25px;",
             "selected": "background-color: #1e55ca",
             "loc": [440,30]
           },
  "menus": {"client": {"_name": "HAA HAA",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Memories",
                       "userlist": "Victims",
                       "import": "Import",
                       "reconnect": "Reconnect",
					   "idle": "Idle",
                       "exit": "Exit"},
            "profile": {"_name": "HEE HEE",
                        "switch": "Change",
                        "color": "Colour",
                        "theme": "Theme",
                        "block": "Rivals",
                        "quirks": "Quirks"},
            "help": { "_name": "HOO HOO",
                      "about": "About" },
            "rclickchumlist": {"pester": "Prank",
                               "removechum": "Remove Victim",
                               "blockchum": "Block",
                               "report": "Report",
                               "addchum": "Add Victim",
                               "viewlog": "View Memory",
                               "unblockchum": "Unblock",
                               "banuser": "Ban User",
                               "opuser": "Make OP",
                               "quirksoff": "Quirkless"
                              }
           },
  "chums": { "style": "font-size: 16px; background-image:url($path/chumbg.png); background-color: #7d94e6; background-repeat: no-repeat; font-family: 'Arial'; border: 0px; selection-background-color: #222222; color: black;",
             "loc": [440, 211],
             "size": [289, 275],
              "text": "",
             "userlistcolor": "black",
             "loc": [440, 211],
             "size": [289, 275],
             "moods": {

                 "chummy": { "icon": "$path/chummy.gif", "color": "black" },

                 "rancorous": { "icon": "$path/rancorous.gif", "color": "#CB5500" },

                 "offline": { "icon": "$path/offline.gif", "color": "#4a4a4a"},

			     
                 "pleasant": { "icon": "$path/pleasant.gif", "color": "black" },

                 "distraught": { "icon": "$path/distraught.gif", "color": "black" },

                 "pranky": { "icon": "$path/pranky.gif", "color": "black" },


                 "smooth": { "icon": "$path/smooth.gif", "color": "black" },

                 "mystified": { "icon": "$path/mystified.gif", "color": "black" },

                 "amazed": { "icon": "$path/amazed.gif", "color": "black" },

                 "insolent": { "icon": "$path/insolent.gif", "color": "black" },

                 "bemused": { "icon": "$path/bemused.gif", "color": "black" },


                 "ecstatic": { "icon": "$path/ecstatic.gif", "color": "#CB5500" },

                 "relaxed": { "icon": "$path/relaxed.gif", "color": "#CB5500" },

                 "discontent": { "icon": "$path/discontent.gif", "color": "#CB5500" },

                 "devious": { "icon": "$path/devious.gif", "color": "#CB5500" },

                 "sleek": { "icon": "$path/sleek.gif", "color": "#CB5500" },
			     
                 "detestful": { "icon": "$path/detestful.gif", "color": "#CB5500" },

                 "mirthful": { "icon": "$path/mirthful.gif", "color": "#CB5500" },

                 "manipulative": { "icon": "$path/manipulative.gif", "color": "#CB5500" },

                 "vigorous": { "icon": "$path/vigorous.gif", "color": "#CB5500" },

                 "perky": { "icon": "$path/perky.gif", "color": "#CB5500" },

                 "acceptant": { "icon": "$path/acceptant.gif", "color": "#CB5500" },

                 "protective": { "icon": "$path/protective.png", "color": "#13649A" },

                 "blocked": { "icon": "$path/blocked.gif", "color": "#CB5500" }

             }
           },
  "trollslum": { 
      "style": "background: #FF7800; border:2px solid blue; font-family: 'Verdana'",
      "size": [195, 200],
      "label": { "text": "MEANIES",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-family: 'Verdana';border:0px;" },
      "chumroll": {"style": "border:2px solid blue; background-color: black;color: #A9A9FF;font: bold;font-family: 'Verdanal';selection-background-color:#393939; " }
  },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(130, 230, 80, 0%) ;font:bold; font-family: 'Verdana';" },
                    "handle": { "style": "background: rgba(130, 230, 80, 0%); color:#A9A9FF; font-family:'Verdana'; font-size:14px; text-align:left;",
                                "loc": [0,0],
                                "size": [0, 0] },
                    "colorswatch": { "loc": [0,0],
                                     "size": [0,0],
                                     "text": "" },
                    "currentMood": [1500, 1500]
                  },
  "defaultwindow": { "style": "background: #FF7800; font-family:'Verdana';font:bold;selection-background-color:#919191; " 
                   },
  "addchum":  { "style": "background: rgba(130, 230, 80, 0%); border:0px; color: rgba(0, 0, 0, 0%);",
              "loc": [443,144],
              "size": [284, 60],
                "text": ""
              },
  "pester": { "style": "background:  rgba(130, 230, 80, 0%); border:0px; font: bold; color:  rgba(130, 230, 80, 0%); font-family:'Verdana';",
              "pressed" : "background-image:url($path/pesterhold.png);",
                "loc": [0,0],
                "size": [0, 0],
              "text": ""
            },
  "block": { "style": "background:  rgba(130, 230, 80, 0%); border:2px solid blue; font: bold; color:  rgba(130, 230, 80, 0%); font-family:'Verdana';",
             "loc": [0,0],
             "size": [0, 0],
             "text": ""
           },
  "defaultmood": 0,
  "moodlabel": { "style": "",
				 "loc": [20, 430],
				 "text": ""
			   },
  "moods": [
      { "style": "background-image:url($path/mood1.png); border:0px;", 
		"selected": "background-image:url($path/mood1c.png); border:0px;",
		"loc": [0, 258],
		"size": [100,110],
	   	 "text": "",
		"icon": "",
		"mood": 0
	  },
      { "style": "background-image:url($path/mood2.png); border:0px;", 
		"selected": "background-image:url($path/mood2c.png); border:0px;",
		"loc": [106, 258],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 19
	  },
      { "style": "background-image:url($path/mood3.png); border:0px;", 
		"selected": "background-image:url($path/mood3c.png); border:0px;",
		"loc": [212, 258],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 22
	  },
      { "style": "background-image:url($path/mood4.png); border:0px;", 
		"selected": "background-image:url($path/mood4c.png); border:0px;",
		"loc": [318, 258],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 4
	  },
      { "style": "background-image:url($path/mood5.png); border:0px;", 
		"selected": "background-image:url($path/mood5c.png); border:0px;",
		"loc": [0, 382],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 3
	  },
      { "style": "background-image:url($path/mood6.png); border:0px;", 
		"selected": "background-image:url($path/mood6c.png); border:0px;",
		"loc": [106, 382],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 20
	  },
      { "style": "background-image:url($path/mood7.png); border:0px;", 
		"selected": "background-image:url($path/mood7c.png); border:0px;",
		"loc": [212, 382],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 5
	  },
      { "style": "background-image:url($path/mood8.png); border:0px;", 
		"selected": "background-image:url($path/mood8c.png); border:0px;",
		"loc": [318, 382],
		"size": [100, 110],
	   	 "text": "",
		"icon": "",
		"mood": 1
	  },
      { "style": "border:0px;", 
		"selected": "border:0px;",
		"loc": [0, 0],
		"size": [100, 100],
	   	 "text": "",
		"icon": "",
		"mood": 2
	  }
  ]
 },
 "convo":
 {"style": "background-color: rgba(0, 0, 0, 0%);border-width: 5px; border-image:url($path/convobg.png) 5px; font-family: 'Verdana'",
  "tabstyle": "background-color: #FF7800; font-family: 'Verdana'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(130, 230, 80, 0%); border:0px;",
                 "handle": "border-width: 5px; border-image:url($path/scrollbg.png) 5px; min-height:60px;",
                 "downarrow": "height:17px;border:0px solid blue;", 
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid blue;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 35, "bottom": 35, "left": 32, "right": 20 },
  "size": [480, 348],
  "chumlabel": { "style": " background:  rgba(130, 230, 80, 0%); color: #A9A9FF; border:0px; font-size: 0px;",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 0,
                 "maxheight": 0,
                 "text" : ""
               },
  "textarea": {
      "style": "background-color: #A9A9FF;  background-image: url(); font: bold; font-size: 14px; font-family: 'Verdana'; border:2px solid blue;text-align:center;"
  },
  "input": { "style": "background: #A9A9FF; border:2px solid blue;margin-top:10px; font: bold; font-size: 14px; font-family: 'Verdana'" },
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#FF7800",
      "tabstyle": 0
  },
  "tabwindow" : {
	  "style": "background: #FF7800; font-family: 'Verdana'"
  },
  "text": {
      "beganpester": "began taunting",
      "ceasepester": "ceased taunting",
      "blocked": "blocked",
      "unblocked": "unblocked",
	  "blockedmsg": "did not receive message from",
      "openmemo": "looked at",
      "joinmemo": "answered the memo",
      "closememo": "went away from the memo",
      "kickedmemo": "You have been banned from this memo",
	  "idle": "is now an idle victim"
  },
  "systemMsgColor": "#393939"
 },
 "memos":
 {"style": "background-color: rgba(0,0,0,0); border-width: 5px; border-image:url($path/convobg.png) 5px; font-family: 'Verdana'; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#FF7800",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(130, 230, 80, 0%); border:0px;",
                 "handle": "border-width: 5px; border-image:url($path/scrollbg.png) 5px; min-height:60px;",
                 "downarrow": "height:17px;border:0px;", 
                 "darrowstyle": "image:url();",
                 "uparrow": "height:17px;border:0px;",
                 "uarrowstyle": "image:url();"
               },
  "label": { "text": "Area Taunting: $channel",
             "style": "margin-bottom: 7px; margin-top: 10px; background-color: blue ; background-image:url($path/nothing.png); color: #A9A9FF; border:0px; font-size: 20px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 55,
             "maxheight": 55
           },
  "input": { "style": "background: #A9A9FF; border:2px solid blue;margin-top:5px; margin-right:10px; margin-left:10px; font: bold; font-size: 14px; font-family: 'Verdana'" },
  "textarea": { "style": " background-color: #A9A9FF; background-image:url();  font: bold; font-size: 14px; font-family: 'Verdana'; border:2px solid blue;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid blue; background: #A9A9FF; font-family: 'Verdana';selection-background-color:#393939; font-size: 14px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75, 
                      "style": " border: 2px solid blue; background: #A9A9FF; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Verdana';font:bold;" 
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid blue; font-size: 12px; background: blue; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }, 
            "arrows": { "left": "$path/leftarrow.png", 
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;" 
                      }
          },
  "systemMsgColor": "#393939",
  "op": { "icon": "$path/op.png" }
 }
}