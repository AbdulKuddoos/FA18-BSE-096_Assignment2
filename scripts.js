var id = 0;
var updateId = "";

$(function () {
  $("#updateBtn").prop("disabled", true);
  $("#cities-list").val("");
  $("#resetBtn").click(resetFields);
  $("#addBtn").click(add);
  $("#updateBtn").click(rowUpdate);
});

function resetFields() {
  $("#name").val("");
  $("#age").val("");
  $("#cities-list").val("");
  $("#male").prop("checked", false);
  $("#female").prop("checked", false);
  $("#addBtn").removeAttr("disabled");
  $("#updateBtn").prop("disabled", true);
}

function add() {
  var name = $("#name").val();
  var age = $("#age").val();
  var city = $("#cities-list").val();
  var gender = $("input[name='gender']:checked").val();
  console.log(parseInt(age) + 1);

  if (validateInput(parseInt(age), String(name))) {
    var markup =
      "<tr data-id=" +
      id +
      "><td>" +
      name +
      "</td><td>" +
      gender +
      "</td><td>" +
      age +
      "</td><td>" +
      city +
      "</td><td><a href='#' onClick = 'updateRow(this)'>update</a> / <a href='#' onClick= 'deleteRow(this)' >remove</a></td></tr>";

    $("#t-1").append(markup);

    id++;
    resetFields();
  } else
    alert(
      "Enter age between 10 to 50\nName comprises of only characters\nName must contain 10 or below characters"
    );
}

function validateInput(age, name) {
  var n = name.length;
  if (name.length > 10) return false;
  else if (age >= 10 && age <= 50) if (!/[^a-zA-Z]/.test(name)) return true;
  return false;
}

function deleteRow(row) {
  $(row).closest("tr").remove();
}

function updateRow(row) {
  $("#updateBtn").removeAttr("disabled");
  $("#addBtn").prop("disabled", true);

  var row = $(row).closest("tr")[0];
  var name = row.cells[0].innerHTML;
  var gender = row.cells[1].innerHTML;
  var age = row.cells[2].innerHTML;
  var city = row.cells[3].innerHTML;

  updateId = $(row).attr("data-id");

  $("#name").val(name);
  $("#age").val(age);
  $("#cities-list").val(city);

  if (gender == "male") $("#male").prop("checked", true);
  else $("#female").prop("checked", true);
}

function rowUpdate() {
  var name = $("#name").val();
  var age = $("#age").val();
  var city = $("#cities-list").val();
  var gender = $("input[name='gender']:checked").val();
  console.log(parseInt(age) + 1);
  $("#t-1 tr").each(function (row, tr) {
    if (updateId == $(tr).attr("data-id")) {
      $(tr).replaceWith(
        "<tr data-id=" +
          updateId +
          "><td>" +
          name +
          "</td><td>" +
          gender +
          "</td><td>" +
          age +
          "</td><td>" +
          city +
          "</td><td><a href='#' onClick = 'updateRow(this)'>update</a> / <a href='#' onClick= 'deleteRow(this)' >remove</a></td></tr>"
      );
      resetFields();
    }
  });
}
