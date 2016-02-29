MyComponents.About = React.createClass({
  
  render: function() {
    var floatt='right'
    return (
      <div className="card">
        <div className="card-content">
        <img src="profile.jpg" style={{float: "right", width: 64 + "px", height: 64 + "px"}}/>
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
