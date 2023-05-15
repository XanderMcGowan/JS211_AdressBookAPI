let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPosts();
  setTimeout(() => {
   displayPost()
   addimage();
  }, "100");
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((users) => (arrayOfUsers = users));
};

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfUsers.results[0]);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const list0 = document.getElementById("user0");
  const li0 = document.createElement("li");
  const user0 = document.createTextNode(
    `${arrayOfUsers.results[0].name.first} ${arrayOfUsers.results[0].name.last} `
  );

  const list1 = document.getElementById("user1");
  const li1 = document.createElement("li");
  const user1 = document.createTextNode(
    `${arrayOfUsers.results[1].name.first} ${arrayOfUsers.results[1].name.last} `
  );

  const list2 = document.getElementById("user2");
  const li2 = document.createElement("li");
  const user2 = document.createTextNode(
    `${arrayOfUsers.results[2].name.first} ${arrayOfUsers.results[2].name.last} `
  );

  const list3 = document.getElementById("user3");
  const li3 = document.createElement("li");
  const user3 = document.createTextNode(
    `${arrayOfUsers.results[3].name.first} ${arrayOfUsers.results[3].name.last} `
  );

  const list4 = document.getElementById("user4");
  const li4 = document.createElement("li");
  const user4 = document.createTextNode(
    `${arrayOfUsers.results[4].name.first} ${arrayOfUsers.results[4].name.last} `
  );
  
  
  li0.appendChild(user0);
  list0.append(li0);

  li1.appendChild(user1);
  list1.append(li1);

  li2.appendChild(user2);
  list2.append(li2);

  li3.appendChild(user3);
  list3.append(li3);

  li4.appendChild(user4);
  list4.append(li4);
};

function addimage() {
  var img = new Image();
  img.src = arrayOfUsers.results[0].picture.large;
  img0.appendChild(img);
  var img = new Image();
  img.src = arrayOfUsers.results[1].picture.large;
  img1.appendChild(img);
  var img = new Image();
  img.src = arrayOfUsers.results[2].picture.large;
  img2.appendChild(img);
  var img = new Image();
  img.src = arrayOfUsers.results[3].picture.large;
  img3.appendChild(img);
  var img = new Image();
  img.src = arrayOfUsers.results[4].picture.large;
  img4.appendChild(img);
}

const getInfo = (index) => {
  document.getElementById("button"+index).style.display = "none";
  
  let info = `Gender: ${arrayOfUsers.results[index].gender}
  Age: ${arrayOfUsers.results[index].dob.age}
  Email: ${arrayOfUsers.results[index].email}
  `



  document.getElementById("more-info"+index).innerHTML = info
}
