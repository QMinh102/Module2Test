import {LoverManagement} from "./LoverManagement";
import {Lover} from "./Lover";

let LoverManager = new LoverManagement();
let menuInput = require('readline-sync');

mainMenu();

function mainMenu() {
    let userSelect = -1;
    do {
        console.log(`
        ---Welcome to love management---
        The app for the loneliest of man
        1. Display Lover
        2. Searching Lover
        3. Add New Lover 
        4. Edit Lover Information
        5. Delete Lover Information
        6. Exit Program
        `)
        userSelect = +menuInput.question(`Enter your choice: `);
        switch (userSelect) {
            case 1:
                displayLover();
                break;
            case 2:
                searchingLover();
                break;
            case 3:
                addNewLover();
                break;
            case 4:
                editLoverInformation();
                break;
            case 5:
                deleteLoverInformation();
        }
    }
    while (userSelect != 6);
}

function displayLover() {
    let pageIndex = 1;
    let userSelect = -1;

    do {
        if (pageIndex === 1) {
            do {
                LoverManager.displayAllLover(1);
                console.log(`
    --- Displaying All Lover ---
    Press 1 to go the next page
    Press 2 to exit to the menu
    Press 3 to exit the program
    `)
                userSelect = +menuInput.question(`Enter your choice: `);
                switch (userSelect) {
                    case 1:
                        pageIndex++;
                        break;
                    case 2:
                        mainMenu();
                        break;
                }
            } while (userSelect != 3);
        } else if (pageIndex > 1) {
            do {
                LoverManager.displayAllLover(pageIndex);
                console.log(`
    --- Displaying All Lover ---
    Press 0 to go back to the last page
    Press 1 to go the next page
    Press 2 to exit to the menu
    Press 3 to exit the program
    `)
                userSelect = +menuInput.question(`Enter your choice: `);
                switch (userSelect) {
                    case 0:
                        pageIndex--;
                        break;
                    case 1:
                        pageIndex++;
                        break;
                    case 2:
                        mainMenu();
                        break;
                }
            } while (userSelect != 3);
        }
    } while (userSelect != 3);
}

function searchingLover() {
    let stopCounter = 0;
    do {
        console.log(`
    --- Searching for Lover ---
    To search for your lover, please enter according to the prompt below.
    To exit, press -1.
    `)
        let userFindingLoverNameInput = ``;
        userFindingLoverNameInput = menuInput.question(`Enter the name or character of your Lover's Name:`);
        if (userFindingLoverNameInput === `-1`) {
            stopCounter = -1;
            break;
        } else {
            LoverManager.searchingLover(userFindingLoverNameInput);
        }
    } while (stopCounter != -1);
}

function addNewLover() {
    let stopCounter = 0;
    do {
        console.log(`
    --- Please enter the information of your lover ---
    To create a new lover, please enter according to the prompt below.
    To exit, press -1.
    `)
        let userLoverID: string = ``;
        userLoverID = menuInput.question(`Enter an ID for your lover:`);
        if (userLoverID === `-1`) {
            stopCounter = -1;
            break;
        }

        let userLoverName: string = ``;
        userLoverName = menuInput.question(`Enter the name of your lover:`);
        if (userLoverName === `-1`) {
            stopCounter = -1;
            break;
        }

        console.log(`
    --- Choose a zodiac sign ---
    Aquarius
    Pisces
    Aries
    Taurus
    Gemini
    Cancer
    Leo
    Virgo
    Libra
    Scorpius
    Sagittarius 
    Capricorn 
    `)

        let userLoverZodiac: string = ``;
        userLoverZodiac = menuInput.question(`Enter your lover's zodiac from the list above:`);
        if (userLoverZodiac === `-1`) {
            stopCounter = -1;
            break;
        }

        let userLoverHomeTown: string = ``;
        userLoverHomeTown = menuInput.question(`Enter your lover's hometown:`);
        if (userLoverHomeTown === `-1`) {
            stopCounter = -1;
            break;
        }

        let userLoverBirthYear: number = 0;
        userLoverBirthYear = menuInput.question(`Enter your lover's birth year:`);
        if (userLoverBirthYear === -1) {
            stopCounter = -1;
            break;
        }

        let userLoverHobby: string = ``;
        userLoverHobby = menuInput.question(`Enter your lover's hobby:`)
        if (userLoverHobby === `-1`) {
            stopCounter = -1;
            break;
        }

        let addingLover = new Lover(userLoverID, userLoverName, userLoverZodiac, userLoverHomeTown, userLoverBirthYear, userLoverHobby)
        LoverManager.addNewLover(addingLover);

    } while (stopCounter != -1);
}

function editLoverInformation() {
    let stopCounter = 0;
    do {
        console.log(`
    --- Edit Lover Information ---
    To edit your lover information, please enter according to the prompt below.
    To exit, press -1.
    `)
        let userFindingLoverIDInput = ``;
        userFindingLoverIDInput += menuInput.question(`Enter ID of your lover`);
        if (userFindingLoverIDInput === `-1`) {
            stopCounter = -1;
            break;
        }
        for (let indexingArray = 0; indexingArray < LoverManager.displayAll().length; indexingArray++) {
            if (userFindingLoverIDInput === (LoverManager.displayAll()[indexingArray]).getLoverID()) {
                let userEditLoverName: string = ``;
                if (userEditLoverName === `-1`) {
                    stopCounter = -1;
                    break;
                }
                userEditLoverName = menuInput.question(`Enter the name of your lover`);
                if (userEditLoverName === `-1`) {
                    stopCounter = -1;
                    break;
                }
                console.log(`
    --- Choose a zodiac sign ---
    Aquarius
    Pisces
    Aries
    Taurus
    Gemini
    Cancer
    Leo
    Virgo
    Libra
    Scorpius
    Sagittarius 
    Capricorn 
    `)
                let userEditLoverZodiac: string = ``;
                userEditLoverZodiac = menuInput.question(`Enter your lover's zodiac from the list above:`);
                if (userEditLoverZodiac === `-1`) {
                    stopCounter = -1;
                    break;
                }

                let userEditLoverHomeTown: string = ``;
                userEditLoverHomeTown = menuInput.question(`Enter your lover's hometown:`);
                if (userEditLoverHomeTown === `-1`) {
                    stopCounter = -1;
                    break;
                }

                let userEditLoverBirthYear: number = 0;
                userEditLoverBirthYear = menuInput.question(`Enter your lover's birth year:`);
                if (userEditLoverBirthYear === -1) {
                    stopCounter = -1;
                    break;
                }

                let userEditLoverHobby: string = ``;
                userEditLoverHobby = menuInput.question(`Enter your lover's hobby:`)
                if (userEditLoverHobby === `-1`) {
                    stopCounter = -1;
                    break;
                }

                let editLover = new Lover(userFindingLoverIDInput, userEditLoverName, userEditLoverZodiac, userEditLoverHomeTown, userEditLoverBirthYear, userEditLoverHobby)
                LoverManager.editLover(editLover);
            }
        }
    }
    while (stopCounter != -1) ;
}

function deleteLoverInformation() {
    let stopCounter = 0;
    do {
        console.log(`
    --- Deleting Lover ---
    To delete your lover, please enter according to the prompt below.
    To exit, press -1.
    `)
        let userFindingLoverIDInput = ``;
        userFindingLoverIDInput = menuInput.question(`Enter the ID of your Lover:`);
        if (userFindingLoverIDInput === `-1`) {
            stopCounter = -1;
            break;
        }

        LoverManager.deleteLover(userFindingLoverIDInput);
    } while (stopCounter != -1);
}