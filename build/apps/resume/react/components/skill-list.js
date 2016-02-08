MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        
        <ul className="collection">
         <li className="collection-item">{this.props.skill}</li>
        </ul>
        </div>
      </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">

        {skillElements}

        </div>
      </div>
    );
  }
});
