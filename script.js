displayData();
// to delete an item
function deleteItem(x)
{
    var storedData = localStorage.getItem("tasks");
    var dataArray = storedData.split(",");
    dataArray.splice(x, 1);
    localStorage.setItem("tasks", dataArray.join(","));
    document.getElementById("myList").innerHTML = "";
    if (dataArray.length > 0) {
      displayData();
    } else {
      removeAll();
    }
}

//   to get all the data
function displayData(){
  var storedData = localStorage.getItem("tasks");
  if (storedData !== null) {
  document.getElementById("emptyBox").style.visibility = "hidden";
  document.getElementById("emptyBox").style.height = "0";
  document.getElementById("emptyBox").style.padding = "0";
    var dataArray = storedData.split(",");
    var list = document.getElementById("myList");
    for (var i = 0; i < dataArray.length; i++) {
      var listItem = document.createElement("li");
      listItem.classList.add("task-lists"); 
      listItem.textContent = dataArray[i];
      var button = document.createElement("button");
      button.innerHTML = '<ion-icon class="trash-icon" name="trash-outline"></ion-icon>';
      button.classList.add("delete-btn"); 
      button.setAttribute("onclick", "deleteItem(" + i + ")");
      listItem.appendChild(button);
      list.appendChild(listItem);
    }
}
else
{
  document.getElementById("emptyBox").style.height = "auto";
  document.getElementById("emptyBox").style.padding = "0 0 2rem 0";
  document.getElementById("emptyBox").style.visibility = "visible";
}
};
// to delete all the value
function removeAll()
{
 localStorage.removeItem("tasks");
 document.getElementById("myList").innerHTML = "";
 displayData();
}
// to store the data
function storeValue() {
  var inputValue = document.getElementById("inputTask").value;
  if (localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", inputValue);
    document.getElementById("myList").innerHTML = "";
    displayData();
    document.getElementById("inputTask").value = "";
  } else {
    var tasksValue = localStorage.getItem("tasks");
    tasksValue = tasksValue.split(",");
    tasksValue[tasksValue.length] = inputValue;
    localStorage.setItem("tasks", tasksValue.join(","));
    document.getElementById("myList").innerHTML = "";
    displayData();
    document.getElementById("inputTask").value = "";
  }
}
// to get date
var today = new Date();
var date = today.getDate();
var month = today.toLocaleString('default', { month: 'long' });
var year = today.getFullYear();
var formattedDate = date + " " + month + " " + year;
document.getElementById("todayDate").innerHTML = formattedDate;
