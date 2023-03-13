import {Lover} from "./Lover";

export class LoverManagement {
    private loverManager: Array<Lover> = [];

    constructor() {
    }

    displayAll(): Array<Lover> {
        return this.loverManager;
    }

    displayAllLover(IndexDisplayCounter: number) {
        if (this.loverManager.length === 0) {
            return `No Data`;
        } else {
            for (let indexingArray = 0; indexingArray < this.loverManager.length; indexingArray++) {
                if (indexingArray - 1 >= IndexDisplayCounter * 5) {

                } else {
                    console.log(this.loverManager[indexingArray]);
                }
            }
        }
    }

    searchingLover(loverNameInput: string) {
        let foundStatus = false;
        if (this.loverManager.length === 0) {

        } else {
            for (let indexingArray = 0; indexingArray < this.loverManager.length; indexingArray++) {
                if (loverNameInput === (this.loverManager[indexingArray].getLoverName()).substring(0, loverNameInput.length)) {
                    console.log(this.loverManager[indexingArray]);
                    foundStatus = true;
                } else {

                }
            }
        }
        if (foundStatus === true) {
            console.log(`Successfully Search`);
        } else {
            console.log(`No Data`);
        }
    }

    addNewLover(Lover: Lover) {
        this.loverManager.push(Lover)
        console.log(`Lover Successfully Added`)
    }

    editLover(Lover: Lover) {
        let editStatus = false;
        if (this.loverManager.length === 0) {

        } else {
            for (let indexingArray = 0; indexingArray < this.loverManager.length; indexingArray++) {
                if (indexingArray === 0) {
                    this.loverManager.splice(0, 1);
                    this.loverManager.splice(0, 0, Lover);
                    editStatus = true;
                } else {
                    this.loverManager.splice(indexingArray, 1);
                    this.loverManager.splice(indexingArray, 0, Lover);
                    editStatus = true;
                }
            }
        }
        if (editStatus === true) {
            console.log(`Lover Successfully Edited`);
        } else {
            console.log(`No Lover Data, Please Update Lover Data First`);
        }
    }

    deleteLover(LoverID: string) {
        let deleteStatus = false;
        if (this.loverManager.length === 0) {

        } else {
            for (let indexingArray = 0; indexingArray < this.loverManager.length; indexingArray++) {
                if (LoverID === this.loverManager[indexingArray].getLoverID()) {
                    if (indexingArray === 0) {
                        this.loverManager.splice(0, 1);
                        deleteStatus = true;
                    } else {
                        this.loverManager.splice(indexingArray, 1);
                        deleteStatus = true;
                    }
                } else {

                }
            }
        }
        if (deleteStatus === true) {
            console.log(`Lover Successfully Deleted`);
        } else {
            console.log(`Lover Data Doesn't Exists For Deletion`);
        }
    }
}
