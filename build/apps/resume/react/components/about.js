MyComponents.About = React.createClass({
  
  render: function() {
    var floatt='right'
    return (
      <div className="card">
        <div className="card-content">
        <img src="img/profile.jpg" style={{float: floatt}} width="64" height="64"/>
        <p> Name: Bader Alshemaimri</p>
        <p> Major: Computer Science </p>
        <p> Degree: Master</p>
        <p> 
        <span>Github:</span> 
        <a href="http://www.github.com/usbader"> github.com/usbader</a>
        </p>

        </div>
      </div>
    );
  }

});
