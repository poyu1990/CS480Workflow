function workflowInstanceInsert(workflowInstanceId, workflowId, worflowData, status, sumbittedBy, sumbittedOn) {
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstance = Parse.Object.extend("WorkflowInstance");
  var workflowInstance = new WorkflowInstance();
  var query = new Parse.Query(TestObject);
  testObject.save({
    WorkflowInstanceId: workflowInstanceId,
    WorkflowId: workflowId,
    WorflowData: worflowData,
    Status: status,
    SumbittedBy: sumbittedBy,
    SumbittedOn: sumbittedOn
  }, {
    success: function(object) {
      alert("yay");
    },
    error: function(model, error) {
      alert("nay");
    }
  });
        }
      },
      error: function(error) {
        alert("Could not validate uniqueness for this BusStop object.");
      }
    });
}
function updateStatus(workflowInstanceId, status)
{
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstance = Parse.Object.extend("WorkflowInstance");
  var workflowInstance = new WorkflowInstance();
  var query = new Parse.Query(WorkflowInstance);
  query.equalTo("WorkflowInstanceId", workflowInstanceId);
    query.first({
      success: function(results) {
        results.save(null, {
          success: function(results) {
            results.set("Status", status);
            results.save();
          },
      error: function(error) {
    }
        });  
    }
}

function updateFormData(workflowInstanceId, worflowData)
{
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstance = Parse.Object.extend("WorkflowInstance");
  var workflowInstance = new WorkflowInstance();
  var query = new Parse.Query(WorkflowInstance);
  query.equalTo("WorkflowInstanceId", workflowInstanceId);
    query.first({
      success: function(results) {
        results.save(null, {
          success: function(results) {
            results.set("WorflowData", worflowData);
            results.save();
          }
        });  
    },
    error:function(results) {
      alert("woop");
    }
  });
}

function updateSubmittedBy(workflowInstanceId, sumbittedBy)
{
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstance = Parse.Object.extend("WorkflowInstance");
  var workflowInstance = new WorkflowInstance();
  var query = new Parse.Query(WorkflowInstance);
  query.equalTo("WorkflowInstanceId", workflowInstanceId);
    query.first({
      success: function(results) {
        results.save(null, {
          success: function(results) {
            results.set("SumbittedBy", sumbittedBy);
            results.save();
          }
        });  
    },
    error:function(results) {
      alert("woop");
    }
  });
}
function deleteWorkflowInstance(workflowInstanceId)
{
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstance = Parse.Object.extend("WorkflowInstance");
  var workflowInstance = new WorkflowInstance();
  var query = new Parse.Query(WorkflowInstance);
  query.equalTo("WorkflowInstanceId", workflowInstanceId);
    query.first({
      success: function(results) {
        results.destroy({
          success: function(myObject) {
   
          error: function(myObject, error) {
  }
})
          }
        });  
    },
    error:function(results) {
      alert("woop");
    }
  });
}