//loop through the entire array
//for each item, split into minutes and hours
//add hours to one variable, minutes to another
//take all minutes added up and divide them by hours
//convert others into minutes 


var worktime = [
"00:20",
"00:30",
"00:38",
"00:15",
"00:23",
"00:32",
"00:22",
"00:20",
"00:28",
"00:37",
"00:15",
"00:42",
"00:44",
"00:47",
"01:30",
"00:45",
"01:00",
"02:25",
"00:12",
"00:48",
"01:13",
"00:15",
"00:50",
"00:10",
"00:28",
"01:27",
"00:35",
"01:32",
"00:37",
"01:42",
"00:25",
"00:22",
"00:32",
"00:30",
"01:01",
];



var worktimeAdder = {
    minutes:0,
    hours:0,

    timeSplitter: function(worktime){
        for(i = 0; i < worktime.length; i++){
            //creates a new variable that holds hte time in an array dividing minutes and hours
            var splitterArray = worktime[i].split(":");
            //sets the hours property to the first index of the array, and the minutes to the second index.
            this.hours += parseInt(splitterArray[0]);
            this.minutes += parseInt(splitterArray[1]);
        }
        //after the loops is complete it breaks the minutes down into hours
        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
    }
};

function runWorktimeAdder(worktime) {
    worktimeAdder.timeSplitter(worktime);
    console.log(worktimeAdder.hours + " Hours and " + worktimeAdder.minutes + " minutes");
}

runWorktimeAdder(worktime);



