sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    function (BaseController, MessageToast) {
        "use strict";
 
        return BaseController.extend("com.app.adhocwt.controller.ReceivingOfHuByDoor", {
            onInit: function () {
            },
            onRecHuByDoorLiveChange: function () {
                if (this.getView().byId("idRecHuByDoorWhseDoorInput").getValue() == "1234") {
                    this.getView().byId("idRecHuByDoorSecondScrollContainer").setVisible(true);
                    this.getView().byId("idRecHuByDoorFirstScrollContainer").setVisible(false);
                    this.getView().byId("idRecHuByDoorfirstbackbtn").setVisible(true);
                }
                else {
                    MessageToast.show("Please enter valid warehouse number")
                }
 
            },
            onRecHuByDoorWhseDoorfirstBackBtnPress:function(){
                this.getView().byId("idRecHuByDoorFirstScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorSecondScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorfirstbackbtn").setVisible(false);
            },
            onHuListPress:function(){
                this.getView().byId("idRecHuByDoorFirstScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorSecondScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorThirdScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorfirstbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorSecondbackbtn").setVisible(true);
 
            },
            onRecHuByDoorWhseDoorSecondBackBtnPress:function(){
                this.getView().byId("idRecHuByDoorSecondScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorSecondbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorfirstbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorThirdScrollContainer").setVisible(false);
                
            },
            
 
            onNewHuPress:function(){
                this.getView().byId("idRecHuByDoorSecondScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorFourthScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorSecondbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorfirstbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorThirdbackbtn").setVisible(true);
            },
            onRecHuByDoorWhseDoorThirdBackBtnPress:function(){
                this.getView().byId("idRecHuByDoorThirdbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorFourthScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorSecondScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorSecondbackbtn").setVisible(true);
            },
            onNextOrEnterPress:function(){
                this.getView().byId("idRecHuByDoorfourthbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorThirdbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorFifthScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorFourthScrollContainer").setVisible(false);
            },
            onRecHuByDoorWhseDoorfourthBackBtnPress:function(){
                this.getView().byId("idRecHuByDoorfourthbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorThirdbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorFifthScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorFourthScrollContainer").setVisible(true);
            },
            onGrPress:function(){
                this.getView().byId("idRecHuByDoorfourthbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorFifthbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorFifthScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorSixthScrollContainer").setVisible(true);
            },
            onRecHuByDoorWhseDoorFifthBackBtnPress:function(){
                this.getView().byId("idRecHuByDoorfourthbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorFifthbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorFifthScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorSixthScrollContainer").setVisible(false);
            },
            onUnloadPress:function(){
                this.getView().byId("idRecHuByDoorfourthbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorSixthbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorFifthScrollContainer").setVisible(false);
                this.getView().byId("idRecHuByDoorSeventhScrollContainer").setVisible(true);
            },
            onRecHuByDoorWhseDoorSixthBackBtnPress:function(){
                this.getView().byId("idRecHuByDoorfourthbackbtn").setVisible(true);
                this.getView().byId("idRecHuByDoorSixthbackbtn").setVisible(false);
                this.getView().byId("idRecHuByDoorFifthScrollContainer").setVisible(true);
                this.getView().byId("idRecHuByDoorSeventhScrollContainer").setVisible(false);
            }
        });
    }
);
 
 