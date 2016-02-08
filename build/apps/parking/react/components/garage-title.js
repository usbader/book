MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
         <h2 className="header center-align">{this.props.title}</h2>        
        </div>
      </div>
    );
  }
});
