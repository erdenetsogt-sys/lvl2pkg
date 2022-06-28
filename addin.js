const threadSectionDOM = document.querySelector(".thread-section");
const threadSection2DOM = document.querySelector("#single-thread-select");
const threadSection3DOM = document.querySelector("#double-thread-select");
const formDOM = document.querySelector(".form-section");
const inputUserDOM = document.getElementById("inputUser");
const inputLayer1sDOM = document.getElementById("single-thread-select");
const inputLayer2sDOM = document.getElementById("double-thread-select");
// const inputLayer3DOM = document.getElementById("inputLayer3");
const inputWritingDateDOM = document.getElementById("inputDate");
const inputInitiatorDOM = document.getElementById("inputInitiator");
const inputHotelCostDOM = document.getElementById("inputHotelCost");
const inputHotelStayDaysDOM = document.getElementById("inputHotelStayDays");
const inputHotelPlaceDOM = document.getElementById("inputHotelPlace");
const inputLengthBetweenFloorsDOM = document.getElementById("inputLengthBetweenFloors");
const inputTotalCableLengthDOM = document.getElementById("inputTotalCableLength");
const inputLattDOM = document.getElementById("inputLatt");
const inputLongtDOM = document.getElementById("inputLongt");
const inputNiitOrtsDOM = document.getElementById("inputNiitOrts");
const inputFloorDOM = document.getElementById("inputFloor");
const inputFamilyDOM = document.getElementById("inputFamily");
const inputEmployeeNumberDOM = document.getElementById("inputEmployeeNumber");
const inputEmployeeCostDOM = document.getElementById("inputEmployeeCost");
const inputCarTypeDOM = document.getElementById("inputCarType");
const inputRideCostDOM = document.getElementById("inputRideCost");
const inputRideDurationDOM = document.getElementById("inputRideDuration");
let inputText = "ss";
var globalTotalSum = 0;
var globalTotalNum = 0;

const getAllResults = async() => {
    try {
        let allResult = await axios.get("/api/v1/result");
        let { data } = allResult;
        console.log(data);
        allResult = data
            .map((result) => {
                const {
                    user,
                    initiator,
                    layer1,
                    layer2,
                    layer3,
                    writingDate
                } = result;
                return `
        <div class="single-thread">
        <h3>Мэдээлэл оруулсан :${user} && Он сар : ${writingDate}</h3>
        <table>
        <tr>
        <td>Гүйцэтгэгч</td>
        <td>${initiator}</td>
        </tr>
        <tr>
        <td>УБ/АЙМАГ</td>
        <td>${layer1}</td>
        </tr>
        <tr>
        <td>Дүүрэг/Сум</td>
        <td>${layer2}</td>
        </tr>
        <tr>
        <td>Хороо/Сум</td>
        <td>${layer3}</td>
        </tr>
        </table>
        </div>
        `
            }).join(" ");
        threadSectionDOM.innerHTML = allResult;
    } catch (err) {
        console.log(err);
    }
};
// const getAllLayer1 = async() => {
//     try {
//         let allResult = await axios.get("/api/v1/layer1s");
//         let { data } = allResult;
//         allResult = data.map((result) => {
//             const {
//                 name,
//             } = result;
//             return `
//             <option>${name}</option>
//         `
//         }).join(" ");
//         threadSection2DOM.innerHTML += allResult;
//     } catch (err) {
//         console.log(err);
//     }
// };
// getAllLayer1();

// const getAllLayer2 = async() => {
//     try {
//         let allResult = await axios.get("/api/v1/layer2s");
//         let { data } = allResult;
//         allResult = data.map((result) => {
//             const {
//                 name,
//             } = result;
//             return `
//             <option>${name}</option>
//         `
//         }).join(" ");
//         threadSection3DOM.innerHTML += allResult;
//     } catch (err) {
//         console.log(err);
//     }
// };
// getAllLayer2();

inputUserDOM.addEventListener("change", (e) => {
    inputUser = e.target.value;
    console.log("inputUser")
    console.log(inputUser)
});
// inputLayer3DOM.addEventListener("change", (e) => {
//     inputLayer3 = e.target.value;
//     console.log("inputLayer3")
//     console.log(inputLayer3)
// });

