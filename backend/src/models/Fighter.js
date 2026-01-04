import mongoose from "mongoose";

const fighterSchema = new mongoose.Schema({
    Fighter: {
        type: String,
        required: true,
        trim: true
    },
    Nickname: {
        type: String,
        trim: true
    },
    Nationality: {
        type: String,
        required: true,
        lowercase: true
    },
    Weight: {
        type: String,
        required: true
    },
    Age: {
        type: Date, 
        required: true
    },
    Height: {
        type: String,
        required: true
    },
    Record: {
        type: String,
        required: true
    },
    PeakRank: {
        type: String,
        default: "Unranked",
        required: true
    },
    LastFight: {
        type: String,
        required: true
    },
    LastFightDate: {
        type: Date,
        required: true
    },
    RetiredOrActive: {
        type: String,
        enum: ["active", "retired"],
        default: "active"
    }
});

const Fighter = mongoose.model("Fighter", fighterSchema);

export default Fighter;


//   {
//     "Fighter": "Alexandre Pantoja",
//     "Nationality": "brazil",
//     "Weight": "fly weight",
//     "Age": "4/16/1990",
//     "Height": "5' 5",
//     "Record": "29-5-0",
//     "PeakRank": "champ",
//     "LastFight": "UFC 310: Pantoja vs. Asakura",
//     "LastFightDate": "12/7/2024",
//     "LastOpponent": "Kai Asakura",
//     "Nickname": "The Cannibal",
//     "DebutDate": "1/28/2017",
//     "DebutCard": "UFC Fight Night: Shevchenko vs. Pena",
//     "RetiredOrActive": "active"
//   },