/*! Built with http://stenciljs.com */
OceKanban.loadBundle("7fyfw8mk",["exports"],function(e){var t=window.OceKanban.h,n=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"list_wrapper"},t("div",{class:"list"},t("div",{class:"list_header"},t("h1",{class:"header_title"},this.title),this.note?t("p",{class:"header_desc"},this.note):"",t("div",{class:"header_infos"},this.due?t("div",{class:"header_due"},t("span",{class:"due_item"},"Due ",this.due)):"")),t("div",{class:"list_cards"},t("h2",null,"Commitments (",this.cards.length,")"),this.cards?this.cards.map(function(e){return t("oce-card",{members:e.members,due:e.due,note:e.note||e.title,action:function(){console.log("hello")}})}):""),0!==this.outputs.length?t("oce-output",{outputs:this.outputs}):""))},Object.defineProperty(e,"is",{get:function(){return"oce-bin"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cards:{type:"Any",attr:"cards"},due:{type:String,attr:"due"},note:{type:String,attr:"note"},outputs:{type:"Any",attr:"outputs"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".list_wrapper{width:300px;margin-right:10px;height:100%;box-sizing:border-box;display:inline-block;vertical-align:top;white-space:nowrap}.list{background:#e2e4e6;border-radius:3px;box-sizing:border-box;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-height:100%;position:relative;white-space:normal;box-shadow:0 1px 1px rgba(23,43,77,.2),0 0 .5px 0 rgba(23,43,77,.25);transition:all .3s cubic-bezier(.15,1,.33,1);-webkit-transition:all .3s cubic-bezier(.15,1,.33,1)}h2{font-weight:500;font-size:14px;letter-spacing:.5}.list_header{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;padding:8px 10px;position:relative;min-height:18px}.header_title{font-size:16px;text-align:left;font-weight:500;margin:0;margin-top:5px;text-transform:capitalize;letter-spacing:.5px}.header_desc{font-size:14px;font-weight:300;line-height:20px;margin-top:5px}.header_due{float:left;height:24px;line-height:24px;margin-left:0;background:#c7c7c7;border-radius:3px;padding:0 10px}.header_due .due_item{line-height:24px;font-size:13px;text-decoration:underline;font-weight:500;color:#444}.header_members{float:left;width:24px;height:24px;border-radius:3px;margin-right:5px}.members_item{width:24px;height:24px;border-radius:3px;background:#c7c7c7;display:block}.members_item .item_photo{width:24px;height:24px;border-radius:3px}.header_setName{background:0 0;border:none;border-radius:3px;box-shadow:none;font-weight:700;margin:-3px -5px;height:18px;min-height:18px;padding:3px 5px;resize:none;max-height:16pc;overflow:hidden;word-wrap:break-word;height:24px}.header_setName.isEditing{background:rgba(255,255,255,.8)}.list_cards{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto;margin:0 4px;padding:0 4px;z-index:1;min-height:0;-webkit-box-flex:1;overflow-x:hidden}"},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.render=function(){return t("div",{onClick:this.action,class:"card"},t("span",{class:"card_title"},this.note),t("div",{class:"card_infos"},t("h4",{class:"infos_due"},"Due to ",this.due),t("div",{class:"infos_members"},this.members.map(function(e){return t("span",{class:"members_item"},t("img",{class:"item_photo",src:e.image}))}))))},Object.defineProperty(e,"is",{get:function(){return"oce-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{action:{type:"Any",attr:"action"},due:{type:String,attr:"due"},members:{type:"Any",attr:"members"},note:{type:String,attr:"note"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".card{background:#fff;border-bottom:1px solid #ccc;border-radius:3px;overflow:hidden;position:relative;z-index:10;display:block;-webkit-box-orient:vertical;-webkit-box-direction:normal;cursor:pointer;margin-bottom:6px;max-width:300px;min-height:20px;position:relative;z-index:0;padding:10px}.card:hover{background:#edeff0;border-bottom-color:#d6dacc}.card.dragged{opacity:.5;cursor:move}.card_title{font-size:14px;line-height:20px;clear:both;font-weight:400;margin:0 0 4px;overflow:hidden;word-wrap:break-word;color:#4d4d4d}.card_infos{margin-top:10px}.card_infos .infos_due{color:#adadad;font-weight:500;font-size:12px;letter-spacing:1px;margin:0;float:left;height:20px;line-height:20px}.card_infos .infos_members{float:right}.card_infos .infos_members .members_item{width:20px;height:20px;border-radius:100%;display:inline-block;background:#adadad;margin-left:5px}.card_infos .infos_members .members_item img{width:20px;height:20px;border-radius:100%}"},enumerable:!0,configurable:!0}),e}(),u=function(){function e(){}return e.prototype.render=function(){var e=JSON.parse(this.bins);return t("div",{class:"board_container"},t("div",{class:"board"},e.map(function(e){return t("oce-bin",{cards:e.cards,outputs:e.outputs,due:e.due,title:e.title,note:e.note})})))},Object.defineProperty(e,"is",{get:function(){return"oce-kanban"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{bins:{type:String,attr:"bins"},due:{type:String,attr:"due"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".board_container{position:relative}.board{user-select:none;white-space:nowrap;overflow-x:auto;overflow-y:hidden;position:absolute;right:0;left:0;top:0;margin-bottom:20px}"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){}return e.prototype.render=function(){return t("section",{class:"modal_content"},t("div",{class:"content_info"},t("div",{class:"content_module"},t("div",{class:"module_header"},t("div",{class:"header_labels"},t("div",{class:"labels_due"},t("div",{class:"due"},t("span",{class:"due_item"},"Due ",this.data.due))))))))},Object.defineProperty(e,"is",{get:function(){return"oce-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{data:{type:"Any",attr:"data"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".cardModal{width:500px;box-shadow:0 2px 8px 3px rgba(0,0,0,.3);z-index:9999999999;background-color:#edeff0;padding:0;margin:40px auto;position:relative;border-radius:3px;padding-bottom:20px;outline:0}.modal_content{padding:10px}.content_info{margin-left:40px}.content_info .info_add{color:#8c8c8c;padding:6px 8px;position:relative;user-select:none;display:block;margin:2px 0;border-radius:3px;outline:0;font-size:14px;text-decoration:underline;cursor:pointer}.info_add .add_icon{vertical-align:sub;margin-right:10px}.info_add:hover{background:#d6dadc;color:#4d4d4d}.modal_content .content_header{margin-left:10px;margin-top:10px;background:#edeff0;margin:-10px;padding:20px}.content_header .header_sub{color:#444;font-size:11px;margin-top:-5px;display:block;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px}.header_sub i{text-decoration:underline;font-style:normal}.header_labels{margin-top:10px}.header_labels:after,.header_labels:before{content:\" \";display:table}.header_labels:after{clear:both}.labels_due,.labels_members,.labels_process{float:left;display:block}.labels_members span{vertical-align:super;width:24px;height:24px;display:inline-block}.members{display:inline-block;vertical-align:sub;margin-left:5px}.labels_due h5,.labels_members h5,.labels_process h5{color:#8c8c8c;display:inline-block;font-weight:400;font-size:14px;margin:0 6px 6px 0;letter-spacing:.5px}.labels_due{float:right}.members .members_item{background-color:#d6dadc;border-radius:3px;color:#4d4d4d;display:block;float:left;height:30px;margin:0 4px 4px 0;overflow:hidden;position:relative;width:30px;-ms-user-select:none;user-select:none;z-index:0}.members_item img{width:30px;height:30px;display:block;-webkit-appearance:none;line-height:30px;text-indent:4px;font-size:13px;overflow:hidden;max-width:30px;max-height:30px;text-overflow:ellipsis}.members_item i{text-align:center;width:30px;height:30px;display:block;line-height:36px;cursor:pointer}.members_item i:hover{background:#ced1d2}.process .process_item{background-color:#b6bbbf;border-radius:3px;color:#fff;display:block;margin-right:3px;max-width:100%;overflow:hidden;padding:3px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;border-radius:3px;-moz-box-sizing:border-box;box-sizing:border-box;display:block;float:left;font-size:9pt;font-weight:600;height:30px;line-height:30px;margin:0 4px 4px 0;min-width:40px;padding:0 8px;width:auto}.due .due_item{background-color:#e2e4e6;border-radius:3px;color:#8c8c8c;cursor:default;display:block;height:20px;line-height:20px;margin:0 4px 4px 0;max-width:100%;overflow:hidden;padding:5px 10px;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px;text-decoration:underline}.activities_list .list_item{border-bottom:1px solid #e2e4e6;margin-left:33px;min-height:30px;padding:10px 0;position:relative}.list_item{margin:0 6px 0 0;word-wrap:break-word;font-size:14px;color:#4d4d4d}.list_item .members{vertical-align:middle}.list_item span{font-weight:600}.list_item .item_meta{color:#8c8c8c;font-size:12px;margin-top:5px;margin-left:10px;font-weight:300}.item_meta span{font-weight:300;text-decoration:underline;cursor:pointer}h5{font-size:12px;font-weight:300;line-height:1.25em;position:relative;margin:0 0 0 10px;color:#4d4d4d}.content_module{clear:both;margin-bottom:20px;position:relative}.content_actions .content_module{margin:0}.action_list button{max-width:100%!important;margin:0;padding:0}.action_list .popup{top:-120px;left:40px}.content_module .content_icon{left:-38px;position:absolute;top:8px}.content_icon svg{stroke:2}.log_item select{background:#fff;width:149px;padding:5px;font-size:16px;line-height:1;border:0;border-radius:3px 0 0 3px;height:40px;box-shadow:0 1px 2px rgba(0,0,0,.23);-webkit-appearance:none;font-size:14px;text-indent:5px;color:#717171;font-weight:600}.log_item textarea{margin-top:10px}.log_item button{float:right;width:120px;margin-bottom:20px}select.type{border-radius:0 3px 3px 0;margin-left:0}.log_item input{background:#fff;width:80px;line-height:1;border:0;border-radius:0;height:38px;margin-left:0;box-shadow:0 1px 2px rgba(0,0,0,.23);-webkit-appearance:none;font-size:14px;text-indent:5px;color:#4d4d4d}select{outline:0}.content_info{margin:0;min-height:20px;padding:8px 10px 9pt;position:relative;z-index:0}.content_actions{float:none;padding:0;width:100%;margin-top:40px}.action_list button{background:-webkit-linear-gradient(top,#fff 0,#f8f9f9 100%);background:linear-gradient(to bottom,#fff 0,#f8f9f9 100%);-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #e2e4e6;border-bottom-color:#cdd2d4;cursor:pointer;display:block;font-weight:700;height:34px;margin-top:6px;max-width:300px;padding:7px;position:relative;user-select:none;white-space:nowrap;border-radius:3px;text-decoration:none;outline:0;width:100%;font-size:14px}.content_action h5{margin-left:0}.popup{background:#fff;border-radius:3px;border:1px solid #d6dadc;border-bottom-color:#c4c9cc;box-shadow:0 1px 6px rgba(0,0,0,.15);position:absolute;right:0;width:300px;z-index:70;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);padding:10px}.popup.members{left:25px;top:40px}.popup .popup_header h5{-moz-box-sizing:border-box;box-sizing:border-box;color:#8c8c8c;display:block;line-height:36px;border-bottom:1px solid #d6dadc;overflow:hidden;padding:0 2pc;position:relative;text-overflow:ellipsis;white-space:nowrap;z-index:1;text-align:center;font-weight:400;font-size:14px;letter-spacing:.5px;margin-bottom:10px}.popup_header .icon_delete{float:right;margin-top:-40px;position:relative;z-index:10}.activities_list .list_item .members{position:absolute;left:-38px;top:12px}.item_click{position:absolute;background:0 0;top:0;bottom:0;left:0;right:0;display:block;z-index:10}.members_name{font-size:14px;font-weight:600;letter-spacing:.5px}.popup.hidden{display:none}.popup_content .list_item{position:relative;z-index:10;margin:0;margin-bottom:10px;height:40px;border-radius:2px;line-height:40px;padding-left:5px}.popup_content .list_item .members{margin-left:0}.popup_content .list_item .members .members_item{margin:0;margin-right:10px}.popup_content .list_item:hover{background:rgba(0,0,0,.05)}.popup_content .content_process{background:#fff;width:100%;font-size:16px;line-height:1;border:0;border-radius:3px;height:50px;font-size:14px;text-indent:5px;color:#717171;font-weight:600;border:1px solid #e2e4e6;border-bottom-color:#cdd2d4;background:-webkit-linear-gradient(top,#fff 0,#f8f9f9 100%);background:linear-gradient(to bottom,#fff 0,#f8f9f9 100%);-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #e2e4e6;border-bottom-color:#cdd2d4;cursor:pointer;display:block;font-weight:700;margin-top:6px;max-width:300px;padding:7px;position:relative;user-select:none;white-space:nowrap}.content_description h4{margin-left:0;font-size:16px;font-weight:500;color:#444}.content_description.hidden{display:none}.description_text{margin-left:40px}.description_text.hidden{display:none}.icon_delete{display:inline-block;color:#999;background-repeat:no-repeat;background-size:cover;cursor:pointer;vertical-align:bottom;margin-left:10px}.item_desc{margin-left:10px}.item_desc .desc{font-weight:300;margin-top:3px}.content_log{margin-top:10px}.header_note_input{font-size:18px;margin:0 0 9px;color:#3c3c3c;position:relative;font-weight:500;font-family:'Fira sans';padding:5px;border-radius:3px;border:0;border:1px solid #999;margin-left:-5px;display:block;opacity:1;width:98%}.header_note_input.hidden{opacity:0}.content_header .title{position:relative;display:block;color:#3c3c3c}.members_active{width:20px;height:20px;background:green;display:block;border-radius:3px;position:absolute!important;left:0!important;width:18px!important;height:18px!important;left:17px!important;top:17px!important}.members_active span{text-align:center;display:block;width:18px;height:18px;line-height:24px}.member_provider{margin-right:10px}.item_date{margin-top:10px}.item_date .full{width:100%;border-radius:3px;font-size:14px;text-indent:5px;color:#4d4d4d}.back svg{vertical-align:middle}.back{font-size:14px;background:#333c44;margin-bottom:10px;display:inline-block;border-radius:3px;color:#fff;cursor:pointer}\@media screen and (max-width:600px){.cardModal{width:100%;margin:0;border-radius:0}}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"list_outputs"},t("h2",null,"Outputs (",this.outputs.length,")"),this.outputs.map(function(e){return t("div",{class:"outputs_card"},t("span",null,e.resourceClassifiedAs.name))}))},Object.defineProperty(e,"is",{get:function(){return"oce-output"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{outputs:{type:"Any",attr:"outputs"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".list_outputs{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto;margin:0 4px;padding:0 4px;z-index:1;min-height:0;-webkit-box-flex:1;overflow-x:hidden}.list_outputs h2{font-weight:500;font-size:14px;letter-spacing:.5}.outputs_card{background:#333c44;border-radius:3px;overflow:hidden;padding:6px 6px 2px 8px;position:relative;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;-webkit-box-orient:vertical;-webkit-box-direction:normal;cursor:pointer;margin-bottom:6px;max-width:300px;min-height:20px;position:relative;z-index:0;padding:10px}.outputs_card span{color:#fff;font-size:14px;font-weight:500}"},enumerable:!0,configurable:!0}),e}();e.OceBin=n,e.OceCard=r,e.OceKanban=u,e.OceModal=o,e.OceOutput=i,Object.defineProperty(e,"__esModule",{value:!0})});