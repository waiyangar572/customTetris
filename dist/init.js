(()=>{"use strict";initDialogs(),$(document).on("click","#startButton",(()=>{initTetris(),startTetris()})),$(document).on("click","#toKeyBindings",(()=>{toKeyBindings()})),$(document).on("click","#fromKeyToMainMenu",(()=>{$(document).off(".onClickKeyForAny"),toMainMenu()})),toMainMenu()})();