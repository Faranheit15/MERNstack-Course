var database = [{
    username: "Faran",
    password: "abc123"
},
{
    username: "Bro",
    password: "hello"
},
{
    username: "Bitch",
    password: "heya"
}];
var newsFeed = [{
        user: "Alexxa",
        activity: "JavaScript is awesome"
    },
    {
        user: "James",
        activity: "Dancing in the rain"
    }
];

var usernamePrompt = prompt("Enter the username");
var passwordPrompt = prompt("Enter the password");

function isUserValid(username,password) {
    for(var i=0;i<database.length;i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username,password) {
    if(isUserValid(username,password)) {
        console.log(newsFeed);
    } else {
            alert("Invalid login credentials");
    }
}

signIn(usernamePrompt, passwordPrompt); 
