var firstname, lastname, username, address,petname;

function readFom() {
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  username = document.getElementById("username").value;
  address = document.getElementById("address").value;
  petname = document.getElementById("petname").value;
  console.log(firstname, lastname, username, address,petname);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("pets/" + username)
    .set({
      firstname: firstname,
      lastname: lastname,
      username: username,
      address: address,
      petname: petname,
    });
  alert("Data Inserted");
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("username").value = "";
  document.getElementById("address").value = "";
  document.getElementById("petname").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("pets/" + username)
    .on("value", function (snap) {
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("lastname").value = snap.val().lastname;
      document.getElementById("username").value = snap.val().username;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("petname").value = snap.val().petname;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("pets/" + username)
    .update({
      //   rollNo: username,
      firstname: firstname,
      lastname: lastname,
      address: address,
      petname: petname,
    });
  alert("Data Update");
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("username").value = "";
  document.getElementById("address").value = "";
  document.getElementById("petname").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("pets/" + username)
    .remove();
  alert("Data Deleted");
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("username").value = "";
  document.getElementById("address").value = "";
  document.getElementById("petname").value = "";
};

