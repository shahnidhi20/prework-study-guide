  var topics = ["HTML", "CSS", "GIT", "Javascript"];

var randormTopic = topics[Math.floor(Math.random() * topics.length)];

function listOfTopics(){
  for(var i = 0; i < topics.length ; i++){
    console.log(topics[i]);
  }
}


function selectTopic(){
    if(randormTopic === "HTML"){
        console.log("This is HTML!!");
    }
    else if(randormTopic === "CSS"){
        console.log("This is CSS!!");
    }
    else if(randormTopic === "GIT"){
        console.log("This is GIT!!");
    }
    else if(randormTopic === "Javascript"){
        console.log("This is Javascript!!");
    }else{
        console.log("Please try again!!!");
    }


}


console.log("Here are the topics for pre-word");
listOfTopics();

console.log("Which topic should be study first");
selectTopic();