function workflowInsert(workflowId, name, description, content, createdBy, createdOn, modifiedBy, modifiedOn) {
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var Workflow = Parse.Object.extend("WorkflowInstance");
  var workflow = new Workflow();
  var query = new Parse.Query(Workflow);
  workflow.save({
    WorkflowId : workflowId
    Name : name,
    Description : description,
    Content : content,
    CreatedBy : createdBy,
    CreatedOn : createdOn,
    ModifiedBy : modifiedBy,
    ModifiedOn : modifiedOn
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

function deleteWorkflow(workflowId)
{
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var Workflow = Parse.Object.extend("Workflow");
  var workflow = new Workflow();
  var query = new Parse.Query(Workflow);
  query.equalTo("WorkflowId", workflowId);
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