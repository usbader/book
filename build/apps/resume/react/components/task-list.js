MyComponents.Task = React.createClass({

  render: function() {
  
  var color = ''
   if(this.props.task.priority=='high'){
              color = 'red'
            } else if(this.props.task.priority=='medium'){
              color = 'yellow'
            } else if(this.props.task.priority=='completed'){
              color = 'blue'
            } else {
              color = 'green'
            }
    return (
   <tr style={{backgroundColor: color}}><td><font color="white">{this.props.task.name}</font></td><td><font color="white">{this.props.task.priority}</font></td><td><font color="white">{this.props.task.type}</font></td><td><font color="white">{this.props.task.deadline}</font></td></tr>
    )
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {
    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">

        <table className="striped centered">
         <thead><tr><th>Task Name</th><th>Priority</th><th>Type</th><th>Deadline</th></tr></thead>
          <tbody>{taskElements}</tbody> 
        </table>

          </div>
    )
  }
});