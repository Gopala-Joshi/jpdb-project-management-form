const connToken = CONFIG.connToken;
const dbName = "COLLEGE-DB";
const relName = "PROJECT-TABLE";
const irl = "/api/irl";
const iml = "/api/iml";

let rec_no = null; // store record number

// RESET FORM
function resetForm() {
  $("#projectForm")[0].reset();

  $("#projectId").prop("disabled", false).focus();
  $("input").not("#projectId").prop("disabled", true);

  $("#saveBtn, #updateBtn, #resetBtn").prop("disabled", true);

  rec_no = null;
}

// GET PROJECT
function getProject() {
  const id = $("#projectId").val().trim();
  if (!id) return;

  const req = createGET_BY_KEYRequest(
    connToken,
    dbName,
    relName,
    JSON.stringify({ "Project-ID": id })
  );

  $.ajaxSetup({ async: false });
  const result = executeCommandAtGivenBaseUrl(req,"http://api.login2explore.com:5577", irl);
  $.ajaxSetup({ async: true });

  if (result.status === 400) {
    enableSaveMode();
  } else if (result.status === 200) {
    const data = JSON.parse(result.data);

    rec_no = data.rec_no; // store rec_no

    fillData(data.record);
    enableUpdateMode();
  }
}

// ENABLE SAVE MODE
function enableSaveMode() {
  $("input").prop("disabled", false);
  $("#projectId").prop("disabled", false);

  $("#saveBtn, #resetBtn").prop("disabled", false);
  $("#updateBtn").prop("disabled", true);

  $("#projectName").focus();
}

// ENABLE UPDATE MODE
function enableUpdateMode() {
  $("#projectId").prop("disabled", true);
  $("input").not("#projectId").prop("disabled", false);

  $("#updateBtn, #resetBtn").prop("disabled", false);
  $("#saveBtn").prop("disabled", true);

  $("#projectName").focus();
}

// FILL FORM
function fillData(data) {
  $("#projectName").val(data["Project-Name"]);
  $("#assignedTo").val(data["Assigned-To"]);
  $("#assignDate").val(data["Assignment-Date"]);
  $("#deadline").val(data["Deadline"]);
}

// VALIDATE + GET DATA
function getFormData() {
  const data = {
    "Project-ID": $("#projectId").val().trim(),
    "Project-Name": $("#projectName").val().trim(),
    "Assigned-To": $("#assignedTo").val().trim(),
    "Assignment-Date": $("#assignDate").val(),
    "Deadline": $("#deadline").val()
  };

  for (let key in data) {
    if (!data[key]) {
      alert(`${key} is required`);
      return "";
    }
  }

  return JSON.stringify(data);
}

// SAVE (PUT)
function saveData() {
  const jsonStr = getFormData();
  if (!jsonStr) return;

  const req = createPUTRequest(connToken, jsonStr, dbName, relName);

  $.ajaxSetup({ async: false });
  executeCommandAtGivenBaseUrl(req,"http://api.login2explore.com:5577", iml);
  $.ajaxSetup({ async: true });

  alert("Project Saved!");
  resetForm();
}

// UPDATE (FIXED)
function updateData() {
  const jsonStr = getFormData();
  if (!jsonStr || rec_no === null) {
    alert("No record selected to update");
    return;
  }

  const req = createUPDATERecordRequest(  // ✅ CORRECT FUNCTION
    connToken,
    jsonStr,
    dbName,
    relName,
    rec_no
  );

  $.ajaxSetup({ async: false });
  executeCommandAtGivenBaseUrl(req,"http://api.login2explore.com:5577", iml);
  $.ajaxSetup({ async: true });

  alert("Project Updated!");
  resetForm();
}

// INIT
$(document).ready(function () {
  resetForm();
});