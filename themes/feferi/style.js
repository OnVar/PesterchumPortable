{"main":
 {"style": "background-repeat: no-repeat;",
  "background-image": "$path/fefbg1.gif",
  "size": [420, 325],
  "icon": "$path/feferichum.png",
  "newmsgicon": "$path/feferichum2.png",
  "windowtitle": "Feferichum",
  "close": { "image": "$path/x.png",
             "loc": [0,0]},
  "minimize": { "image": "$path/m.png",
                "loc": [0,0]},
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 12px; color: white;" },
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 12px; color: #826567; background-color: #f6f1ed;border:2px solid #ff6594",
             "menuitem": "margin-right:15px;",
             "selected": "background-color: #d4c1c3;",
             "loc": [212,143]
           },
  "sounds": { "alertsound": "$path/fef2.wav",
                          "memosound": "$path/fef1.wav",
                          "ceasesound": "$path/fef3.wav" },
  "menus": {"client": {"_name": "1",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Pesterlogs",
                       "randen": "Random Encounter",
                       "userlist": "Userlist",
                       "addgroup": "Add Group",
                       "import": "Import",
                       "reconnect": "Reconnect",
                                           "idle": "Idle",
                       "exit": "-EXIT"},
            "profile": {"_name": "2",
                        "switch": "Switch",
                        "color": "Color",
                        "theme": "Theme",
                        "block": "Jerks",
                        "quirks": "Quirks"},
            "help": { "_name": "3",
                      "about": "About",
                      "help": "Help",
                      "calsprite": "Calsprite",
                      "nickserv": "Nickserv" },
            "rclickchumlist": {"pester": "PESTER",
                               "removechum": "REMOVE CHUM",
                               "report": "REPORT",
                               "blockchum": "BLOCK",
                               "addchum": "ADD CHUM",
                               "viewlog": "VIEW PESTERLOG",
                               "unblockchum": "UNBLOCK",
                               "removegroup": "REMOVE GROUP",
                               "renamegroup": "RENAME GROUP",
                               "movechum": "MOVE TO",
                               "banuser": "BAN USER",
                               "opuser": "MAKE OP",
                               "voiceuser": "GIVE VOICE",
                               "quirksoff": "QUIRKS OFF",
                               "invitechum": "INVITE CHUM"
                              }
           },
  "chums": { "style": "border:0px; background-image:url($path/chumbg.png); background-color: #f6f1ed; background-repeat: repeat-7; color: #77003c;font: bold;font-family: 'Arial';selection-background-color:#646464; ",
             "loc": [217, 47],
             "size": [159, 86],
             "userlistcolor": "#826567",
             "moods": {

                 "chummy": { "icon": "$path/chummy.png", "color": "#826567" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#77003c" },

                 "offline": { "icon": "$path/offline.png", "color": "#bebebe"},


                 "pleasant": { "icon": "$path/pleasant.png", "color": "#826567" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#826567" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#826567" },


                 "smooth": { "icon": "$path/pccool.png", "color": "#826567" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#826567" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#826567" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#826567" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#826567" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#77003c" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#77003c" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#77003c" },

                 "devious": { "icon": "$path/devious.png", "color": "#77003c" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#77003c" },

                 "detestful": { "icon": "$path/detestful.png", "color": "#77003c" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#77003c" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#77003c" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#77003c" },

                 "perky": { "icon": "$path/perky.png", "color": "#77003c" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#77003c" },

                 "protective": { "icon": "$path/protective.png", "color": "#a5c424" },

                 "destructive": { "icon": "$path/destructive.png", "color": "#009900" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }

             }
           },

  "trollslum": {
      "style": "background: #ff6594; border:2px solid #ff0060; font-family: 'Arial';color:#826567",
      "size": [195, 200],
      "label": { "text": "Clam up",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-family: 'Arial';border:0px;" },

      "chumroll": {"style": "border:0px; background-image:url($path/chumbg.png); background-color: #f6f1ed; background-repeat: repeat; color: #826567;font: bold;font-family: 'Arial';selection-background-color:#646464; " }
  },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(0,0,0,0);font:bold; font-family: 'Arial';" },
                    "handle": { "style": "background: rgba(0,0,0,0); padding: 3px; color:rgba(0,0,0,0); font-family:'Arial'; font:bold; text-align:center;",
                                "loc": [0,0],
                                "size": [0, 0] },
                    "colorswatch": { "loc": [336,143],
                                     "size": [15,15],
                                     "text": "" },
                    "currentMood": [1000, 0]
                  },
  "defaultwindow": { "style": "background: #f6f1ed; font-family:'Arial';font:bold, ;selection-background-color:#919191; "
                  },
  "addchum":  { "style": "background-image:url($path/new1.png); border:0px;",
                "pressed" : "background-image:url($path/new2.png);",
                "loc": [376,99],
                "size": [10, 24],
                "text": ""
              },
  "pester": { "style": "background-image:url($path/pester1.png); border:0px;",
              "pressed" : "background-image:url($path/pester2.png);",
                "loc": [376,74],
                "size": [10, 24],
              "text": ""
            },
  "block": { "style": "background-image:url($path/block1.png); border:0px;",
             "pressed" : "background-image:url($path/block2.png);",
             "loc": [376,50],
             "size": [10, 24],
             "text": ""
           },
  "defaultmood": 20,
  "moodlabel": { "style": "",
                                 "loc": [0,0],
                                 "text": ""
                           },
  "moods": [
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%)826567;",
                "loc": [361, 381],
                "size": [35, 33],
            "text": "",
                "icon": "$path/chummy.png",
                "mood": 0
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [395, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/pleasant.png",
                "mood": 3
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [429, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/distraught.png",
                "mood": 4
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [463, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/pranky.png",
                "mood": 5
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [497, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/smooth.png",
                "mood": 6
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [531, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/amazed.png",
                "mood": 20
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [565, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/mystified.png",
                "mood": 19
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [599, 381],
                "size": [35, 33],
                "text": "",
                "icon": "$path/insolent.png",
                "mood": 21
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [361, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/bemused.png",
                "mood": 22
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [395, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/rancorous.png",
                "mood": 1
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [429, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/acceptant.png",
                "mood": 17
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [463, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/discontent.png",
                "mood": 9
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [497, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/sleek.png",
                "mood": 11
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [531, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/perky.png",
                "mood": 16
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [565, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/relaxed.png",
                "mood": 8
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [599, 413],
                "size": [35, 33],
                "text": "",
                "icon": "$path/devious.png",
                "mood": 10
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [361, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/manipulative.png",
                "mood": 14
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [395, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/vigorous.png",
                "mood": 15
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [429, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/mirthful.png",
                "mood": 13
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [463, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/detestful.png",
                "mood": 12
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [497, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/ecstatic.png",
                "mood": 7
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [531, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/protective.png",
                "mood": 18
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [565, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/destructive.png",
                "mood": 23
          },
      { "style": "background: rgba(0,0,0,0%); border:0px; color: rgba(0,0,0,0%);",
                "selected": "background-image:url($path/moodcheck.png); border:0px; color: rgba(0,0,0,0%);",
                "loc": [599, 447],
                "size": [35, 33],
                "text": "",
                "icon": "$path/offline.png",
                "mood": 2
          }
  ]
 },
 "convo":
 {"style": "background: #f6f1ed ;border-width: 5px; border-image:url($path/cuttle3.png); font-family: 'Arial'",
  "tabstyle": "background-color: #f21515; font-family: 'Arial'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: #958383; border:0px;",
                 "handle": "background-color:#b3a3a3;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #ff6594;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #ff6594;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [500, 325],
  "chumlabel": { "style": "margin-bottom: 7px; margin-top: 10px; background:  rgba(0,0,0,0); color: #6f5149; border:0px; font-size: 16px;",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : "---$handle---E"
               },
  "textarea": {
      "style": "background: white;  font-size: 14px; border:2px solid #866b6b;text-align:center; margin-right:10px; margin-left:10px; margin-bottom:5px;"
  },
  "input": {
      "style": "background: white; border:2px solid #866b6b; margin-right:10px; margin-left:10px; font-size: 14px;"
  },
"tabwindow": {
		"style": "background:#f6f1ed; border-width: 0px;" },
  "tabs": {
      "style": "background-color: #6f5149;font-family: 'Arial';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#f6f1ed;",
      "newmsgcolor": "white",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "began pestering",
      "ceasepester": "ceased pestering",
      "blocked": "blocked",
      "unblocked": "unblocked",
          "blockedmsg": "did not receive message from",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to memo",
      "closememo": "ceased responding to memo",
      "kickedmemo": "You have been banned from this memo!",
          "idle": "is now an idle chum!"
  },
  "systemMsgColor": "#646464"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: rgba(0,0,0,0); background-image:url($path/cuttle3.png); background-repeat: no-repeat; border:0px; font-family: 'Arial'; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "background-color: #6f5149; font-family: 'Arial';font:bold;font-size:12px;min-height:25px;  ",
      "selectedstyle": "border:0px;background-color:#f21515;",
      "newmsgcolor": "white",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: #958383; border:0px;",
                 "handle": "background-color:#b3a3a3;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #c48a00;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #b3a3a3;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 7px; margin-top: 10px; background:  rgba(255, 255, 0, 0%); color: #ff0060; border:0px;font-size: 16px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: white; border:2px solid #ff6594;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 14px;" },
  "textarea": { "style": "background: white;  font-size: 14px; border:2px solid #ff6594; text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #ff6594; background: white; font-family: 'Arial';selection-background-color:#646464; font-size: 14px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": " border: 2px solid #ff6594; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;"
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #ff6594; font-size: 12px; background: #ffa2be; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" },
            "arrows": { "left": "$path/leftarrow.png",
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;"
                      }
          },
  "systemMsgColor": "#646464",
  "op": { "icon": "$path/life.png" },
"halfop": { "icon": "$path/hlife.png" },
"founder": { "icon": "$path/cttl.png" },
"admin": { "icon": "$path/admin.png" },
  "voice": { "icon": "$path/voice.png" }
 }
}