inputWritingDateDOM.addEventListener("change", (e) => {
    inputDate = e.target.value;
    console.log("inputDate")
    console.log(inputDate)
});
inputInitiatorDOM.addEventListener("change", (e) => {
    inputInitiator = e.target.value;
    console.log("inputInitiator")
    console.log(inputInitiator)
});
inputHotelStayDaysDOM.addEventListener("change", (e) => {
    inputHotelStayDays = e.target.value;
    console.log("inputHotelStayDays")
    console.log(inputHotelStayDays)
});
inputHotelPlaceDOM.addEventListener("change", (e) => {
    inputHotelPlace = e.target.value;
    console.log("inputHotelPlace")
    console.log(inputHotelPlace)
});
inputLengthBetweenFloorsDOM.addEventListener("change", (e) => {
    inputLengthBetweenFloors = e.target.value;
    console.log("inputLengthBetweenFloors")
    console.log(inputLengthBetweenFloors)
});
inputTotalCableLengthDOM.addEventListener("change", (e) => {
    inputTotalCableLength = e.target.value;
    console.log("inputTotalCableLength")
    console.log(inputTotalCableLength)
});
inputLattDOM.addEventListener("change", (e) => {
    inputLatt = e.target.value;
    console.log("inputLatt")
    console.log(inputLatt)
});
inputLongtDOM.addEventListener("change", (e) => {
    inputLongt = e.target.value;
    console.log("inputLongt")
    console.log(inputLongt)
});
inputHotelCostDOM.addEventListener("change", (e) => {
    inputHotelCost = e.target.value;
    console.log("inputHotelCost")
    console.log(inputHotelCost)
});
inputNiitOrtsDOM.addEventListener("change", (e) => {
    inputNiitOrts = e.target.value;
    console.log("inputNiitOrts")
    console.log(inputNiitOrts)
});
inputFloorDOM.addEventListener("change", (e) => {
    inputFloor = e.target.value;
    console.log("inputFloor")
    console.log(inputFloor)
});
inputFamilyDOM.addEventListener("change", (e) => {
    inputFamily = e.target.value;
    console.log("inputFamily")
    console.log(inputFamily)
});
inputEmployeeNumberDOM.addEventListener("change", (e) => {
    inputEmployeeNumber = e.target.value;
    console.log("inputEmployeeNumber")
    console.log(inputEmployeeNumber)
});
inputEmployeeCostDOM.addEventListener("change", (e) => {
    inputEmployeeCost = e.target.value;
    console.log("inputEmployeeCost")
    console.log(inputEmployeeCost)
});

inputCarTypeDOM.addEventListener("change", (e) => {
    inputCarType = e.target.value;
    console.log("inputCarType")
    console.log(inputCarType)
});
inputRideCostDOM.addEventListener("change", (e) => {
    inputRideCost = e.target.value;
    console.log("inputRideCost")
    console.log(inputRideCost)
});
inputRideDurationDOM.addEventListener("change", (e) => {
    inputRideDuration = e.target.value;
    console.log("inputRideDuration")
    console.log(inputRideDuration)
});
inputLayer1sDOM.addEventListener("change", (e) => {
    inputLayer1s = e.target.value;
    // getAllLayer2();
    console.log(inputLayer1s);
})
inputLayer2sDOM.addEventListener("change", (e) => {
    inputLayer2s = e.target.value;
    console.log(inputLayer2s)
})



formDOM.addEventListener("submit", async(e) => {
    e.preventDefault();
    if (inputUser) {
        try {
            await axios.post("/api/v1/result", {
                user: inputUser,
                // layer1: inputLayer1,
                // layer1: inputLayer1s,
                // layer2: inputLayer2s,
                // layer3: inputLayer3,
                // initiator: inputInitiator,
                writingDate: inputDate,
                // niitOrts: inputNiitOrts,
                // totalfloor: inputFloor,
                // totalFamily: inputFamily,
                // LengthBetweenFloors: inputLengthBetweenFloors,
                // totalCableLength: inputTotalCableLength,
                // EngineerEmployeeNumber: inputEmployeeNumber,
                // EngineerEmployeeCost: inputEmployeeCost,
                hotelStayDays: inputHotelStayDays,
                // hotelPlace: inputHotelPlace,
                hotelCost: inputHotelCost,
                // MaterialTotalCost: inputMaterialCost,
                // MaterialTotalCost: globalTotalSum,
                // MaterialTotalNumber: inputMaterialNumber,
                // MaterialTotalNumber: globalTotalNum,
                // latt: inputLatt,
                // longt: inputLongt,
                // carType: inputCarType,
                // rideDuration: inputRideDuration,
                // rideCost: inputRideCost,

            });
            console.log('user ' + user);
            // getAllResults();
            console.log("done");
        } catch (err) {
            console.log("didnt work")
            console.log(err);
        }
    } else {
        console.log("error");
    }
})