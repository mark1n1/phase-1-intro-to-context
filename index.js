// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(records) {
  return records.map(createEmployeeRecord);
}

function createTimeInEvent(record, date) {
  let dateArray = date.split(' ');
  let dateIn = dateArray[0];
  let hourIn = parseInt(dateArray[1].slice(0,2) + "00");

  let object = {
    type: "TimeIn",
    hour: hourIn,
    date: dateIn
  };
  // console.log(object);
  record.timeInEvents.push(object);
  return record;
}

function createTimeOutEvent(record, date) {
  let dateArray = date.split(' ');
  let dateOut = dateArray[0];
  let hourOut = parseInt(dateArray[1].slice(0, 2) + "00");

  let object = {
    type: "TimeOut",
    hour: hourOut,
    date: dateOut
  }

  record.timeOutEvents.push(object);

  return record
}

function hoursWorkedOnDate(record, date) {
  let hourIn = record.timeInEvents.find((day) => date === day.date);
  let hourOut = record.timeOutEvents.find((day) => date === day.date);

  return ((hourOut.hour - hourIn.hour) / 100);
}

function wagesEarnedOnDate(record, date) {
  return hoursWorkedOnDate(record, date) * record.payPerHour;
}

function allWagesFor(record) {

}

function calculatePayroll() {
  
}